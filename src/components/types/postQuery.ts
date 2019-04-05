/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: postQuery
// ====================================================

export interface postQuery_post_author {
  __typename: "User";
  name: string | null;
}

export interface postQuery_post {
  __typename: "Post";
  id: string;
  title: string;
  content: string | null;
  published: boolean;
  author: postQuery_post_author;
}

export interface postQuery {
  post: postQuery_post | null;
}

export interface postQueryVariables {
  id: string;
}
