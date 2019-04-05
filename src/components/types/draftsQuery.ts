/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: draftsQuery
// ====================================================

export interface draftsQuery_me_posts_author {
  __typename: "User";
  name: string | null;
}

export interface draftsQuery_me_posts {
  __typename: "Post";
  id: string;
  content: string | null;
  title: string;
  published: boolean;
  author: draftsQuery_me_posts_author;
}

export interface draftsQuery_me {
  __typename: "User";
  posts: draftsQuery_me_posts[] | null;
}

export interface draftsQuery {
  me: draftsQuery_me | null;
}
