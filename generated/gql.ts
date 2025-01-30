/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\nquery ProjectsTitles {\n  projects {\n    slug\n    title\n    image {\n      url\n    }\n  }\n}\n": types.ProjectsTitlesDocument,
    "\n  query GetReviews {\n    reviews {\n      slug\n      title\n      description {\n        html\n      }\n      descriptionPreview\n      authorName\n      authorFunction\n      authorAvatar {\n        url\n      }\n      image {\n        url\n      }\n    }\n  }\n": types.GetReviewsDocument,
    "\n  query GetReviewBySLug($slug: String!) {\n    review(where: { slug: $slug }) {\n      slug\n      title\n      description {\n        html\n      }\n      descriptionPreview\n      authorName\n      authorFunction\n      authorAvatar {\n        url\n      }\n      image {\n        url\n      }\n      createdAt\n    }\n  }\n": types.GetReviewBySLugDocument,
    "\n  query getProjectBySlug($slug: String!) {\n    project(where: { slug: $slug }) {\n      slug\n      title\n      subtitle\n      isFeatured\n      image {\n        url\n      }\n      content {\n        html\n      }\n      createdAt\n    }\n  }\n": types.GetProjectBySlugDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery ProjectsTitles {\n  projects {\n    slug\n    title\n    image {\n      url\n    }\n  }\n}\n"): (typeof documents)["\nquery ProjectsTitles {\n  projects {\n    slug\n    title\n    image {\n      url\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetReviews {\n    reviews {\n      slug\n      title\n      description {\n        html\n      }\n      descriptionPreview\n      authorName\n      authorFunction\n      authorAvatar {\n        url\n      }\n      image {\n        url\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetReviews {\n    reviews {\n      slug\n      title\n      description {\n        html\n      }\n      descriptionPreview\n      authorName\n      authorFunction\n      authorAvatar {\n        url\n      }\n      image {\n        url\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetReviewBySLug($slug: String!) {\n    review(where: { slug: $slug }) {\n      slug\n      title\n      description {\n        html\n      }\n      descriptionPreview\n      authorName\n      authorFunction\n      authorAvatar {\n        url\n      }\n      image {\n        url\n      }\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query GetReviewBySLug($slug: String!) {\n    review(where: { slug: $slug }) {\n      slug\n      title\n      description {\n        html\n      }\n      descriptionPreview\n      authorName\n      authorFunction\n      authorAvatar {\n        url\n      }\n      image {\n        url\n      }\n      createdAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getProjectBySlug($slug: String!) {\n    project(where: { slug: $slug }) {\n      slug\n      title\n      subtitle\n      isFeatured\n      image {\n        url\n      }\n      content {\n        html\n      }\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query getProjectBySlug($slug: String!) {\n    project(where: { slug: $slug }) {\n      slug\n      title\n      subtitle\n      isFeatured\n      image {\n        url\n      }\n      content {\n        html\n      }\n      createdAt\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;