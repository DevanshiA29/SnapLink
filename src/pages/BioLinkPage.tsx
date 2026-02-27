import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Link2, Github, Twitter, Linkedin, Loader2, ArrowLeft } from 'lucide-react';

export default function BioLinkPage() {
    const { slug } = useParams();
    const [data, setData] = useState<{ originalUrl: string, clickCount: number, description?: string } | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5001/api/bio/${slug}`);
                setData(response.data);
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
            </div>
        );
    }

    if (error || !data) {
        return (
            <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Link Not Found</h2>
                <p className="text-white/60 mb-8">This professional link doesn't exist or has been removed.</p>
                <Link to="/" className="flex items-center gap-2 text-purple-400 hover:text-purple-300">
                    <ArrowLeft className="w-4 h-4" /> Back to SnapLink
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 relative overflow-hidden flex flex-col items-center py-20 px-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />

            <div className="relative z-10 w-full max-w-lg">
                <div className="flex flex-col items-center text-center space-y-6 mb-12">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 p-1">
                        <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-3xl">
                            🚀
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold text-white">Devanshi Awasthi</h1>
                        <p className="text-purple-400 font-medium">@{slug}</p>
                        {data.description && <p className="text-white/60 max-w-sm">{data.description}</p>}
                    </div>
                </div>

                <div className="space-y-4 mb-12">
                    <a
                        href={data.originalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block w-full p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Link2 className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-left">
                                <h3 className="text-white font-semibold">Primary Project</h3>
                                <p className="text-white/40 text-sm truncate max-w-[200px]">{data.originalUrl}</p>
                            </div>
                        </div>
                    </a>

                    {/* Placeholder professional links */}
                    {[
                        { icon: Github, label: 'GitHub Profile', color: 'from-gray-700 to-gray-900' },
                        { icon: Linkedin, label: 'LinkedIn', color: 'from-blue-600 to-blue-800' },
                        { icon: Twitter, label: 'Twitter / X', color: 'from-blue-400 to-blue-600' },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="group w-full p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl cursor-pointer transition-all hover:scale-[1.02]"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                    <item.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-white font-semibold">{item.label}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center space-y-4">
                    <div className="flex justify-center gap-3">
                        <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/40 font-medium">
                            {data.clickCount} total views
                        </div>
                    </div>
                    <Link to="/" className="inline-block text-white/40 hover:text-white/60 text-sm transition-colors">
                        Created with SnapLink
                    </Link>
                </div>
            </div>
        </div>
    );
}
