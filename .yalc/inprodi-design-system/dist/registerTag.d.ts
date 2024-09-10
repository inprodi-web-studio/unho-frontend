import React from "react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import type { TagProps as AntdTagProps } from "antd/es/tag";
import { Registerable } from "./registerable";
interface TagProps extends AntdTagProps {
    closable?: boolean;
    label: string;
}
export declare const Tag: ({ label, closable, ...props }: TagProps) => React.JSX.Element;
export declare const tagMeta: CodeComponentMeta<TagProps>;
export declare function registerTag(loader?: Registerable, customTagmeta?: CodeComponentMeta<TagProps>): void;
export {};
