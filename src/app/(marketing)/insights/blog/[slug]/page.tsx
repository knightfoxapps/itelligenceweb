import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogPostSlugs } from "@/lib/queries";
import { Section } from "@/components/ui/section";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const slugs = await getBlogPostSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getBlogPostBySlug(slug);
    if (!post) return { title: "Post Not Found" };
    return {
      title: post.title,
      description: post.excerpt?.replace(/<[^>]*>/g, "").slice(0, 160),
    };
  } catch {
    return { title: "Blog" };
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = await getBlogPostBySlug(slug);
  } catch {
    notFound();
  }

  if (!post) notFound();

  return (
    <main>
      <Section>
        <article className="mx-auto max-w-3xl">
          {/* Back link */}
          <Link href="/insights" className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-brand-blue">
            ← Back to Insights
          </Link>

          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-2">
            {post.solutionTags.nodes.map((tag) => (
              <span key={tag.slug} className="rounded-sm bg-brand-blue/10 px-2 py-1 text-xs font-bold text-brand-blue">{tag.name}</span>
            ))}
            {post.industryTags.nodes.map((tag) => (
              <span key={tag.slug} className="rounded-sm bg-muted px-2 py-1 text-xs font-medium">{tag.name}</span>
            ))}
          </div>

          {/* Title */}
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">{post.title}</h1>

          {/* Date */}
          <time className="mb-8 block text-sm text-muted-foreground">
            {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </time>

          {/* Featured image */}
          {post.featuredImage && (
            <div className="mb-10 overflow-hidden rounded-lg">
              <Image
                src={post.featuredImage.node.sourceUrl}
                alt={post.featuredImage.node.altText || post.title}
                width={800}
                height={450}
                className="w-full object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-brand-blue"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </Section>
    </main>
  );
}
