import React from "react";
import registerComponent, { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import { theme } from "antd";

import { Registerable } from "./registerable";
import { useHover } from "./contexts/hoveredCell";
import { Skeleton } from "./registerSkeleton";

interface AdvancedTableCellProps {
    cellContent: any;
    size : "small" | "medium" | "large";
    align : "left" | "center" | "right";
    className?: string;
    index?: number;
    onClick : any;
    loading?: boolean;
}

const sizeDictionary = {
    small: "44px",
    medium: "56px",
    large: "68px",
};

export const AdvancedTableCell = ({
    size,
    align,
    index,
    onClick,
    className,
    cellContent,
    loading = false,
}: AdvancedTableCellProps) => {
    const { token } = theme.useToken();

    const { hoveredId, setHoveredId } = useHover();

    const cellStyle: React.CSSProperties = {
        display: "flex",
        columnGap: "6px",
        alignItems: "center",
        justifyContent: align,
        width: "100%",
        height: sizeDictionary[size],
        maxHeight: sizeDictionary[size],
        minHeight: sizeDictionary[size],
        padding: "0px 16px",
        border: `solid 1px ${token.colorBorder}`,
        borderTop: "none",
        background: index === hoveredId ? token.colorBgLayout : token.colorBgContainer,
    };

    return (
        <div
            style={cellStyle}
            className={`cell ${className}`}
            onClick={ () => (!loading && onClick) && onClick() }
            onMouseLeave={() => setHoveredId(null)}
            onMouseEnter={() => setHoveredId(index ?? -1)}
        >
            { loading ? (
                <Skeleton count={1} height="30px" />
            ) : cellContent }
        </div>
    );
};

export const advancedTableCellMeta: CodeComponentMeta<AdvancedTableCellProps> = {
    name: "AdvancedTableCell",
    displayName: "Advanced Table Cell",
    providesData: true,
    props: {
        size: {
            type: "choice",
            options: ["small", "medium", "large"],
            defaultValue: "medium",
        },
        align: {
            type: "choice",
            options: ["left", "center", "right"],
            defaultValue: "left",
        },
        index : {
            type : "number",
        },
        loading : {
            type : "boolean",
            defaultValue : false,
        },
        cellContent: {
            type: "slot",
        },
        onClick : {
            type: "eventHandler",
            argTypes : [],
        },
    },
    importPath: "inprodi-design-system",
    importName: "AdvancedTableCell",
};

export function registerAdvancedTableCell(
    loader?: Registerable,
    customAdvancedTableCellMeta?: CodeComponentMeta<AdvancedTableCellProps>
) {
    const doRegisterComponent: typeof registerComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(AdvancedTableCell, customAdvancedTableCellMeta ?? advancedTableCellMeta);
}
