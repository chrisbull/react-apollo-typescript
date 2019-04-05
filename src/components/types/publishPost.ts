/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: publishPost
// ====================================================

export interface publishPost_publish {
  __typename: "Post";
  id: string;
  published: boolean;
}

export interface publishPost {
  publish: publishPost_publish | null;
}

export interface publishPostVariables {
  id: string;
}
