import { Link2, Twitter, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center">
                <Link2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                SnapLink
              </span>
            </div>
            <p className="text-white/60 max-w-sm">
              The professional identity platform for developers.
              Open source. Community driven.
            </p>
          </div>

          <div className="flex gap-4">
            {[Twitter, Github, Linkedin].map((Icon, idx) => (
              <button
                key={idx}
                className="w-12 h-12 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all group"
              >
                <Icon className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" />
              </button>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2025 SnapLink. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            Made with ❤️ for creators worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
