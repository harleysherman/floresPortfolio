import { gql } from "@apollo/client";

export const QUERY_SINGLE_POST = gql`
  query getSinglePost($postId: String) {
    post(postId: String) {
      postId
      titlePost
      paragraph
      dateCreated
    }
  }
`;