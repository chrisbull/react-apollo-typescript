/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: meQuery
// ====================================================

export interface meQuery_me {
  __typename: "User";
  id: string;
  email: string;
  name: string | null;
}

export interface meQuery {
  me: meQuery_me | null;
}
