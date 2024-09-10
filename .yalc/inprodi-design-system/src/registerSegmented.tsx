import React from "react";
import registerComponent, {
    CodeComponentMeta,
} from "@plasmicapp/host/registerComponent";
import { Segmented as AntdSegmented } from "antd";
import type { SegmentedProps as AntdSegmentedProps } from "antd/es/segmented";

import { Registerable } from "./registerable";
import { Icon } from "./registerIcon";

interface SegmentedProps extends AntdSegmentedProps {
    options : Array<{
        label : string;
        value : string;
        icon? : string;
        disabled? : boolean;
    }>
    onChange : any;
}

export const Segmented = ({
    options,
    onChange,
    ...props
} : SegmentedProps ) => {

    const parsedOptions = [];

    for (const option of options) {
        parsedOptions.push({
            label : option.label,
            value : option.value,
            icon : option.icon ? <Icon icon={option.icon} size={16} variant="regular" /> : undefined,
            disabled : option.disabled,
        });
    }

    return <AntdSegmented
        options={ parsedOptions }
        onChange={ (value) => onChange( value ) }
        {...props}
    />
};

export const segmentedMeta: CodeComponentMeta<SegmentedProps> = {
    name: "Segmented",
    displayName: "Segmented",
    states : {
        value : {
            type : "writable",
            variableType : "text",
            valueProp : "value",
            onChangeProp : "onChange",
        },
    },
    props: {
        block : {
            type : "boolean",
            defaultValue : false,
        },
        disabled : {
            type : "boolean",
            defaultValue : false,
        },
        options : {
            type : "array",
            defaultValue : [
                { label : "Button 1", value : "1", icon : "Smiley", disabled : false },
                { label : "Button 2", value : "2", icon : "Smiley", disabled : false },
            ],
        },
        size : {
            type : "choice",
            options : [
                "small",
                "middle",
                "large",
            ],
            defaultValue : "middle",
        },
        value : {
            type : "string",
        },
        onChange : {
            type : "eventHandler",
            argTypes : [{ name : "value", type : "string" }],
        },
    },
    importPath: "inprodi-design-system",
    importName: "Segmented",
};

export function registerSegmented(
    loader?: Registerable,
    customSegmentedMeta?: CodeComponentMeta<SegmentedProps>
) {
    const doRegisterComponent: typeof registerComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(Segmented, customSegmentedMeta ?? segmentedMeta);
}