import { Link2 } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center">
            <Link2 className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            SnapLink
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors">
            Features
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors">
            Pricing
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors">
            Sign In
          </button>
          <button className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
