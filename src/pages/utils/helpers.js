import { gql } from "@apollo/client";

export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function checkName(input) {
  const name = /^[a-zA-Z0-9_]\w{2,100}/;
  if (input.match(name)) {
    return true;
  } else {
    return false;
  }
}

export function checkMessage(input) {
  const message = /^[a-zA-Z0-9_]\w{2,280}/;
  if (input.match(message)) {
    return true;
  } else {
      return false;
  }
}

export const QUERY_SINGLE_POST = gql`
  query getSinglePost($id: String!) {
    post(id: $id) {
      id
      titlePost
      paragraph
      dateCreated
    }
  }
`;

