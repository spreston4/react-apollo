import { gql } from "@apollo/client";

export const GET_LINK = gql`
  query Query($getLinkId: Int!) {
    getLink(id: $getLinkId) {
      id
      url
      slug
    }
  }
`;

export const GET_ALL_LINKS = gql`
  query GetAllLinks {
    getAllLinks {
      id
      url
      slug
    }
  }
`;
