import { Palette, BarChart3, Smartphone, MousePointer2, Eye, Zap } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Zero runtime CSS and optimized assets ensure your bio-link loads in milliseconds.',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Palette,
      title: 'Markdown Powered',
      description: 'Full markdown support for your bio and custom sections. Style it your way.',
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      icon: BarChart3,
      title: 'Dev Analytics',
      description: 'Detailed insights into where your traffic comes from (GitHub, Twitter, StackOverflow).',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Smartphone,
      title: 'Open Source',
      description: 'Self-hostable and community-driven. You own your data and your identity.',
      gradient: 'from-teal-500 to-emerald-500',
    },
    {
      icon: MousePointer2,
      title: 'API First',
      description: 'Access your link data and analytics via a simple, powerful REST API.',
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      icon: Eye,
      title: 'CI/CD Integration',
      description: 'Deploy updates to your link automatically when you push to your portfolio repo.',
      gradient: 'from-violet-500 to-purple-500',
    },
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Everything You Need
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Powerful features to create, customize, and grow your online presence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all hover:scale-105 hover:shadow-2xl"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>

              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
