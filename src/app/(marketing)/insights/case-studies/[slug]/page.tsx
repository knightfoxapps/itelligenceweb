import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  // TODO: Fetch from WordPress
  return {
    title: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  return (
    <main>
      <h1>Case Study: {slug}</h1>
    </main>
  );
}
