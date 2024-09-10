import React from "react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import type { BadgeProps } from "antd/es/badge";
import { Registerable } from "./registerable";
interface RibbonProps extends BadgeProps {
    content: any;
}
export declare const Ribbon: ({ content, ...props }: RibbonProps) => React.JSX.Element;
export declare const ribbonMeta: CodeComponentMeta<RibbonProps>;
export declare function registerRibbon(loader?: Registerable, customRibbonMeta?: CodeComponentMeta<RibbonProps>): void;
export {};
