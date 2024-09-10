import React from "react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import { Registerable } from "./registerable";
interface AdvancedTableCellProps {
    cellContent: any;
    size: "small" | "medium" | "large";
    align: "left" | "center" | "right";
    className?: string;
    index?: number;
    onClick: any;
    loading?: boolean;
}
export declare const AdvancedTableCell: ({ size, align, index, onClick, className, cellContent, loading, }: AdvancedTableCellProps) => React.JSX.Element;
export declare const advancedTableCellMeta: CodeComponentMeta<AdvancedTableCellProps>;
export declare function registerAdvancedTableCell(loader?: Registerable, customAdvancedTableCellMeta?: CodeComponentMeta<AdvancedTableCellProps>): void;
export {};
