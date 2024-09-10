import React from "react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import type { InputProps as AntdInputProps } from "antd/es/input";
import { Registerable } from "./registerable";
interface PasswordInputProps extends AntdInputProps {
    leftIcon: any;
    rightIcon: any;
    value: string;
    error?: string | null | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClearError?: any;
}
export declare const PasswordInput: React.ForwardRefExoticComponent<PasswordInputProps & React.RefAttributes<HTMLInputElement>>;
export declare const passwordInputMeta: CodeComponentMeta<PasswordInputProps>;
export declare function registerPasswordInput(loader?: Registerable, customPasswordInputMeta?: CodeComponentMeta<PasswordInputProps>): void;
export {};
