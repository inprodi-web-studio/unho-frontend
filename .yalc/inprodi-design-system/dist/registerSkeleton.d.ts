import React from "react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import { Registerable } from "./registerable";
interface SkeletonProps {
    count: number;
    circle?: boolean;
    className?: string;
    width?: string;
    height?: string;
}
export declare const Skeleton: ({ ...props }: SkeletonProps) => React.JSX.Element;
export declare const skeletonMeta: CodeComponentMeta<SkeletonProps>;
export declare function registerSkeleton(loader?: Registerable, customSkeletonMeta?: CodeComponentMeta<SkeletonProps>): void;
export {};
