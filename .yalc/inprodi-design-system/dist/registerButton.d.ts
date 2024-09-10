import React from "react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import type { ButtonProps as AntdButtonProps } from "antd/es/button";
import { Registerable } from "./registerable";
interface ButtonProps extends AntdButtonProps {
    isSubmit?: boolean;
    label?: string;
}
export declare const Button: ({ label, loading, isSubmit, ...props }: ButtonProps) => React.JSX.Element;
export declare const buttonMeta: CodeComponentMeta<ButtonProps>;
export declare function registerButton(loader?: Registerable, customButtonMeta?: CodeComponentMeta<ButtonProps>): void;
export {};
