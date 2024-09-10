import React from "react";
import registerComponent, {
    CodeComponentMeta,
} from "@plasmicapp/host/registerComponent";
import { default as AntdSkeleton } from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

import { Registerable } from "./registerable";

interface SkeletonProps {
    count: number;
    circle?: boolean;
    className?: string;
    width?: string;
    height?: string;
}

export const Skeleton = ({
    ...props
} : SkeletonProps ) => {

    return <AntdSkeleton
        enableAnimation
        borderRadius="6px"
        containerClassName="inprodi-skeleton"
        {...props}
    />;
};

export const skeletonMeta: CodeComponentMeta<SkeletonProps> = {
    name: "Skeleton",
    displayName: "Skeleton",
    props: {
        count : {
            type : "number",
            defaultValue : 1,
        },
        circle : {
            type : "boolean",
            defaultValue : false,
        },
    },
    importPath: "inprodi-design-system",
    importName: "Skeleton",
};

export function registerSkeleton(
    loader?: Registerable,
    customSkeletonMeta?: CodeComponentMeta<SkeletonProps>
) {
    const doRegisterComponent: typeof registerComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(Skeleton, customSkeletonMeta ?? skeletonMeta);
}