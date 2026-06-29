'use client';

interface FilterProps {
  categories: string[];
  onCategoryChange: (category: string) => void;
}

export function ProductFilter({ categories, onCategoryChange }: FilterProps) {
  return (
    <div className="bg-slate-700 rounded-lg p-6 mb-8">
      <h3 className="text-lg font-semibold mb-4">Filter by Category</h3>
      <div className="space-y-2">
        <button
          onClick={() => onCategoryChange('all')}
          className="block w-full text-left px-4 py-2 rounded hover:bg-slate-600 transition"
        >
          All Products
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className="block w-full text-left px-4 py-2 rounded hover:bg-slate-600 transition capitalize"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
