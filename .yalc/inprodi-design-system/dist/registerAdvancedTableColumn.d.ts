import React from "react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import { Registerable } from "./registerable";
interface AdvancedTableColumnProps {
    title: string;
    cells: any;
    align: "left" | "center" | "right";
    className?: string;
    initialWidth?: number;
    minWidth?: number;
    maxWidth?: number;
}
export declare const AdvancedTableColumn: ({ title, align, cells, minWidth, maxWidth, initialWidth, }: AdvancedTableColumnProps) => React.JSX.Element;
export declare const advancedTableColumnMeta: CodeComponentMeta<AdvancedTableColumnProps>;
export declare function registerAdvancedTableColumn(loader?: Registerable, customAdvancedTableColumnMeta?: CodeComponentMeta<AdvancedTableColumnProps>): void;
export {};
