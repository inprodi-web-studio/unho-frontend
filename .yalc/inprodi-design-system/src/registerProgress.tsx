import React from "react";
import registerComponent, {
    CodeComponentMeta,
} from "@plasmicapp/host/registerComponent";
import { Progress as AntdProgress } from "antd";
import type { ProgressProps as AntdProgressProps } from "antd/es/progress";

import { Registerable } from "./registerable";

interface ProgressProps extends AntdProgressProps {
    value : number;
}

export const Progress = ({
    value,
    ...props
} : ProgressProps ) => {

    return <AntdProgress
        percent={value}
        {...props}
    />
};

export const progressMeta: CodeComponentMeta<ProgressProps> = {
    name: "Progress",
    displayName: "Progress",
    props: {
        value : {
            type : "number",
            defaultValue : 0,
        },
        showInfo : {
            type : "boolean",
            defaultValue : true,
        },
        strokeColor : {
            type : "array",
        },
        strokeLinecap : {
            type : "choice",
            options : ["round", "butt", "square"],
            defaultValue : "round",
        },
        success : {
            type : "object",
        },
        type : {
            type : "choice",
            options : ["circle", "line", "dashboard"],
            defaultValue : "line",
        },
        size : {
            type : "number",
        },
        steps : {
            type : "number",
            advanced : true,
        },
        strokeWidth : {
            type : "number",
            advanced : true,
            hidden : (props) => props.type !== "circle",
        },
        gapDegree : {
            type : "number",
            advanced : true,
            hidden : (props) => props.type !== "dashboard",
        },
        gapPosition : {
            type : "choice",
            options : ["top", "bottom", "left", "right"],
            advanced : true,
            hidden : (props) => props.type !== "dashboard",
        },
    },
    importPath: "inprodi-design-system",
    importName: "Progress",
};

export function registerProgress(
    loader?: Registerable,
    customProgressMeta?: CodeComponentMeta<ProgressProps>
) {
    const doRegisterComponent: typeof registerComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(Progress, customProgressMeta ?? progressMeta);
}