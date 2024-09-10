import React from "react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import { Registerable } from "./registerable";
export interface iconProps {
    color?: string;
    size?: number;
    variant: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
    icon: string;
}
export declare const Icon: ({ icon, size, color, variant, }: iconProps) => React.JSX.Element;
export declare const iconMeta: CodeComponentMeta<iconProps>;
export declare function registerIcon(loader?: Registerable, customIconMeta?: CodeComponentMeta<iconProps>): void;
