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

/* ─── ACF Page Fields ─── */

export interface ACFHomeFields {
  heroEyebrow: string | null;
  heroHeadline: string | null;
  heroSubheadline: string | null;
  shiftHeadline: string | null;
  shiftBody: string | null;
  pcxHeadline: string | null;
  pcxBody: string | null;
  productHeadline: string | null;
  productBody: string | null;
  solutionCards: { title: string; description: string; ctaLabel: string; ctaHref: string }[] | null;
  stats: { value: string; label: string }[] | null;
  faqs: { question: string; answer: string }[] | null;
}

export interface ACFSolutionFields {
  heroHeadline: string | null;
  heroSubheadline: string | null;
  relevanceHeadline: string | null;
  relevanceBody: string | null;
  bridgeHeadline: string | null;
  bridgeBody: string | null;
  services: { tag: string; title: string; description: string }[] | null;
  channels: { title: string; description: string }[] | null;
  stats: { value: string; label: string }[] | null;
  howWeItems: { title: string; description: string }[] | null;
  faqs: { question: string; answer: string }[] | null;
  ctaHeadline: string | null;
}

export interface ACFIndustryFields {
  heroHeadline: string | null;
  heroSubheadline: string | null;
  pressureStatValue: string | null;
  pressureStatLabel: string | null;
  pressureStatSource: string | null;
  performanceStatValue: string | null;
  performanceStatLabel: string | null;
  contextHeadline: string | null;
  contextBody: string | null;
  sundialCards: { eyebrow: string; title: string; description: string }[] | null;
  capabilities: { title: string; description: string }[] | null;
  faqs: { question: string; answer: string }[] | null;
  ctaHeadline: string | null;
  ctaBody: string | null;
}

export interface ACFProductFields {
  heroEyebrow: string | null;
  heroHeadline: string | null;
  heroSubheadline: string | null;
  problemHeadline: string | null;
  problemBody: string | null;
  pillars: { eyebrow: string; title: string; description: string }[] | null;
  faqs: { question: string; answer: string }[] | null;
  ctaHeadline: string | null;
  ctaBody: string | null;
}

export async function getPageFields<T>(slug: string, fieldName: string): Promise<T | null> {
  const query = `
    query GetPageFields($slug: ID!) {
      page(id: $slug, idType: URI) {
        ${fieldName} {
          heroEyebrow
          heroHeadline
          heroSubheadline
          shiftHeadline
          shiftBody
          pcxHeadline
          pcxBody
          productHeadline
          productBody
          solutionCards { title description ctaLabel ctaHref }
          stats { value label }
          faqs { question answer }
          relevanceHeadline
          relevanceBody
          bridgeHeadline
          bridgeBody
          services { tag title description }
          channels { title description }
          howWeItems { title description }
          ctaHeadline
          ctaBody
          pressureStatValue
          pressureStatLabel
          pressureStatSource
          performanceStatValue
          performanceStatLabel
          contextHeadline
          contextBody
          sundialCards { eyebrow title description }
          capabilities { title description }
          problemHeadline
          problemBody
          pillars { eyebrow title description }
        }
      }
    }
  `;

  try {
    const data = await wpQuery<{ page: { [key: string]: T } | null }>(query, { slug });
    return data.page?.[fieldName] ?? null;
  } catch {
    return null;
  }
}

export async function getHomePageData(): Promise<ACFHomeFields | null> {
  const query = `
    query GetHomePage {
      page(id: "home", idType: URI) {
        homeFields {
          heroEyebrow heroHeadline heroSubheadline
          shiftHeadline shiftBody
          pcxHeadline pcxBody
          productHeadline productBody
          solutionCards { title description ctaLabel ctaHref }
          stats { value label }
          faqs { question answer }
        }
      }
    }
  `;
  try {
    const data = await wpQuery<{ page: { homeFields: ACFHomeFields } | null }>(query);
    return data.page?.homeFields ?? null;
  } catch {
    return null;
  }
}

export async function getSolutionPageData(slug: string): Promise<ACFSolutionFields | null> {
  const query = `
    query GetSolutionPage($slug: ID!) {
      page(id: $slug, idType: URI) {
        solutionFields {
          heroHeadline heroSubheadline
          relevanceHeadline relevanceBody
          bridgeHeadline bridgeBody
          services { tag title description }
          channels { title description }
          stats { value label }
          howWeItems { title description }
          faqs { question answer }
          ctaHeadline
        }
      }
    }
  `;
  try {
    const data = await wpQuery<{ page: { solutionFields: ACFSolutionFields } | null }>(query, { slug });
    return data.page?.solutionFields ?? null;
  } catch {
    return null;
  }
}

export async function getIndustryPageData(slug: string): Promise<ACFIndustryFields | null> {
  const query = `
    query GetIndustryPage($slug: ID!) {
      page(id: $slug, idType: URI) {
        industryFields {
          heroHeadline heroSubheadline
          pressureStatValue pressureStatLabel pressureStatSource
          performanceStatValue performanceStatLabel
          contextHeadline contextBody
          sundialCards { eyebrow title description }
          capabilities { title description }
          faqs { question answer }
          ctaHeadline ctaBody
        }
      }
    }
  `;
  try {
    const data = await wpQuery<{ page: { industryFields: ACFIndustryFields } | null }>(query, { slug });
    return data.page?.industryFields ?? null;
  } catch {
    return null;
  }
}

export async function getProductPageData(slug: string): Promise<ACFProductFields | null> {
  const query = `
    query GetProductPage($slug: ID!) {
      page(id: $slug, idType: URI) {
        productFields {
          heroEyebrow heroHeadline heroSubheadline
          problemHeadline problemBody
          pillars { eyebrow title description }
          faqs { question answer }
          ctaHeadline ctaBody
        }
      }
    }
  `;
  try {
    const data = await wpQuery<{ page: { productFields: ACFProductFields } | null }>(query, { slug });
    return data.page?.productFields ?? null;
  } catch {
    return null;
  }
}
