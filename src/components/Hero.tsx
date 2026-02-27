import { ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';
import LinkModal from './LinkModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-white/80">Premium Developer Presence</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold leading-tight max-w-4xl">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              SnapLink
            </span>
            <br />
            <span className="text-white">
              Your Professional Identity, Centered.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/60 max-w-2xl">
            The minimal, high-performance bio-link tool designed for developers.
            Connect your GitHub, portfolio, and projects in one sleek interface.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group px-10 py-5 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all flex items-center gap-2"
            >
              Build Your Link
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <LinkModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      </div>
    </section>
  );
}
