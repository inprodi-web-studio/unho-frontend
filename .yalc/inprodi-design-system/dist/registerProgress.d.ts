import React from "react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import type { ProgressProps as AntdProgressProps } from "antd/es/progress";
import { Registerable } from "./registerable";
interface ProgressProps extends AntdProgressProps {
    value: number;
}
export declare const Progress: ({ value, ...props }: ProgressProps) => React.JSX.Element;
export declare const progressMeta: CodeComponentMeta<ProgressProps>;
export declare function registerProgress(loader?: Registerable, customProgressMeta?: CodeComponentMeta<ProgressProps>): void;
export {};
