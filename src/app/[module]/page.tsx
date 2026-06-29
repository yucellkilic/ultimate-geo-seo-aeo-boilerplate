import { getEnabledModules } from '@/config/modules.config';

export async function generateStaticParams() {
  const modules = getEnabledModules();
  return modules.map((module) => ({
    module: module.key,
  }));
}

export default function ModulePage({ params }: { params: { module: string } }) {
  return (
    <div className="min-h-screen bg-slate-900 text-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Module: {params.module}</h1>
        <p className="text-slate-300 mb-8">This is a placeholder page for the {params.module} module.</p>
        <div className="bg-slate-700 rounded-lg p-6">
          <p className="text-slate-400">Module configuration can be customized in src/config/modules.config.ts</p>
        </div>
      </div>
    </div>
  );
}
