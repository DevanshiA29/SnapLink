import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, ExternalLink, Check, Loader2, Link2 } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import axios from 'axios';

interface LinkModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LinkModal({ isOpen, onClose }: LinkModalProps) {
    const [url, setUrl] = useState('');
    const [customSlug, setCustomSlug] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<{ shortSlug: string } | null>(null);
    const [copied, setCopied] = useState(false);
    const [error, setError] = useState('');

    const handleShorten = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const response = await axios.post('http://localhost:5001/api/links', {
                originalUrl: url,
                customSlug: customSlug || undefined,
            });
            setResult(response.data);
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.error || 'Failed to shorten URL');
            } else {
                setError('An unexpected error occurred');
            }
        } finally {
            setLoading(false);
        }
    };

    const copyToClipboard = () => {
        if (result) {
            navigator.clipboard.writeText(`http://localhost:5001/r/${result.shortSlug}`);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-gray-950/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full max-w-lg bg-gray-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
                    >
                        <div className="p-8">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center">
                                        <Link2 className="w-5 h-5 text-white" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-white">Build Your Link</h2>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-lg hover:bg-white/5 text-white/60 hover:text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {!result ? (
                                <form onSubmit={handleShorten} className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-white/60">Long URL</label>
                                        <input
                                            type="url"
                                            required
                                            placeholder="https://your-long-url.com/something-very-long"
                                            value={url}
                                            onChange={(e) => setUrl(e.target.value)}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-white/60">Custom Slug (Optional)</label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">snap.link/</span>
                                            <input
                                                type="text"
                                                placeholder="my-cool-link"
                                                value={customSlug}
                                                onChange={(e) => setCustomSlug(e.target.value)}
                                                className="w-full pl-[88px] pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                                            />
                                        </div>
                                    </div>

                                    {error && <p className="text-red-400 text-sm">{error}</p>}

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full py-4 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold text-lg hover:shadow-xl hover:shadow-purple-500/30 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                                    >
                                        {loading ? (
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                        ) : (
                                            <>
                                                Generate Link
                                                <Check className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            ) : (
                                <div className="space-y-8 animate-in fade-in zoom-in duration-300">
                                    <div className="flex flex-col items-center gap-6">
                                        <div className="p-6 bg-white rounded-2xl">
                                            <QRCodeSVG value={`http://localhost:5001/r/${result.shortSlug}`} size={160} />
                                        </div>
                                        <div className="text-center">
                                            <h3 className="text-xl font-semibold text-white">Your link is ready!</h3>
                                            <p className="text-white/60 text-sm">Scan the QR code or copy the link below</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-xl">
                                            <span className="flex-1 text-white font-medium truncate">
                                                http://localhost:5001/r/{result.shortSlug}
                                            </span>
                                            <button
                                                onClick={copyToClipboard}
                                                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all flex items-center gap-2"
                                            >
                                                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                                                <span className="text-xs font-semibold">{copied ? 'Copied' : 'Copy'}</span>
                                            </button>
                                        </div>

                                        <div className="flex gap-4">
                                            <a
                                                href={`http://localhost:5001/r/${result.shortSlug}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white text-sm font-semibold transition-all flex items-center justify-center gap-2"
                                            >
                                                Open Link <ExternalLink className="w-4 h-4" />
                                            </a>
                                            <button
                                                onClick={() => {
                                                    setResult(null);
                                                    setUrl('');
                                                    setCustomSlug('');
                                                }}
                                                className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white text-sm font-semibold transition-all"
                                            >
                                                Create Another
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="px-8 py-4 bg-white/5 border-t border-white/10 text-center">
                            <p className="text-white/40 text-xs">Permanent link • Analytics enabled • No expiry</p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
