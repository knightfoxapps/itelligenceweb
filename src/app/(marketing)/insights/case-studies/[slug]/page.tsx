import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudyBySlug, getCaseStudySlugs } from "@/lib/queries";
import { Section } from "@/components/ui/section";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const slugs = await getCaseStudySlugs();
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const cs = await getCaseStudyBySlug(slug);
    if (!cs) return { title: "Case Study Not Found" };
    return {
      title: cs.title,
      description: cs.excerpt?.replace(/<[^>]*>/g, "").slice(0, 160),
    };
  } catch {
    return { title: "Case Study" };
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;

  let caseStudy;
  try {
    caseStudy = await getCaseStudyBySlug(slug);
  } catch {
    notFound();
  }

  if (!caseStudy) notFound();

  return (
    <main>
      <Section>
        <article className="mx-auto max-w-3xl">
          <Link href="/insights" className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-brand-blue">
            ← Back to Insights
          </Link>

          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-sm bg-brand-gold/20 px-2 py-1 text-xs font-bold text-brand-gold">Case Study</span>
            {caseStudy.solutionTags.nodes.map((tag) => (
              <span key={tag.slug} className="rounded-sm bg-brand-blue/10 px-2 py-1 text-xs font-bold text-brand-blue">{tag.name}</span>
            ))}
            {caseStudy.industryTags.nodes.map((tag) => (
              <span key={tag.slug} className="rounded-sm bg-muted px-2 py-1 text-xs font-medium">{tag.name}</span>
            ))}
          </div>

          <h1 className="mb-4 text-4xl font-bold md:text-5xl">{caseStudy.title}</h1>

          <time className="mb-8 block text-sm text-muted-foreground">
            {new Date(caseStudy.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </time>

          {caseStudy.featuredImage && (
            <div className="mb-10 overflow-hidden rounded-lg">
              <Image
                src={caseStudy.featuredImage.node.sourceUrl}
                alt={caseStudy.featuredImage.node.altText || caseStudy.title}
                width={800}
                height={450}
                className="w-full object-cover"
              />
            </div>
          )}

          <div
            className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-brand-blue"
            dangerouslySetInnerHTML={{ __html: caseStudy.content }}
          />
        </article>
      </Section>
    </main>
  );
}
