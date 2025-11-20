import { Palette, BarChart3, Smartphone, MousePointer2, Eye, Zap } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: MousePointer2,
      title: 'Drag & Drop Builder',
      description: 'Intuitive interface to create your bio-link page in seconds. No coding required.',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Palette,
      title: 'Unlimited Customization',
      description: 'Choose from themes, colors, fonts, and icons. Make it truly yours.',
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Track clicks, views, and conversion rates with real-time dashboards.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Eye,
      title: 'Live Preview',
      description: 'See changes instantly as you build. What you see is what you get.',
      gradient: 'from-teal-500 to-emerald-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Perfect on every device. Responsive, fast, and beautiful.',
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      icon: Zap,
      title: 'PWA Ready',
      description: 'Works offline, installs like an app. Cross-device compatibility built-in.',
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
