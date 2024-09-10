import React from "react";
import registerComponent, {
    CodeComponentMeta,
} from "@plasmicapp/host/registerComponent";
import { Slider as AntdSlider } from "antd";
import type { SliderBaseProps as AntdSliderProps } from "antd/es/slider";

import { Registerable } from "./registerable";

interface SliderProps extends AntdSliderProps {

}

export const Slider = ({
    ...props
} : SliderProps ) => {

    return <AntdSlider
        {...props}
    />
};

export const sliderMeta: CodeComponentMeta<SliderProps> = {
    name: "Slider",
    displayName: "Slider",
    states : {
        value : {
            type : "writable",
            variableType : "number",
            valueProp : "value",
            onChangeProp : "onChange",
        },
    },
    props: {
        value : {
            type : "number",
            defaultValue : 0,
        },
        max : {
            type : "number",
            defaultValue : 100,
        },
        min : {
            type : "number",
            defaultValue : 0,
        },
        step : {
            type : "number",
            defaultValue : 1,
        },
        disabled : {
            type : "boolean",
            defaultValue : false,
        },
        dots : {
            type : "boolean",
            defaultValue : true,
        },
        range : {
            type : "boolean",
            defaultValue : false,
        },
        vertical : {
            type : "boolean",
            defaultValue : false,
        },
        included : {
            type : "boolean",
            defaultValue : true,
            advanced : true,
        },
        marks : {
            type : "array",
            defaultValue : [],
            advanced : true,
        },
        tooltip : {
            type : "object",
            defaultValue : {},
            advanced : true,
        },
        onChange : {
            type : "eventHandler",
            argTypes : [{ name : "value", type : "number" }],
        },
    },
    importPath: "inprodi-design-system",
    importName: "Slider",
};

export function registerSlider(
    loader?: Registerable,
    customSliderMeta?: CodeComponentMeta<SliderProps>
) {
    const doRegisterComponent: typeof registerComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(Slider, customSliderMeta ?? sliderMeta);
}