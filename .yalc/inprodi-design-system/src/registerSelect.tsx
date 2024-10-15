import React, { forwardRef, useImperativeHandle, useState, useEffect } from "react";
import registerComponent, { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import { Registerable } from "./registerable";
import { Dropdown } from "./registerDropdown";
import { Icon } from "./registerIcon";
import { theme } from "antd";

interface SelectProps {
    isEmpty?: boolean;
    loading?: boolean;
    searchable?: boolean;
    error?: string | null | undefined;
    menuContent: any;
    onChange?: any;
    disabled?: boolean;
    onClose?: () => void;
    onOpen?: () => void;
    onSearch?: any;
    onClearError?: any;
    value?: {
        label: string;
        value: string;
    };
    size ?: "small" | "middle" | "large";
    placeholder?: string;
    valueContent?: any;
    className ?: string;
}

const heightDictionary = {
    small: "30px",
    middle: "36px",
    large: "44px",
};

const paddingDictionary = {
    small: "0px 8px",
    middle: "0px 12px",
    large: "0px 16px",
};

export const Select = forwardRef<any, SelectProps>(({
    size = "middle",
    value,
    isEmpty,
    loading,
    disabled,
    onOpen,
    onClose,
    error,
    onChange,
    onClearError,
    onSearch,
    className,
    searchable,
    menuContent,
    placeholder,
    valueContent,
}, ref) => {

    const { token } = theme.useToken();

    const [isHovered, setIsHovered] = useState(false);
    const [isOpened, setIsOpened] = useState(false);
    const [internalValue, setInternalValue] = useState(value);
    const [inputError, setInputError] = useState<string | null | undefined>(error);

    useEffect(() => {
        setInputError(error);
    }, [error]);

    useEffect(() => {
        setInternalValue(value);
    }, [value]);

    useImperativeHandle(ref, () => ({
        setValue: (newValue: { label: string; value: string }) => {
            setInternalValue(newValue);
            onChange(newValue);
            onClearError && onClearError();
        },
    }), [onChange]);

    const containerStyles : React.CSSProperties = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius : "6px",
        border : `solid 1px ${ inputError ? token.colorError : isHovered ? token.colorPrimaryBorderHover : isOpened ? token.colorPrimary : token.colorBorder }`,
        gap : "10px",
        cursor : disabled ? "default" : "pointer",
        height : heightDictionary[size],
        padding : paddingDictionary[size],
        background : disabled ? token.colorBgContainerDisabled : token.colorBgContainer,
        boxShadow : "rgba(0, 0, 0, 0.04) 0px 1px 3px 0px, rgba(0, 0, 0, 0.02) 0px 1px 2px 0px",
    };

    const labelStyles : React.CSSProperties = {
        width : "100%",
        fontSize : "14px",
        fontWeight : "400",
        whiteSpace : "nowrap",
        textOverflow : "ellipsis",
        overflow : "hidden",
        color : (internalValue?.label && !disabled) ? token.colorText : token.colorTextDisabled,
    };

    return (
        <Dropdown
            maxHeight="200px"
            isEmpty={isEmpty}
            loading={loading}
            trigger={ disabled ? [] : ["click"]}
            closeOnSelect={true}
            className={className}
            searchable={searchable}
            menuContent={menuContent}
            onOpen={() => {
                setIsOpened(true);
                onOpen && onOpen();
            }}
            onClose={() => {
                setIsOpened(false);
                onClose && onClose();
                onSearch(null);
            }}
            onSearch={( value : string ) => onSearch( value )}
            triggerContent={(
                <div
                    style={containerStyles}
                    className="select-container"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    { internalValue?.label && valueContent }

                    <span style={labelStyles}>{ internalValue?.label ?? placeholder }</span>

                    <Icon icon="CaretUpDown" size={16} variant="regular" color={ token.colorTextSecondary } />
                </div>
            )}
        />
    );
});

export const selectMeta: CodeComponentMeta<SelectProps> = {
    name: "Select",
    displayName: "Select",
    states: {
        value: {
            type: "writable",
            variableType: "object",
            valueProp: "value",
            onChangeProp: "onChange",
        },
        searchValue: {
            type: "writable",
            variableType: "text",
            valueProp: "searchValue",
            onChangeProp: "onSearch",
        },
    },
    props: {
        value: {
            type: "object",
            description : "Object with label, value and other props"
        },
        placeholder : {
            type : "string",
            defaultValue : "Seleccionar...",
        },
        size : {
            type : "choice",
            options : ["small", "middle", "large"],
            defaultValue : "middle",
        },
        searchable: {
            type: "boolean",
            defaultValue: false,
        },
        isEmpty: {
            type: "boolean",
            defaultValue: false,
        },
        loading: {
            type: "boolean",
            defaultValue: false,
        },
        disabled : {
            type : "boolean",
            defaultValue : false,
        },
        searchValue: {
            type: "string",
        },
        onSearch: {
            type: "eventHandler",
            argTypes: [{ name: "value", type: "string" }],
        },
        onChange: {
            type: "eventHandler",
            argTypes: [{ name: "value", type: "object" }],
        },
        onClose : {
            type : "eventHandler",
            argTypes : [],
        },
        onOpen : {
            type : "eventHandler",
            argTypes : [],
        },
        menuContent: {
            type: "slot",
        },
        valueContent : {
            type : "slot",
            hidePlaceholder : true,
        },
    },
    refActions: {
        setValue: {
            description: "Set Select value",
            argTypes: [{ name: "value", type: "object" }],
        },
    },
    importPath: "inprodi-design-system",
    importName: "Select",
};

export function registerSelect(
    loader?: Registerable,
    customSelectMeta?: CodeComponentMeta<SelectProps>
) {
    const doRegisterComponent: typeof registerComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(Select, customSelectMeta ?? selectMeta);
}