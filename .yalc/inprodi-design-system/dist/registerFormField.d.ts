import React from "react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import { Registerable } from "./registerable";
interface FormFieldProps {
    error: string;
    label: string;
    name: string;
    required?: boolean;
    className: string;
    showErrorMessage?: boolean;
    content: any;
    onErrorChange: any;
}
export declare const FormField: React.ForwardRefExoticComponent<FormFieldProps & React.RefAttributes<HTMLDivElement>>;
export declare const formFieldMeta: CodeComponentMeta<FormFieldProps>;
export declare function registerFormField(loader?: Registerable, customFormFieldMeta?: CodeComponentMeta<FormFieldProps>): void;
export {};
