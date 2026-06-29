export async function generateMetadata({ params }: { params: { module: string } }) {
  return {
    title: `${params.module.charAt(0).toUpperCase() + params.module.slice(1)} - Ultimate Boilerplate`,
    description: `Explore our ${params.module} module with advanced features and optimization.`,
  };
}
