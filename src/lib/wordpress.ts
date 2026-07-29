import { GraphQLClient } from "graphql-request";

const WORDPRESS_GRAPHQL_URL =
  process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL ||
  "http://54.236.105.26/graphql";

export const wpClient = new GraphQLClient(WORDPRESS_GRAPHQL_URL, {
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Execute a GraphQL query against WordPress.
 * Use in Server Components and Route Handlers only.
 */
export async function wpQuery<T>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<T> {
  try {
    const data = await wpClient.request<T>(query, variables);
    return data;
  } catch (error) {
    console.error("[WPGraphQL Error]:", error);
    throw error;
  }
}
