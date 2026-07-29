import type { Metadata } from "next";
import { getBlogPosts, getCaseStudies, getSolutionTags, getIndustryTags } from "@/lib/queries";
import { InsightsContent } from "./content";

export const metadata: Metadata = {
  title: "Insights",
  description: "Performance insights, case studies, and thought leadership from itelligenceCX.",
};

export const revalidate = 60; // ISR: revalidate every 60 seconds

export default async function InsightsPage() {
  let posts: Awaited<ReturnType<typeof getBlogPosts>> = [];
  let caseStudies: Awaited<ReturnType<typeof getCaseStudies>> = [];
  let solutionTags: Awaited<ReturnType<typeof getSolutionTags>> = [];
  let industryTags: Awaited<ReturnType<typeof getIndustryTags>> = [];

  try {
    [posts, caseStudies, solutionTags, industryTags] = await Promise.all([
      getBlogPosts(12),
      getCaseStudies(12),
      getSolutionTags(),
      getIndustryTags(),
    ]);
  } catch {
    // Fallback if WP is unreachable during build
  }

  return (
    <main>
      <InsightsContent
        posts={posts}
        caseStudies={caseStudies}
        solutionTags={solutionTags}
        industryTags={industryTags}
      />
    </main>
  );
}
