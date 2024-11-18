/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserProfile = /* GraphQL */ `
  query GetUserProfile($id: ID!) {
    getUserProfile(id: $id) {
      id
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUserProfiles = /* GraphQL */ `
  query ListUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTextInputs = /* GraphQL */ `
  query GetTextInputs($id: ID!) {
    getTextInputs(id: $id) {
      id
      text
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTextInputs = /* GraphQL */ `
  query ListTextInputs(
    $filter: ModelTextInputsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTextInputs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDataObject = /* GraphQL */ `
  query GetDataObject($id: ID!) {
    getDataObject(id: $id) {
      id
      filename
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listDataObjects = /* GraphQL */ `
  query ListDataObjects(
    $filter: ModelDataObjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDataObjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        filename
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
