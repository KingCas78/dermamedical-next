import { ReactNode } from "react";

export default function BlogContent({ children }: { children: ReactNode }) {
  return <article className="prose prose-lg max-w-none">{children}</article>;
}
