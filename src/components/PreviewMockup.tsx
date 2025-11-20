import { Instagram, Twitter, Youtube, Mail } from 'lucide-react';

export default function PreviewMockup() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 blur-3xl opacity-30 animate-pulse" />

      <div className="relative backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 p-8 shadow-2xl">
        <div className="bg-gradient-to-b from-white/5 to-white/0 rounded-2xl p-6 space-y-4">
          <div className="flex flex-col items-center space-y-3">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 p-0.5">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-2xl">
                ✨
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-white font-semibold text-lg">@yourhandle</h3>
              <p className="text-white/60 text-sm">Creative Designer & Developer</p>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { icon: Youtube, label: 'Watch My Latest Video', color: 'from-red-500 to-red-600' },
              { icon: Instagram, label: 'Follow on Instagram', color: 'from-pink-500 to-purple-500' },
              { icon: Twitter, label: 'Check out my Twitter', color: 'from-blue-400 to-blue-600' },
              { icon: Mail, label: 'Contact Me', color: 'from-green-400 to-green-600' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group backdrop-blur-sm bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 flex items-center gap-3 cursor-pointer transition-all hover:scale-105"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-medium flex-1">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-500 rounded-full blur-2xl opacity-50" />
      <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500 rounded-full blur-2xl opacity-50" />
    </div>
  );
}
