// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserProfile, TextInputs, DataObject } = initSchema(schema);

export {
  UserProfile,
  TextInputs,
  DataObject
};