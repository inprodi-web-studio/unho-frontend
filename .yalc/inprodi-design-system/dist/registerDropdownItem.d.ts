import React from "react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import { Registerable } from "./registerable";
interface DropdownItemProps {
    leftSection?: any;
    rightSection?: any;
    label: string;
    disabled?: boolean;
    isSelected?: boolean;
    onClick?: any;
    onIsSelectedChange?: any;
    className?: string;
    selectedPosition?: "left" | "right";
}
export declare const DropdownItem: ({ leftSection, rightSection, label, isSelected, disabled, selectedPosition, onClick, className, }: DropdownItemProps) => React.JSX.Element;
export declare const dropdownItemMeta: CodeComponentMeta<DropdownItemProps>;
export declare function registerDropdownItem(loader?: Registerable, customDropdownItemMeta?: CodeComponentMeta<DropdownItemProps>): void;
export {};
