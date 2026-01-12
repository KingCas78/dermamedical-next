import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPage() {
  return (
    <main className="w-full py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Blog Dermatológico
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

      </div>
    </main>
  );
}
