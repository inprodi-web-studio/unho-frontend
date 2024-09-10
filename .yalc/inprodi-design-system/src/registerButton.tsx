import React from "react";
import registerComponent, {
    CodeComponentMeta,
} from "@plasmicapp/host/registerComponent";
import { Button as AntdButton } from "antd";
import type { ButtonProps as AntdButtonProps } from "antd/es/button";
import { Registerable } from "./registerable";

interface ButtonProps extends AntdButtonProps {
    isSubmit?: boolean;
    label?: string;
}

export const Button = ({
    label,
    loading,
    isSubmit,
    ...props
} : ButtonProps ) => {

    return <AntdButton
        loading={ loading }
        className="inprodi-button"
        htmlType={ isSubmit ? "submit" : "button" }
        style={{
            gap: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}
        // @ts-ignore
        styles={{
            icon : {
                marginInlineEnd : "0px",
                marginInlineStart : "0px",
            },
        }}
        {...props}
    >
        {label}
    </AntdButton>;
};

export const buttonMeta: CodeComponentMeta<ButtonProps> = {
    name: "Button",
    displayName: "Button",
    props: {
        label : {
            type : "string",
            description : "Label of the button",
            defaultValue : "Button Label",
        },
        type: {
            type: "choice",
            options: ["default", "primary", "ghost", "dashed", "link", "text"],
            description: "Can be set to primary, ghost, dashed, link, text, default",
            defaultValue: "primary",
        },
        size: {
            type: "choice",
            options: ["small", "medium", "large"],
            description: "Set the size of button",
            defaultValue: "medium",
        },
        iconPosition : {
            type: "choice",
            options: ["start", "end"],
            description: "Set the position of icon",
            defaultValue: "start",
        },
        block: {
            type: "boolean",
            description: "Option to fit button width to its parent width",
            defaultValue: false,
        },
        href: {
            type: "href",
            description: "Redirect url of link button",
        },
        target: {
            type: "choice",
            options: ["_blank", "_self", "_parent", "_top"],
            description:
                "Same as target attribute of a, works when href is specified",
            hidden: (props) => !props.href,
            defaultValue: "_self",
        },
        loading: {
            type: "boolean",
            description: "Set the loading status of button",
            defaultValue: false,
        },
        isSubmit : {
            type: "boolean",
            description: "Set if the button can submit forms.",
            defaultValue: false,
            advanced: true,
        },
        disabled: {
            type: "boolean",
            description: "Disabled state of button",
            defaultValue: false,
            advanced: true,
        },
        ghost: {
            type: "boolean",
            description:
                "Make background transparent and invert text and border colors",
            defaultValue: false,
            advanced: true,
        },
        danger: {
            type: "boolean",
            description: "Set the danger status of button",
            defaultValue: false,
            advanced: true,
        },
        icon : {
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
        onClick : {
            type: "eventHandler",
            argTypes: [],
        },
    },
    importPath: "inprodi-design-system",
    importName: "Button",
};

export function registerButton(
    loader?: Registerable,
    customButtonMeta?: CodeComponentMeta<ButtonProps>
) {
    const doRegisterComponent: typeof registerComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(Button, customButtonMeta ?? buttonMeta);
}