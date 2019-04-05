/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: feedQuery
// ====================================================

export interface feedQuery_feed_author {
  __typename: "User";
  name: string | null;
}

export interface feedQuery_feed {
  __typename: "Post";
  id: string;
  content: string | null;
  title: string;
  published: boolean;
  author: feedQuery_feed_author;
}

export interface feedQuery {
  feed: feedQuery_feed[] | null;
}
