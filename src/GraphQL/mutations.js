import { gql } from "@apollo/client";

export const CREATE_LINK = gql`
  mutation CreateLink($url: String!, $slug: String!) {
    createLink(url: $url, slug: $slug) {
      id
      url
      slug
    }
  }
`;
