import React from "react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import type { DividerProps as AntdDividerProps } from "antd/es/divider";
import { Registerable } from "./registerable";
interface DividerProps extends AntdDividerProps {
    text?: string;
    margin?: string;
}
export declare const Divider: ({ text, margin, ...props }: DividerProps) => React.JSX.Element;
export declare const dividerMeta: CodeComponentMeta<DividerProps>;
export declare function registerDivider(loader?: Registerable, customDividerMeta?: CodeComponentMeta<DividerProps>): void;
export {};
