"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import type { WPPost, WPCaseStudy } from "@/lib/queries";

interface InsightsContentProps {
  posts: WPPost[];
  caseStudies: WPCaseStudy[];
  solutionTags: { name: string; slug: string }[];
  industryTags: { name: string; slug: string }[];
}

type Tab = "all" | "blog" | "case-studies";

export function InsightsContent({ posts, caseStudies, solutionTags, industryTags }: InsightsContentProps) {
  const [activeTab, setActiveTab] = useState<Tab>("all");
  const [activeSolution, setActiveSolution] = useState<string>("all");
  const [activeIndustry, setActiveIndustry] = useState<string>("all");

  const allItems = [
    ...posts.map((p) => ({ ...p, type: "blog" as const })),
    ...caseStudies.map((cs) => ({ ...cs, type: "case-study" as const })),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const filtered = allItems.filter((item) => {
    if (activeTab === "blog" && item.type !== "blog") return false;
    if (activeTab === "case-studies" && item.type !== "case-study") return false;
    if (activeSolution !== "all" && !item.solutionTags.nodes.some((t) => t.slug === activeSolution)) return false;
    if (activeIndustry !== "all" && !item.industryTags.nodes.some((t) => t.slug === activeIndustry)) return false;
    return true;
  });

  const isEmpty = posts.length === 0 && caseStudies.length === 0;

  return (
    <>
      {/* Hero */}
      <Section bg="dark">
        <div className="py-8 md:py-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-gold">Insights</p>
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Performance Insights
          </h1>
          <p className="max-w-2xl text-lg text-gray-300">
            Case studies, thought leadership, and operational intelligence from across our client portfolio.
          </p>
        </div>
      </Section>

      {/* Filters */}
      <Section>
        {isEmpty ? (
          <div className="py-20 text-center">
            <h2 className="mb-4 text-2xl font-bold">Coming Soon</h2>
            <p className="text-muted-foreground">Insights content is being prepared. Check back soon.</p>
          </div>
        ) : (
          <>
            {/* Tab bar */}
            <div className="mb-8 flex flex-wrap gap-2 border-b border-gray-100 pb-4">
              {[
                { key: "all" as Tab, label: "All" },
                { key: "blog" as Tab, label: "Blog" },
                { key: "case-studies" as Tab, label: "Case Studies" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`rounded-sm px-4 py-2 text-sm font-semibold transition-colors ${
                    activeTab === tab.key
                      ? "bg-brand-blue text-white"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Solution + Industry filters */}
            <div className="mb-10 flex flex-wrap gap-4">
              <select
                value={activeSolution}
                onChange={(e) => setActiveSolution(e.target.value)}
                className="rounded-sm border border-gray-200 px-3 py-2 text-sm"
              >
                <option value="all">All Solutions</option>
                {solutionTags.map((tag) => (
                  <option key={tag.slug} value={tag.slug}>{tag.name}</option>
                ))}
              </select>
              <select
                value={activeIndustry}
                onChange={(e) => setActiveIndustry(e.target.value)}
                className="rounded-sm border border-gray-200 px-3 py-2 text-sm"
              >
                <option value="all">All Industries</option>
                {industryTags.map((tag) => (
                  <option key={tag.slug} value={tag.slug}>{tag.name}</option>
                ))}
              </select>
            </div>

            {/* Content grid */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((item, i) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={item.type === "blog" ? `/insights/blog/${item.slug}` : `/insights/case-studies/${item.slug}`}
                    className="group block"
                  >
                    {item.featuredImage && (
                      <div className="mb-4 overflow-hidden rounded-lg">
                        <Image
                          src={item.featuredImage.node.sourceUrl}
                          alt={item.featuredImage.node.altText || item.title}
                          width={400}
                          height={250}
                          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="text-xs font-bold uppercase text-brand-blue">
                        {item.type === "blog" ? "Blog" : "Case Study"}
                      </span>
                      {item.solutionTags.nodes.map((t) => (
                        <span key={t.slug} className="rounded-sm bg-muted px-2 py-0.5 text-xs font-medium">{t.name}</span>
                      ))}
                    </div>
                    <h3 className="mb-2 text-lg font-bold group-hover:text-brand-blue">{item.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2" dangerouslySetInnerHTML={{ __html: item.excerpt }} />
                    <time className="mt-2 block text-xs text-gray-400">
                      {new Date(item.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </time>
                  </Link>
                </motion.article>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="py-12 text-center text-muted-foreground">No content matches the current filters.</p>
            )}
          </>
        )}
      </Section>
    </>
  );
}
