import { ArrowRight, Sparkles } from 'lucide-react';
import PreviewMockup from './PreviewMockup';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-white/80">Modern Bio-Link Generator</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                SnapLink
              </span>
              <br />
              <span className="text-white">
                Create & Share
              </span>
            </h1>

            <p className="text-xl text-white/60 max-w-lg">
              Create, customize, and share your personal bio-link instantly.
              Drag-and-drop simplicity meets powerful analytics.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full backdrop-blur-sm bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all">
                Watch Demo
              </button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-white">50K+</div>
                <div className="text-sm text-white/60">Active Users</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <div className="text-3xl font-bold text-white">1M+</div>
                <div className="text-sm text-white/60">Links Created</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-sm text-white/60">Uptime</div>
              </div>
            </div>
          </div>

          <PreviewMockup />
        </div>
      </div>
    </section>
  );
}
