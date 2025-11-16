import { Link2, Twitter, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  const links = {
    Product: ['Features', 'Pricing', 'Templates', 'Analytics'],
    Company: ['About', 'Blog', 'Careers', 'Contact'],
    Resources: ['Documentation', 'Help Center', 'API', 'Community'],
    Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
  };

  return (
    <footer className="relative py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center">
                <Link2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                SnapLink
              </span>
            </div>
            <p className="text-white/60 max-w-sm">
              Create, customize, and share your personal bio-link instantly.
              The modern way to connect your audience.
            </p>
            <div className="flex gap-3">
              {[Twitter, Github, Linkedin].map((Icon, idx) => (
                <button
                  key={idx}
                  className="w-10 h-10 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
                >
                  <Icon className="w-5 h-5 text-white/60" />
                </button>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <button className="text-white/60 hover:text-white transition-colors text-sm">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
