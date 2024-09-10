import React from "react";
import registerComponent, {
    CodeComponentMeta,
} from "@plasmicapp/host/registerComponent";

import { Registerable } from "./registerable";
import { theme } from "antd";
import { Icon } from "./registerIcon";

interface DropdownItemProps {
    leftSection?: any;
    rightSection?: any;
    label : string;
    disabled? : boolean;
    isSelected?: boolean;
    onClick?: any;
    onIsSelectedChange?: any;
    className?: string;
    selectedPosition?: "left" | "right";
}

export const DropdownItem = ({
    leftSection,
    rightSection,
    label,
    isSelected,
    disabled,
    selectedPosition,
    onClick,
    className,
} : DropdownItemProps ) => {

    const { token } = theme.useToken();

    const dropdownItemStyles : React.CSSProperties = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: "0px 8px",
        gap: "12px",
        borderRadius: "4px",
        cursor: disabled ? "default" : "pointer",
        transition : "all 0.3s ease-in-out",
        background : token.colorBgContainer,
        maxHeight : "34px",
        minHeight : "34px",
        margin : "2px",
        backgroundColor : disabled ? token.colorBgLayout : token.colorBgContainer,
    };

    const labelStyle : React.CSSProperties = {
        fontSize: "14px",
        fontWeight: isSelected ? "500" : "400",
        lineHeight: "20px",
        color: disabled ? token.colorTextDisabled : token.colorText,
        width: "100%",
        maxWidth: "100%",
        whiteSpace: "pre",
        textOverflow : "ellipsis",
        overflow : "hidden",
        minWidth : "max-content",
    };

    return (
        <div
            className={`dropdown-item ${className}`}
            style={dropdownItemStyles}
            onClick={ () => {
                if (!disabled) {
                    onClick();
                }
            }}
        >
            { (isSelected && selectedPosition === "left") && (
                <Icon
                    size={16}
                    variant="duotone"
                    icon="CheckCircle"
                    color={token.colorPrimary}
                />
            )}
            {leftSection}
            <p className="dropdown-item-label" style={labelStyle}>{label}</p>
            {rightSection}
            { (isSelected && selectedPosition === "right") && (
                <Icon
                    size={16}
                    variant="duotone"
                    icon="CheckCircle"
                    color={token.colorPrimary}
                />
            )}
        </div>
    );
};

export const dropdownItemMeta: CodeComponentMeta<DropdownItemProps> = {
    name: "DropdownItem",
    displayName: "Dropdown Item",
    states : {
        isSelected : {
            type : "writable",
            variableType : "boolean",
            valueProp : "isSelected",
            onChangeProp : "onIsSelectedChange",
        },
    },
    props: {
        label : {
            type : "string",
            defaultValue : "Dropdown Item",
        },
        isSelected : {
            type : "boolean",
            defaultValue : false,
        },
        selectedPosition : {
            type : "choice",
            options : ["none", "left", "right"],
            defaultValue : "right",
            advanced : true,
        },
        disabled : {
            type : "boolean",
            defaultValue : false,
        },
        rightSection : {
            type : "slot",
            hidePlaceholder : true,
        },
        leftSection : {
            type : "slot",
            defaultValue: [
                {
                    type: "component",
                    name: "Icon",
                },
            ],
            hidePlaceholder : true,
        },
        onClick : {
            type : "eventHandler",
            argTypes : [],
        },
        onIsSelectedChange : {
            type : "eventHandler",
            argTypes : [],
        },
    },
    importPath: "inprodi-design-system",
    importName: "DropdownItem",
};

export function registerDropdownItem(
    loader?: Registerable,
    customDropdownItemMeta?: CodeComponentMeta<DropdownItemProps>
) {
    const doRegisterComponent: typeof registerComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(DropdownItem, customDropdownItemMeta ?? dropdownItemMeta);
}