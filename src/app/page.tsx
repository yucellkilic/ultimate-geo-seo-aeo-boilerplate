'use client';

import { GeoInfo } from '@/components/geo-info';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            🌍 Ultimate Geo-SEO & AEO Boilerplate
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Next.js 14 Universal Boilerplate with Ultra Geo-SEO, AEO & Performance Max
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <div className="bg-slate-700 rounded-lg p-6 hover:bg-slate-600 transition">
              <h3 className="text-lg font-semibold mb-2">🌐 Geo-SEO</h3>
              <p className="text-slate-300 text-sm">IP detection, hreflang, multi-region</p>
            </div>
            <div className="bg-slate-700 rounded-lg p-6 hover:bg-slate-600 transition">
              <h3 className="text-lg font-semibold mb-2">🤖 AEO</h3>
              <p className="text-slate-300 text-sm">ChatGPT, Claude, Gemini optimized</p>
            </div>
            <div className="bg-slate-700 rounded-lg p-6 hover:bg-slate-600 transition">
              <h3 className="text-lg font-semibold mb-2">⚡ Performance</h3>
              <p className="text-slate-300 text-sm">Core Web Vitals optimized</p>
            </div>
          </div>

          <GeoInfo />

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a 
              href="https://github.com/yucellkilic/ultimate-geo-seo-aeo-boilerplate" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition inline-flex items-center justify-center"
            >
              🔗 GitHub Repository
            </a>
            <a 
              href="/api/health" 
              className="bg-slate-600 hover:bg-slate-700 px-8 py-3 rounded-lg font-semibold transition inline-flex items-center justify-center"
            >
              🏥 Health Check
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">📦 Features</h2>
            <ul className="space-y-2 text-slate-300">
              <li>✅ IP-based geolocation</li>
              <li>✅ Auto hreflang tags</li>
              <li>✅ Structured data (JSON-LD)</li>
              <li>✅ Image optimization</li>
              <li>✅ Rate limiting</li>
              <li>✅ Docker ready</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">🛠️ Tech Stack</h2>
            <ul className="space-y-2 text-slate-300">
              <li>📘 Next.js 14</li>
              <li>⚛️ React 19</li>
              <li>🔷 TypeScript</li>
              <li>🎨 Tailwind CSS</li>
              <li>🗄️ Prisma ORM</li>
              <li>🔐 NextAuth.js</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
