import React from "react";
import registerComponent, {
    CodeComponentMeta,
} from "@plasmicapp/host/registerComponent";

import { Registerable } from "./registerable";
import { TypeAnimation } from "react-type-animation";

interface TextAnimationProps {
    sequence : any[];
    wrapper : "p" | "h2" | "div" | "strong" | "span";
    repeat: number;
    cursor: boolean;
    speed: any;
    style ?: React.CSSProperties;
}

export const TextAnimation = ({
    speed,
    style,
    cursor,
    repeat,
    wrapper,
    sequence,
} : TextAnimationProps ) => {

    return <TypeAnimation
        speed={speed}
        style={style}
        cursor={cursor}
        repeat={repeat}
        wrapper={wrapper}
        sequence={sequence}
    />;
};

export const textAnimationMeta: CodeComponentMeta<TextAnimationProps> = {
    name: "TextAnimation",
    displayName: "Text Animation",
    props: {
        sequence : {
            type : "array",
            defaultValue : [],
        },
        wrapper : {
            type : "choice",
            options : ["p", "h2", "div", "strong", "span"],
            defaultValue : "span",
        },
        repeat : {
            type : "number",
            defaultValue : Infinity,
        },
        cursor : {
            type : "boolean",
            defaultValue : true,
        },
        speed : {
            type : "number",
            defaultValue : 40,
        },
        style : {
            type : "object",
            defaultValue : {},
        },
    },
    importPath: "inprodi-design-system",
    importName: "TextAnimation",
};

export function registerTextAnimation(
    loader?: Registerable,
    customTextAnimationMeta?: CodeComponentMeta<TextAnimationProps>
) {
    const doRegisterComponent: typeof registerComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(TextAnimation, customTextAnimationMeta ?? textAnimationMeta);
}