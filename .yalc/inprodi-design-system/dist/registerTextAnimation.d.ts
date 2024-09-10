import React from "react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import { Registerable } from "./registerable";
interface TextAnimationProps {
    sequence: any[];
    wrapper: "p" | "h2" | "div" | "strong" | "span";
    repeat: number;
    cursor: boolean;
    speed: any;
    style?: React.CSSProperties;
}
export declare const TextAnimation: ({ speed, style, cursor, repeat, wrapper, sequence, }: TextAnimationProps) => React.JSX.Element;
export declare const textAnimationMeta: CodeComponentMeta<TextAnimationProps>;
export declare function registerTextAnimation(loader?: Registerable, customTextAnimationMeta?: CodeComponentMeta<TextAnimationProps>): void;
export {};
