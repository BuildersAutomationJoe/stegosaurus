/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const openAIApiRequest = /* GraphQL */ `
  mutation OpenAIApiRequest($input: String!) {
    openAIApiRequest(input: $input)
  }
`;
export const createUserProfile = /* GraphQL */ `
  mutation CreateUserProfile(
    $input: CreateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    createUserProfile(input: $input, condition: $condition) {
      id
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUserProfile = /* GraphQL */ `
  mutation UpdateUserProfile(
    $input: UpdateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    updateUserProfile(input: $input, condition: $condition) {
      id
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUserProfile = /* GraphQL */ `
  mutation DeleteUserProfile(
    $input: DeleteUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    deleteUserProfile(input: $input, condition: $condition) {
      id
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createTextInputs = /* GraphQL */ `
  mutation CreateTextInputs(
    $input: CreateTextInputsInput!
    $condition: ModelTextInputsConditionInput
  ) {
    createTextInputs(input: $input, condition: $condition) {
      id
      text
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTextInputs = /* GraphQL */ `
  mutation UpdateTextInputs(
    $input: UpdateTextInputsInput!
    $condition: ModelTextInputsConditionInput
  ) {
    updateTextInputs(input: $input, condition: $condition) {
      id
      text
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTextInputs = /* GraphQL */ `
  mutation DeleteTextInputs(
    $input: DeleteTextInputsInput!
    $condition: ModelTextInputsConditionInput
  ) {
    deleteTextInputs(input: $input, condition: $condition) {
      id
      text
      createdAt
      updatedAt
      __typename
    }
  }
`;
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
