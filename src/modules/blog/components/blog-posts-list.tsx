'use client';

import { useEffect, useState } from 'react';
import { BlogPost } from '@/types';

export function BlogPostsList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/posts');
        const data = await res.json();
        setPosts(data.data);
      } catch (error) {
        console.error('Posts fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div className="text-center py-12">Loading posts...</div>;

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <article key={post.id} className="bg-slate-700 rounded-lg p-6 hover:bg-slate-600 transition">
          <div className="flex gap-4">
            {post.image && (
              <img src={post.image} alt={post.title} className="w-24 h-24 object-cover rounded" />
            )}
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-slate-300 mb-3">{post.excerpt}</p>
              <div className="flex gap-2 text-sm text-slate-400">
                <span>{post.author}</span>
                <span>•</span>
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                <span>•</span>
                <span className="bg-slate-600 px-2 py-1 rounded">{post.category}</span>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
