/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: signupMutation
// ====================================================

export interface signupMutation_signup_user {
  __typename: "User";
  id: string;
  name: string | null;
  email: string;
}

export interface signupMutation_signup {
  __typename: "AuthPayload";
  token: string | null;
  user: signupMutation_signup_user | null;
}

export interface signupMutation {
  signup: signupMutation_signup | null;
}

export interface signupMutationVariables {
  email: string;
  password: string;
  name: string;
}
