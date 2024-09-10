import React from "react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import { Registerable } from "./registerable";
interface SelectProps {
    isEmpty?: boolean;
    loading?: boolean;
    searchable?: boolean;
    error?: string | null | undefined;
    menuContent: any;
    onChange?: any;
    disabled?: boolean;
    onClose?: () => void;
    onOpen?: () => void;
    onSearch?: any;
    onClearError?: any;
    value?: {
        label: string;
        value: string;
    };
    size?: "small" | "middle" | "large";
    placeholder?: string;
    valueContent?: any;
    className?: string;
}
export declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<any>>;
export declare const selectMeta: CodeComponentMeta<SelectProps>;
export declare function registerSelect(loader?: Registerable, customSelectMeta?: CodeComponentMeta<SelectProps>): void;
export {};
