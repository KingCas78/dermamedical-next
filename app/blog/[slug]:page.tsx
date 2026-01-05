import Image from "next/image";
import { blogPosts } from "@/data/blogPosts";

interface BlogPostParams {
  slug: string;
}

export default function BlogPost({ params }: { params: BlogPostParams }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return <p className="text-center py-20">Artículo no encontrado.</p>;
  }

  return (
    <main className="w-full py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">

        <Image
          src={post.image}
          alt={post.title}
          width={900}
          height={500}
          className="rounded-xl mb-8 object-cover"
        />

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>

        <div className="text-gray-500 mb-10">
          {post.author} · {post.date} · {post.readTime} min
        </div>

        <article className="prose prose-lg max-w-none">
          {post.content}
        </article>

      </div>
    </main>
  );
}
