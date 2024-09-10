import React, { forwardRef, useState, useMemo, useCallback, useEffect } from "react";
import _debounce from "lodash/debounce";
import registerComponent, { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import { InputNumber as AntdNumberInput } from "antd";
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

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(({
    size,
    value,
    error,
    variant,
    leftIcon,
    onChange,
    rightIcon,
    name = "",
    debounce = 0,
    onClearError,
    disabled,
    onBlur,
    ...props
}, ref : any ) => {

    const [inputValue, setInputValue] = useState<number | string | null | undefined>(value);
    const [inputError, setInputError] = useState<string | null | undefined>(error);

    useEffect(() => {
        setInputError(error);
    }, [error]);

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    const debouncedOnChange = useMemo(() => {
        if (debounce > 0) {
            return _debounce((val: any) => onChange(val), debounce);
        } else {
            return onChange;
        }
    }, [onChange, debounce]);

    const handleChange = useCallback(
        (value : number | string | null) => {
            const newValue = value;
            setInputValue(newValue);
            setInputError(null);
            debouncedOnChange(newValue);
            onClearError && onClearError();
        },
        [debouncedOnChange]
    );

    return (
        <AntdNumberInput
            keyboard
            ref={ref}
            decimalSeparator="."
            variant={variant}
            prefix={leftIcon}
            suffix={rightIcon}
            disabled={disabled}
            onChange={handleChange}
            value={inputValue ?? value}
            onBlur={(e) => onBlur && onBlur(e)}
            onClick={ e => e.stopPropagation() }
            status={inputError ? "error" : undefined}
            parser={value => value ? value.replace(/\$\s?|(,*)/g, '') : ''}
            formatter={value => value ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : ''}
            style={{
                height: size === "small" ? "30px" : size === "middle" ? "38px" : "46px",
                ...( variant === "borderless" && {
                    padding : 0,
                }),
            }}
            {...props}
        />
    );
});

export const numberInputMeta: CodeComponentMeta<NumberInputProps> = {
    name: "Number Input",
    displayName: "Number Input",
    providesData: true,
    states: {
        value: {
            type: "writable",
            variableType: "text",
            valueProp: "value",
            onChangeProp: "onChange",
        },
    },
    props: {
        value: {
            type: "string",
        },
        min : {
            type: "number",
        },
        max : {
            type: "number",
        },
        step : {
            type: "number",
            defaultValue: 1,
        },
        precision : {
            type: "number",
            defaultValue: 0,
        },
        placeholder: {
            type: "string",
            defaultValue: "Input Placeholder",
        },
        controls : {
            type: "boolean",
            defaultValue: true,
        },
        size: {
            type: "choice",
            options: ["small", "middle", "large"],
            defaultValue: "middle",
        },
        variant: {
            type: "choice",
            options: ["outlined", "borderless", "filled"],
            defaultValue: "outlined",
        },
        disabled: {
            type: "boolean",
            defaultValue: false,
        },
        debounce : {
            type: "number",
            defaultValue: 0,
            advanced: true,
        },
        error : {
            type: "string",
            advanced: true,
        },
        leftIcon: {
            type: "slot",
            allowedComponents: ["Icon"],
            hidePlaceholder: true,
        },
        rightIcon: {
            type: "slot",
            allowedComponents: ["Icon"],
            hidePlaceholder: true,
        },
        onChange: {
            type: "eventHandler",
            argTypes: [{ name: "value", type: "string" }],
        },
    },
    importPath: "inprodi-design-system",
    importName: "Input",
};

export function registerNumberInput(
    loader?: Registerable,
    customNumberInputMeta?: CodeComponentMeta<NumberInputProps>
) {
    const doRegisterComponent: typeof registerComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(NumberInput, customNumberInputMeta ?? numberInputMeta);
}