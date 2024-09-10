import React, { forwardRef } from "react";
import registerComponent, {
    CodeComponentMeta,
} from "@plasmicapp/host/registerComponent";
import { Input as AntdInput } from "antd";
import type { InputProps as AntdInputProps } from "antd/es/input";

import { Registerable } from "./registerable";

interface PasswordInputProps extends AntdInputProps {
    leftIcon: any;
    rightIcon: any;
    value: string;
    error?: string | null | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClearError?: any;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(({
    size,
    value,
    error,
    leftIcon,
    onChange,
    rightIcon,
    onClearError,
    name = "",
    ...props
} : PasswordInputProps, ref : any ) => {
    const handleOnChange = (event : any) => {
        onChange(event.target.value);

        onClearError && onClearError();
    };

    return <AntdInput.Password
        ref={ref}
        prefix={leftIcon}
        suffix={rightIcon}
        onChange={handleOnChange}
        placeholder="•••••••••••••"
        status={error ? "error" : undefined}
        style={{
            height: size === "small" ? "30px" : size === "middle" ? "38px" : "46px",
            padding: size === "small" ? "0px 8px" : size === "middle" ? "0px 12px" : "0px 16px",
        }}
        styles={{
            input : {
                letterSpacing : "1px",
            },
        }}
        {...props}
    />
});

export const passwordInputMeta: CodeComponentMeta<PasswordInputProps> = {
    name: "PasswordInput",
    displayName: "Password Input",
    states : {
        value : {
            type : "writable",
            variableType : "text",
            valueProp : "value",
            onChangeProp : "onChange",
        },
    },
    props: {
        value : {
            type: "string",
        },
        size : {
            type: "choice",
            options: ["small", "middle", "large"],
            defaultValue: "middle",
        },
        variant : {
            type: "choice",
            options: ["outlined", "borderless", "filled"],
            defaultValue: "outlined",
        },
        disabled : {
            type: "boolean",
            defaultValue: false,
        },
        allowClear : {
            type: "boolean",
            defaultValue: false,
            advanced: true,
        },
        leftIcon : {
            type: "slot",
            defaultValue: [
                {
                    type: "component",
                    name: "Icon",
                },
            ],
            allowedComponents : ["Icon"],
            hidePlaceholder : true,
        },
        rightIcon : {
            type: "slot",
            defaultValue: [
                {
                    type: "component",
                    name: "Icon",
                },
            ],
            allowedComponents : ["Icon"],
            hidePlaceholder : true,
        },
        onChange : {
            type: "eventHandler",
            argTypes: [{ name : "value", type : "string"}],
        },
    },
    importPath: "inprodi-design-system",
    importName: "Input",
};

export function registerPasswordInput(
    loader?: Registerable,
    customPasswordInputMeta?: CodeComponentMeta<PasswordInputProps>
) {
    const doRegisterComponent: typeof registerComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(PasswordInput, customPasswordInputMeta ?? passwordInputMeta);
}