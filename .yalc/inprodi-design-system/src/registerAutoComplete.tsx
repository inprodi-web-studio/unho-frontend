import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import registerComponent, { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import { Dropdown, theme } from "antd";

import { Registerable } from "./registerable";
import { Input } from "./registerInput";
import { Skeleton } from "./registerSkeleton";

interface AutoCompleteProps {
    isEmpty?: boolean;
    loading: boolean;
    menuContent: any;
    placeholder: string;
    onChange: any;
    closeOnSelect?: boolean;
    onPressEnter?: any;
    value?: string;
}

export const AutoComplete = forwardRef<any, AutoCompleteProps>(({
    value,
    isEmpty,
    loading,
    onChange,
    placeholder,
    menuContent,
    onPressEnter,
    closeOnSelect,
}: AutoCompleteProps, ref) => {
    const { token } = theme.useToken();

    const [open, setOpen] = useState(false);
    const inputRef = useRef<any>(null);

    const dropdownStyle: React.CSSProperties = {
        backgroundColor: token.colorBgElevated,
        borderRadius: "6px",
        border: `solid 1px ${token.colorBorder}`,
        boxShadow: token.boxShadowSecondary,
    };

    useEffect( () => {
        if ( isEmpty ) {
            setOpen(false);
        }
    }, [isEmpty]);

    useImperativeHandle(ref, () => ({
        clearValue: () => {
            onChange(null);

            if ( inputRef.current ) {
                inputRef.current.value = "";
            }
        },
    }));

    const handleFocus = () => {
        if ( !isEmpty ) {
            setOpen(true);
        }
    };

    const handleBlur = () => {
        setOpen(false);
    };

    return (
        <Dropdown
            autoAdjustOverflow
            destroyPopupOnHide
            open={open}
            trigger={[]}
            onOpenChange={(flag) => setOpen(flag)}
            dropdownRender={() => (
                <div style={dropdownStyle} onClick={() => {
                    closeOnSelect && setOpen(false);
                }}>
                    { loading ? (
                        <div className="loading-container" style={{ padding: "0 4px 4px" }}>
                            {Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} count={1} height="34px" />)}
                        </div>
                    ) : (
                        <div style={{ overflow : "auto", maxHeight : "200px" }}>
                            {menuContent}
                        </div>
                    )}
                </div>
            )}
        >
            <Input
                size="middle"
                ref={inputRef}
                debounce={100}
                onBlur={handleBlur}
                defaultValue={value}
                onFocus={handleFocus}
                placeholder={placeholder}
                onPressEnter={onPressEnter}
                onChange={ (value) => onChange( value ) }
            />
        </Dropdown>
    );
});

export const autoCompleteMeta: CodeComponentMeta<AutoCompleteProps> = {
    name: "AutoComplete",
    displayName: "Auto Complete",
    states: {
        value: {
            type: "writable",
            variableType: "text",
            valueProp: "value",
            onChangeProp: "onChange",
        },
    },
    props: {
        isEmpty: {
            type: "boolean",
            defaultValue: false,
        },
        loading: {
            type: "boolean",
            defaultValue: false,
        },
        closeOnSelect: {
            type: "boolean",
            defaultValue: true,
        },
        value: {
            type: "string",
        },
        menuContent: {
            type: "slot",
        },
        placeholder: {
            type: "string",
            defaultValue: "Search...",
        },
        onChange: {
            type: "eventHandler",
            argTypes: [{ name: "value", type: "string" }],
        },
        onPressEnter :  {
            type: "eventHandler",
            argTypes: [],
        },
    },
    refActions : {
        clearValue : {
            description: "clear autocomplete value",
            argTypes : [],
        },
    },
    importPath: "inprodi-design-system",
    importName: "AutoComplete",
};

export function registerAutoComplete(
    loader?: Registerable,
    customAutocompleteMeta?: CodeComponentMeta<AutoCompleteProps>
) {
    const doRegisterComponent: typeof registerComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(AutoComplete, customAutocompleteMeta ?? autoCompleteMeta);
}