/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDataObject = /* GraphQL */ `
  mutation CreateDataObject(
    $input: CreateDataObjectInput!
    $condition: ModelDataObjectConditionInput
  ) {
    createDataObject(input: $input, condition: $condition) {
      id
      filename
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateDataObject = /* GraphQL */ `
  mutation UpdateDataObject(
    $input: UpdateDataObjectInput!
    $condition: ModelDataObjectConditionInput
  ) {
    updateDataObject(input: $input, condition: $condition) {
      id
      filename
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteDataObject = /* GraphQL */ `
  mutation DeleteDataObject(
    $input: DeleteDataObjectInput!
    $condition: ModelDataObjectConditionInput
  ) {
    deleteDataObject(input: $input, condition: $condition) {
      id
      filename
      createdAt
      updatedAt
      __typename
    }
  }
`;
