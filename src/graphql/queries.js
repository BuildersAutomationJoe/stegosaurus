/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
