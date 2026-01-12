interface BlogPost {
  title: string;
  author: string;
  date: string;
  readTime: number;
}

export default function BlogHeader({ post }: { post: BlogPost }) {
  return (
    <header className="mb-10">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        {post.title}
      </h1>

      <div className="text-gray-500">
        {post.author} · {post.date} · {post.readTime} min
      </div>
    </header>
  );
}
