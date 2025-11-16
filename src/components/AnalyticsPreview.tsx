import { TrendingUp, Eye, MousePointer, Users } from 'lucide-react';

export default function AnalyticsPreview() {
  const stats = [
    { icon: Eye, label: 'Total Views', value: '12,458', change: '+12.5%', color: 'from-blue-500 to-cyan-500' },
    { icon: MousePointer, label: 'Total Clicks', value: '8,234', change: '+8.2%', color: 'from-purple-500 to-pink-500' },
    { icon: TrendingUp, label: 'Conversion Rate', value: '66.1%', change: '+4.3%', color: 'from-green-500 to-emerald-500' },
    { icon: Users, label: 'Unique Visitors', value: '9,123', change: '+15.8%', color: 'from-orange-500 to-amber-500' },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Track Every Click,
              <br />
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Grow Smarter
              </span>
            </h2>

            <p className="text-xl text-white/60">
              Get detailed insights with our powerful analytics dashboard.
              Understand your audience and optimize your bio-link performance.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />
                <span className="text-white/80">Real-time tracking</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
                <span className="text-white/80">Detailed click analytics</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                <span className="text-white/80">Geographic insights</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-105"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>

                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>

                <div className="text-sm text-white/60 mb-2">
                  {stat.label}
                </div>

                <div className="text-sm font-medium text-green-400">
                  {stat.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
