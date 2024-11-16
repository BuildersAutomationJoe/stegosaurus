/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DataObjectUpdateFormInputValues = {
    filename?: string;
};
export declare type DataObjectUpdateFormValidationValues = {
    filename?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DataObjectUpdateFormOverridesProps = {
    DataObjectUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    filename?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DataObjectUpdateFormProps = React.PropsWithChildren<{
    overrides?: DataObjectUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    dataObject?: any;
    onSubmit?: (fields: DataObjectUpdateFormInputValues) => DataObjectUpdateFormInputValues;
    onSuccess?: (fields: DataObjectUpdateFormInputValues) => void;
    onError?: (fields: DataObjectUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DataObjectUpdateFormInputValues) => DataObjectUpdateFormInputValues;
    onValidate?: DataObjectUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DataObjectUpdateForm(props: DataObjectUpdateFormProps): React.ReactElement;
