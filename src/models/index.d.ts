import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerUserProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserProfile = LazyLoading extends LazyLoadingDisabled ? EagerUserProfile : LazyUserProfile

export declare const UserProfile: (new (init: ModelInit<UserProfile>) => UserProfile) & {
  copyOf(source: UserProfile, mutator: (draft: MutableModel<UserProfile>) => MutableModel<UserProfile> | void): UserProfile;
}

type EagerTextInputs = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TextInputs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly text?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTextInputs = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TextInputs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly text?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TextInputs = LazyLoading extends LazyLoadingDisabled ? EagerTextInputs : LazyTextInputs

export declare const TextInputs: (new (init: ModelInit<TextInputs>) => TextInputs) & {
  copyOf(source: TextInputs, mutator: (draft: MutableModel<TextInputs>) => MutableModel<TextInputs> | void): TextInputs;
}

type EagerDataObject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DataObject, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly filename?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDataObject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DataObject, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly filename?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DataObject = LazyLoading extends LazyLoadingDisabled ? EagerDataObject : LazyDataObject

export declare const DataObject: (new (init: ModelInit<DataObject>) => DataObject) & {
  copyOf(source: DataObject, mutator: (draft: MutableModel<DataObject>) => MutableModel<DataObject> | void): DataObject;
}