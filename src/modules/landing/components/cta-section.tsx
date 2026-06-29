'use client';

export function CTASection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg p-12 my-12 text-center">
      <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
      <p className="text-xl text-slate-100 mb-8 max-w-2xl mx-auto">
        Clone the boilerplate now and start building your next project with Geo-SEO and AEO optimization.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://github.com/yucellkilic/ultimate-geo-seo-aeo-boilerplate"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition"
        >
          Clone Repository
        </a>
        <a
          href="#docs"
          className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
        >
          Read Documentation
        </a>
      </div>
    </section>
  );
}
