import React, { forwardRef, useState, useMemo, useCallback, useEffect } from "react";
import _debounce from "lodash/debounce";
import registerComponent, { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import { Input as AntdInput } from "antd";
import type { InputProps as AntdInputProps } from "antd/es/input";
import InputMask from "react-input-mask";

import { Registerable } from "./registerable";

interface InputProps extends AntdInputProps {
    leftIcon?: any;
    rightIcon?: any;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    debounce?: number;
    mask?: string;
    error?: string | null | undefined;
    onClearError?: any;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
    size,
    mask,
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

    const [inputValue, setInputValue] = useState<string | undefined>(value);
    const [inputError, setInputError] = useState<string | null | undefined>(error);

    useEffect(() => {
        setInputError(error);
    }, [error]);

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    const debouncedOnChange = useMemo(() => {
        if (debounce > 0 && !mask) {
            return _debounce((val: any) => onChange(val), debounce);
        } else {
            return onChange;
        }
    }, [onChange, debounce, mask]);

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement> | any) => {
            const newValue = e.target.value;
            setInputValue(newValue);
            setInputError(null);
            debouncedOnChange(newValue);
            onClearError && onClearError();
        },
        [debouncedOnChange]
    );

    const handleBlur = useCallback((e : any) => {
        if (mask && inputValue) {
            setInputValue(e.target.value);
            onChange(e.target.value);
        }
    }, [mask, inputValue, onChange]);

    if ( mask ) {
        return (
            <InputMask
                mask={mask}
                maskChar={null}
                disabled={disabled}
                onBlur={handleBlur}
                onChange={handleChange}
                value={inputValue ?? value}
            >
                {((inputProps : any) => {
                    return (
                        <AntdInput
                            {...inputProps}
                            ref={ref}
                            variant={variant}
                            prefix={leftIcon}
                            suffix={rightIcon}
                            status={inputError ? "error" : undefined}
                            style={{
                                height: size === "small" ? "30px" : size === "middle" ? "38px" : "46px",
                                ...( variant === "borderless" && {
                                    padding : 0,
                                }),
                            }}
                            styles={{
                                prefix : {
                                    marginInlineEnd : "0px",
                                },
                                suffix : {
                                    marginInlineStart : "0px",
                                },
                                input : {
                                    padding : size === "small" ? "0px 8px" : size === "middle" ? "0px 12px" : "0px 16px",
                                },
                            }}
                            { ...props }
                        />
                    );
                }) as any}
            </InputMask>
        );
    }

    return (
        <AntdInput
            ref={ref}
            variant={variant}
            prefix={leftIcon}
            suffix={rightIcon}
            disabled={disabled}
            onChange={handleChange}
            value={inputValue ?? value}
            status={inputError ? "error" : undefined}
            style={{
                height: size === "small" ? "30px" : size === "middle" ? "38px" : "46px",
                ...( variant === "borderless" && {
                    padding : 0,
                }),
            }}
            styles={{
                prefix : {
                    marginInlineEnd : "0px",
                },
                suffix : {
                    marginInlineStart : "0px",
                },
                input : {
                    padding : size === "small" ? "0px 8px" : size === "middle" ? "0px 12px" : "0px 16px",
                },
            }}
            onBlur={(e) => onBlur && onBlur(e)}
            {...props}
        />
    );
});

export const inputMeta: CodeComponentMeta<InputProps> = {
    name: "Input",
    displayName: "Input",
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
        placeholder: {
            type: "string",
            defaultValue: "Input Placeholder",
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
        allowClear: {
            type: "boolean",
            defaultValue: false,
            advanced: true,
        },
        debounce : {
            type: "number",
            defaultValue: 0,
            advanced: true,
        },
        mask : {
            type: "string",
            advanced: true,
        },
        error : {
            type: "string",
            advanced: true,
        },
        leftIcon: {
            type: "slot",
            defaultValue: [
                {
                    type: "component",
                    name: "Icon",
                },
            ],
            allowedComponents: ["Icon"],
            hidePlaceholder: true,
        },
        rightIcon: {
            type: "slot",
            defaultValue: [
                {
                    type: "component",
                    name: "Icon",
                },
            ],
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

export function registerInput(
    loader?: Registerable,
    customInputMeta?: CodeComponentMeta<InputProps>
) {
    const doRegisterComponent: typeof registerComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(Input, customInputMeta ?? inputMeta);
}