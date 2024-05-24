import { gql } from "@apollo/client";

export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function checkName(input) {
  const name = /^[a-zA-Z0-9_]\w{2,100}\s/;
  if (input.match(name)) {
    return true;
  }
  return false;
}

export function checkMessage(input) {
  const message = /^[a-zA-Z0-9_]\w{2,280}\s\t/;
  if (input.match(message)) {
    return true;
  }
  return false;
}

export const QUERY_SINGLE_POST = gql`
  query getSinglePost($postId: ID!) {
    post(postId: $postId) {
      _id
      titlePost
      paragraph
      dateCreated
    }
  }
`;
