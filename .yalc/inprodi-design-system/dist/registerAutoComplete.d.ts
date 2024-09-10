import React from "react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import { Registerable } from "./registerable";
interface AutoCompleteProps {
    isEmpty?: boolean;
    loading: boolean;
    menuContent: any;
    placeholder: string;
    onChange: any;
    closeOnSelect?: boolean;
    onPressEnter?: any;
    value?: string;
}
export declare const AutoComplete: React.ForwardRefExoticComponent<AutoCompleteProps & React.RefAttributes<any>>;
export declare const autoCompleteMeta: CodeComponentMeta<AutoCompleteProps>;
export declare function registerAutoComplete(loader?: Registerable, customAutocompleteMeta?: CodeComponentMeta<AutoCompleteProps>): void;
export {};
