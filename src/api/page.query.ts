import { client } from "@/api/api";
import { gql } from "../../generated";

// TODO change image to thumbnailImage
export const GET_PROJECTS_TITLES = gql(`
query ProjectsTitles {
  projects {
    slug
    title
    image {
      url
    }
  }
}
`);

export const GET_REVIEWS = gql(`
  query GetReviews {
    reviews {
      slug
      title
      description {
        html
      }
      descriptionPreview
      authorName
      authorFunction
      authorAvatar {
        url
      }
      image {
        url
      }
    }
  }
`);

export const GET_REVIEW_BY_SLUG = gql(`
  query GetReviewBySLug($slug: String!) {
    review(where: { slug: $slug }) {
      slug
      title
      description {
        html
      }
      descriptionPreview
      authorName
      authorFunction
      authorAvatar {
        url
      }
      image {
        url
      }
      createdAt
    }
  }
`);

export const GET_PROJECT_BY_SLUG = gql(`
  query getProjectBySlug($slug: String!) {
    project(where: { slug: $slug }) {
      slug
      title
      subtitle
      isFeatured
      image {
        url
      }
      content {
        html
      }
      createdAt
    }
  }
`);

export const getReviews = async () => {
  return await client.request(GET_REVIEWS);
};

export const getProjectsTitles = async () => {
  return await client.request(GET_PROJECTS_TITLES);
};

export const getProjectBySlug = async (slug: string) => {
  return await client.request(GET_PROJECT_BY_SLUG, { slug });
};

export const getReviewBySlug = async (slug: string) => {
  return await client.request(GET_REVIEW_BY_SLUG, { slug });
};
