/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: loginMutation
// ====================================================

export interface loginMutation_login_user {
  __typename: "User";
  id: string;
  name: string | null;
  email: string;
}

export interface loginMutation_login {
  __typename: "AuthPayload";
  token: string | null;
  user: loginMutation_login_user | null;
}

export interface loginMutation {
  login: loginMutation_login | null;
}

export interface loginMutationVariables {
  email: string;
  password: string;
}
