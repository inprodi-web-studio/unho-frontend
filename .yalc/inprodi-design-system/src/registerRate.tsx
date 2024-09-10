import React from "react";
import registerComponent, { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import { Rate as AntdRate } from "antd";
import type { RateProps as AntdRateProps } from "antd/es/rate";
import { Registerable } from "./registerable";
import { Icon } from "./registerIcon";

interface RateProps extends AntdRateProps {
    onValueChange: any;
    value: number;
    icon: string;
}

export const Rate = ({
    value,
    onValueChange,
    className,
    icon,
    ...props
}: RateProps) => {
    const handleChange = (value: number) => {
        onValueChange(value);
    };

    return (
        <AntdRate
            value={value}
            character={() => <Icon icon={icon} variant="duotone" size={18} />}
            onChange={handleChange}
            className={`inprodi-rate ${className}`}
            {...props}
        />
    );
};

export const rateMeta: CodeComponentMeta<RateProps> = {
    name: "Rate",
    displayName: "Rate",
    providesData: true,
    states: {
        value: {
            type: "writable",
            variableType: "number",
            valueProp: "value",
            onChangeProp: "onValueChange",
        },
    },
    props: {
        value: {
            type: "number",
            defaultValue: 0,
        },
        count: {
            type: "number",
            defaultValue: 5,
        },
        allowClear: {
            type: "boolean",
            defaultValue: true,
        },
        icon : {
            type : "string",
            defaultValue : "Star",
        },
        allowHalf: {
            type: "boolean",
            defaultValue: false,
        },
        disabled: {
            type: "boolean",
            defaultValue: false,
        },
        onValueChange: {
            type: "eventHandler",
            argTypes: [{ name: "value", type: "number" }],
        },
    },
    importPath: "inprodi-design-system",
    importName: "Rate",
};

export function registerRate(
    loader?: Registerable,
    customRateMeta?: CodeComponentMeta<RateProps>
) {
    const doRegisterComponent: typeof registerComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(Rate, customRateMeta ?? rateMeta);
}
