import React from "react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import { InputNumberProps as AntdNumberInputProps } from "antd/es/input-number";
import { Registerable } from "./registerable";
interface NumberInputProps extends AntdNumberInputProps {
    leftIcon?: any;
    rightIcon?: any;
    value?: string;
    onChange: any;
    debounce?: number;
    error?: string | null | undefined;
    onClearError?: any;
}
export declare const NumberInput: React.ForwardRefExoticComponent<NumberInputProps & React.RefAttributes<HTMLInputElement>>;
export declare const numberInputMeta: CodeComponentMeta<NumberInputProps>;
export declare function registerNumberInput(loader?: Registerable, customNumberInputMeta?: CodeComponentMeta<NumberInputProps>): void;
export {};
