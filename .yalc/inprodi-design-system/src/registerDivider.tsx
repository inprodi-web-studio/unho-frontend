import React from "react";
import registerComponent, {
    CodeComponentMeta,
} from "@plasmicapp/host/registerComponent";
import { Divider as AntdDivider } from "antd";
import type { DividerProps as AntdDividerProps } from "antd/es/divider";
import { Registerable } from "./registerable";

interface DividerProps extends AntdDividerProps {
    text?: string;
    margin?: string;
}

export const Divider = ({
    text,
    margin,
    ...props
} : DividerProps ) => {

    return (
        <AntdDivider
            style={{
                margin,
            }}
            {...props}
        >
            {text}
        </AntdDivider>
    );
};

export const dividerMeta: CodeComponentMeta<DividerProps> = {
    name: "Divider",
    displayName: "Divider",
    props: {
        text: {
            type: "string",
        },
        type : {
            type: "choice",
            options: ["horizontal", "vertical"],
            defaultValue: "horizontal",
        },
        dashed : {
            type: "boolean",
            defaultValue: false,
        },
        margin : {
            type: "string",
            defaultValue: "0px",
        },
        orientation : {
            type: "choice",
            options: ["left", "right", "center"],
            defaultValue: "left",
            hidden : (props) => !props.text,
        },
        orientationMargin : {
            type: "string",
            defaultValue: "0px",
            hidden : (props) => !props.text,
        },
    },
    importPath: "inprodi-design-system",
    importName: "Divider",
};

export function registerDivider(
    loader?: Registerable,
    customDividerMeta?: CodeComponentMeta<DividerProps>
) {
    const doRegisterComponent: typeof registerComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(Divider, customDividerMeta ?? dividerMeta);
}