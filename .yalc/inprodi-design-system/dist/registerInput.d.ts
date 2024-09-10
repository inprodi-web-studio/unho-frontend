import React from "react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import type { InputProps as AntdInputProps } from "antd/es/input";
import { Registerable } from "./registerable";
interface InputProps extends AntdInputProps {
    leftIcon?: any;
    rightIcon?: any;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    debounce?: number;
    mask?: string;
    error?: string | null | undefined;
    onClearError?: any;
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export declare const inputMeta: CodeComponentMeta<InputProps>;
export declare function registerInput(loader?: Registerable, customInputMeta?: CodeComponentMeta<InputProps>): void;
export {};
