/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createDraftMutation
// ====================================================

export interface createDraftMutation_createDraft {
  __typename: "Post";
  id: string;
  title: string;
  content: string | null;
}

export interface createDraftMutation {
  createDraft: createDraftMutation_createDraft | null;
}

export interface createDraftMutationVariables {
  title: string;
  content: string;
}
