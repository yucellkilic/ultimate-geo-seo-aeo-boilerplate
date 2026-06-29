import { BlogPostsList } from '@/modules/blog/components/blog-posts-list';
import { SearchForm } from '@/modules/blog/components/search-form';

export default function BlogPage() {
  return (
    <div>
      <SearchForm />
      <BlogPostsList />
    </div>
  );
}
