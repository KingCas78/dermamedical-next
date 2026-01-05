import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  image: string;
  title: string;
  author: string;
  date: string;
  readTime: number;
  excerpt: string;
  views: number;
  comments: number;
  likes: number;
  slug: string;
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden">
      
      <Image
        src={post.image}
        alt={post.title}
        width={600}
        height={350}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">
        <div className="text-sm text-gray-500 mb-2">
          {post.author} · {post.date} · {post.readTime} min
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {post.title}
        </h3>

        <p className="text-gray-600 mb-4">{post.excerpt}</p>

        <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
          <span>👁 {post.views}</span>
          <span>💬 {post.comments}</span>
          <span>❤️ {post.likes}</span>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="text-blue-600 font-semibold hover:underline"
        >
          Leer artículo →
        </Link>
      </div>
    </article>
  );
}
