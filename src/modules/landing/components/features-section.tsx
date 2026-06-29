'use client';

const features = [
  {
    icon: '🌍',
    title: 'Geo-SEO Optimized',
    description: 'Built-in geolocation detection and multi-region support',
  },
  {
    icon: '🤖',
    title: 'AEO Ready',
    description: 'Optimized for AI search engines like ChatGPT and Claude',
  },
  {
    icon: '⚡',
    title: 'Performance Max',
    description: 'Core Web Vitals optimized and lightning-fast',
  },
  {
    icon: '📱',
    title: 'Fully Responsive',
    description: 'Works perfectly on all devices and screen sizes',
  },
  {
    icon: '🔒',
    title: 'Secure by Default',
    description: 'Built-in security headers and rate limiting',
  },
  {
    icon: '🚀',
    title: 'Production Ready',
    description: 'Deploy to production immediately with confidence',
  },
];

export function FeaturesSection() {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div key={feature.title} className="bg-slate-700 rounded-lg p-6 hover:bg-slate-600 transition">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-slate-300 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
