import mongoose from 'mongoose';

const LinkSchema = new mongoose.Schema({
    originalUrl: { type: String, required: true },
    shortSlug: { type: String, required: true, unique: true },
    title: { type: String },
    description: { type: String },
    clickCount: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

export const Link = mongoose.model('Link', LinkSchema);
