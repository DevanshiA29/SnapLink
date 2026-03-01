import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { nanoid } from 'nanoid';
import { Link } from './models/Link.js';
import { Feedback } from './models/Feedback.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/snaplink';

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.post('/api/links', async (req: Request, res: Response) => {
    try {
        const { originalUrl, customSlug, title, description } = req.body;

        if (!originalUrl) {
            return res.status(400).json({ error: 'Original URL is required' });
        }

        const shortSlug = customSlug || nanoid(6);

        // Check if slug exists
        if (customSlug) {
            const existing = await Link.findOne({ shortSlug });
            if (existing) {
                return res.status(400).json({ error: 'Custom slug already taken' });
            }
        }

        const newLink = new Link({
            originalUrl,
            shortSlug,
            title,
            description
        });

        await newLink.save();
        res.status(201).json(newLink);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

app.post('/api/feedback', async (req: Request, res: Response) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const newFeedback = new Feedback({
            name,
            email,
            message
        });

        await newFeedback.save();
        res.status(201).json({ message: 'Feedback submitted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

app.get('/api/bio/:slug', async (req: Request, res: Response) => {
    try {
        const link = await Link.findOne({ shortSlug: req.params.slug });
        if (!link) {
            return res.status(404).json({ error: 'Link not found' });
        }
        res.json(link);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Redirect route
app.get('/r/:slug', async (req: Request, res: Response) => {
    try {
        const link = await Link.findOneAndUpdate(
            { shortSlug: req.params.slug },
            { $inc: { clickCount: 1 } }
        );

        if (!link) {
            return res.status(404).send('Link not found');
        }

        res.redirect(link.originalUrl);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
