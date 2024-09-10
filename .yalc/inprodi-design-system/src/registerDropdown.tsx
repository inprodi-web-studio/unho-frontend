import React, { useState, useImperativeHandle, useRef, useEffect } from "react";
import registerComponent, { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import { Dropdown as AntdDropDown, theme } from "antd";
import type { DropDownProps as AntdDropDownProps } from "antd/es/dropdown";
import { Registerable } from "./registerable";
import { Skeleton } from "./registerSkeleton";
import { Input } from "./registerInput";
import { Icon } from "./registerIcon";
import { Divider } from "./registerDivider";

interface DropdownProps extends AntdDropDownProps {
    triggerContent: any;
    menuContent: any;
    open?: boolean;
    searchValue?: string;
    width?: string;
    loading?: boolean;
    closeOnSelect?: boolean;
    onLoadingChange?: any;
    searchable?: boolean;
    isEmpty?: boolean;
    onSearch?: any;
    onOpen?: any;
    onClose?: any;
    maxHeight?: string;
}

export const Dropdown = React.forwardRef<any, DropdownProps>(({
    open : propOpen,
    width,
    onOpen,
    loading,
    trigger,
    onClose,
    isEmpty,
    onSearch,
    placement,
    className,
    maxHeight,
    searchable,
    searchValue,
    menuContent,
    closeOnSelect,
    triggerContent,
}, ref) => {
    const { token } = theme.useToken();

    const [open, setOpen] = useState(propOpen);
    const inputRef = useRef<any>(null);

    const dropdownStyle: React.CSSProperties = {
        backgroundColor: token.colorBgElevated,
        borderRadius: "6px",
        border: `solid 1px ${token.colorBorder}`,
        boxShadow: token.boxShadowSecondary,
        maxWidth: width,
        minWidth: width,
    };

    useImperativeHandle(ref, () => ({
        toggleOpen: () => {
            setOpen(prevOpen => {
                if (prevOpen) {
                    onClose && onClose();
                    onSearch && onSearch(null);
                }

                if (!prevOpen) {
                    onOpen && onOpen();
                    setTimeout(() => {
                        inputRef.current && inputRef.current.focus();
                    }, 0);
                }

                return !prevOpen;
            });
        },
    }));

    useEffect(() => {
        if (open && searchable) {
            inputRef.current && inputRef.current.focus();
        }
    }, [open, searchable]);

    return (
        <AntdDropDown
            autoAdjustOverflow
            destroyPopupOnHide
            open={open}
            className={className}
            trigger={trigger}
            placement={placement}
            onOpenChange={() => {
                setOpen(!open);

                if (open) {
                    onClose && onClose();
                    onSearch && onSearch(null);
                }

                if (!open) {
                    onOpen && onOpen();
                    setTimeout(() => {
                        inputRef.current && inputRef.current.focus();
                    }, 0);
                }
            }}
            dropdownRender={() => (
                <div style={dropdownStyle} onClick={() => {
                    closeOnSelect && setOpen(false);
                    onClose && onClose();
                }}>
                    {searchable && (
                        <>
                            <Input
                                size="small"
                                debounce={500}
                                variant="borderless"
                                placeholder="Buscar..."
                                ref={inputRef}
                                onClick={(event) => event.stopPropagation()}
                                onChange={(value) => onSearch && onSearch(value)}
                                style={{ borderRadius: "4px 4px 0 0", height: "34px" }}
                                leftIcon={<Icon size={16} icon="MagnifyingGlass" color="#868E96" variant="regular" />}
                            />
                            <Divider margin="0" />
                        </>
                    )}
                    {loading ? (
                        <div className="loading-container" style={{ padding: "0 4px 4px" }}>
                            {Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} count={1} height="34px" />)}
                        </div>
                    ) : isEmpty ? (
                        <div
                            className="empty-data"
                            style={{
                                width: "calc(100% - 40px)",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "10px 20px",
                                gap: "6px",
                            }}
                        >
                            <Icon icon="ListMagnifyingGlass" size={24} variant="duotone" color={token.colorPrimary} />
                            <p style={{ color: token.colorTextSecondary, fontSize: "12px", fontWeight: 400, textAlign: "center" }}>
                                {searchValue ? "¡Vaya! Parece que no hay resultados para tu búsqueda" : "¡Vaya! Parece que actualmente no hay registros para mostrar"}
                            </p>
                        </div>
                    ) : (
                        <div style={{ overflow : "auto", maxHeight }}>
                            {menuContent}
                        </div>
                    )}
                </div>
            )}
        >
            {triggerContent}
        </AntdDropDown>
    );
});

export const dropdownMeta: CodeComponentMeta<DropdownProps> = {
    name: "Dropdown",
    displayName: "Dropdown",
    states: {
        searchValue: {
            type: "writable",
            variableType: "text",
            valueProp: "searchValue",
            onChangeProp: "onSearch",
        },
        loading: {
            type: "writable",
            variableType: "boolean",
            valueProp: "loading",
            onChangeProp: "onLoadingChange",
        },
    },
    props: {
        trigger: {
            type: "choice",
            options: ["hover", "click", "contextMenu"],
            defaultValue: "click",
        },
        width: {
            type: "string",
        },
        maxHeight: {
            type: "string",
            defaultValue : "200px",
        },
        placement: {
            type: "choice",
            options: ["bottom", "bottomLeft", "bottomRight", "top", "topLeft", "topRight"],
            defaultValue: "bottomRight",
        },
        searchable: {
            type: "boolean",
            defaultValue: false,
        },
        searchValue: {
            type: "string",
            defaultValue: "",
            hidden: (props) => !props.searchable,
        },
        isEmpty: {
            type: "boolean",
            defaultValue: false,
        },
        closeOnSelect: {
            type: "boolean",
            defaultValue: true,
        },
        loading: {
            type: "boolean",
            defaultValue: false,
        },
        onLoadingChange: {
            type: "eventHandler",
            argTypes: [],
        },
        triggerContent: {
            type: "slot",
        },
        menuContent: {
            type: "slot",
        },
        onSearch: {
            type: "eventHandler",
            argTypes: [{ name: "value", type: "string" }],
        },
        onOpen: {
            type: "eventHandler",
            argTypes: [],
        },
        onClose: {
            type: "eventHandler",
            argTypes: [],
        },
    },
    refActions: {
        toggleOpen: {
            description: "Toggle the open state of the dropdown",
            argTypes: [],
        },
    },
    importPath: "inprodi-design-system",
    importName: "Dropdown",
};

export function registerDropdown(
    loader?: Registerable,
    customDropdownMeta?: CodeComponentMeta<DropdownProps>
) {
    const doRegisterComponent: typeof registerComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(Dropdown, customDropdownMeta ?? dropdownMeta);
}