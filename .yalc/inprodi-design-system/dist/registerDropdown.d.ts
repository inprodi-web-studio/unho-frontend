import React from "react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import type { DropDownProps as AntdDropDownProps } from "antd/es/dropdown";
import { Registerable } from "./registerable";
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
export declare const Dropdown: React.ForwardRefExoticComponent<DropdownProps & React.RefAttributes<any>>;
export declare const dropdownMeta: CodeComponentMeta<DropdownProps>;
export declare function registerDropdown(loader?: Registerable, customDropdownMeta?: CodeComponentMeta<DropdownProps>): void;
export {};
