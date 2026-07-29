import { wpQuery } from "./wordpress";

/* ─── Types ─── */

export interface WPPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  } | null;
  solutionTags: {
    nodes: { name: string; slug: string }[];
  };
  industryTags: {
    nodes: { name: string; slug: string }[];
  };
}

export interface WPCaseStudy {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  } | null;
  solutionTags: {
    nodes: { name: string; slug: string }[];
  };
  industryTags: {
    nodes: { name: string; slug: string }[];
  };
}

/* ─── Queries ─── */

const POST_FIELDS = `
  id
  slug
  title
  excerpt
  date
  featuredImage {
    node {
      sourceUrl
      altText
    }
  }
  solutionTags {
    nodes { name slug }
  }
  industryTags {
    nodes { name slug }
  }
`;

const POST_FULL_FIELDS = `
  ${POST_FIELDS}
  content
`;

/* ─── Blog Posts ─── */

export async function getBlogPosts(first = 12): Promise<WPPost[]> {
  const query = `
    query GetBlogPosts($first: Int!) {
      posts(first: $first, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          ${POST_FIELDS}
        }
      }
    }
  `;
  const data = await wpQuery<{ posts: { nodes: WPPost[] } }>(query, { first });
  return data.posts.nodes;
}

export async function getBlogPostBySlug(slug: string): Promise<WPPost | null> {
  const query = `
    query GetBlogPost($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        ${POST_FULL_FIELDS}
      }
    }
  `;
  const data = await wpQuery<{ post: WPPost | null }>(query, { slug });
  return data.post;
}

export async function getBlogPostSlugs(): Promise<string[]> {
  const query = `
    query GetBlogSlugs {
      posts(first: 100) {
        nodes { slug }
      }
    }
  `;
  const data = await wpQuery<{ posts: { nodes: { slug: string }[] } }>(query);
  return data.posts.nodes.map((n) => n.slug);
}

/* ─── Case Studies ─── */

export async function getCaseStudies(first = 12): Promise<WPCaseStudy[]> {
  const query = `
    query GetCaseStudies($first: Int!) {
      caseStudies(first: $first, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          ${POST_FIELDS}
        }
      }
    }
  `;
  const data = await wpQuery<{ caseStudies: { nodes: WPCaseStudy[] } }>(query, { first });
  return data.caseStudies.nodes;
}

export async function getCaseStudyBySlug(slug: string): Promise<WPCaseStudy | null> {
  const query = `
    query GetCaseStudy($slug: ID!) {
      caseStudy(id: $slug, idType: SLUG) {
        ${POST_FULL_FIELDS}
      }
    }
  `;
  const data = await wpQuery<{ caseStudy: WPCaseStudy | null }>(query, { slug });
  return data.caseStudy;
}

export async function getCaseStudySlugs(): Promise<string[]> {
  const query = `
    query GetCaseStudySlugs {
      caseStudies(first: 100) {
        nodes { slug }
      }
    }
  `;
  const data = await wpQuery<{ caseStudies: { nodes: { slug: string }[] } }>(query);
  return data.caseStudies.nodes.map((n) => n.slug);
}

/* ─── Taxonomies ─── */

export async function getSolutionTags(): Promise<{ name: string; slug: string }[]> {
  const query = `
    query GetSolutionTags {
      solutionTags { nodes { name slug } }
    }
  `;
  const data = await wpQuery<{ solutionTags: { nodes: { name: string; slug: string }[] } }>(query);
  return data.solutionTags.nodes;
}

export async function getIndustryTags(): Promise<{ name: string; slug: string }[]> {
  const query = `
    query GetIndustryTags {
      industryTags { nodes { name slug } }
    }
  `;
  const data = await wpQuery<{ industryTags: { nodes: { name: string; slug: string }[] } }>(query);
  return data.industryTags.nodes;
}
