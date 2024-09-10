import React from "react";
import registerComponent, { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import { theme } from "antd";
import { Panel, PanelResizeHandle } from "react-resizable-panels";
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

export const AdvancedTableColumn = ({
    title,
    align,
    cells,
    minWidth,
    maxWidth,
    initialWidth,
}: AdvancedTableColumnProps) => {
    const { token } = theme.useToken();

    const mainContainerStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        marginRight: "-1px",
        flex: 1,
    };

    const headerStyle: React.CSSProperties = {
        width: "100%",
        height: "34px",
        display: "flex",
        columnGap: "6px",
        maxHeight: "34px",
        minHeight: "34px",
        padding: "0px 10px",
        position: "relative",
        alignItems: "center",
        justifyContent: align,
        background: token.colorBgLayout,
        border: `solid 1px ${token.colorBorder}`,
    };

    const titleStyle: React.CSSProperties = {
        fontSize: "12px",
        fontWeight: "300",
        lineHeight: "auto",
        color: token.colorTextSecondary,
    };

    return (
        <>
            <Panel style={{
                width: `${initialWidth}px`,
                minWidth: `${minWidth}px`,
                maxWidth: `${maxWidth}px`,
            }}>
                <div style={mainContainerStyle}>
                    <div className="th" style={headerStyle}>
                        <span style={titleStyle}>{title}</span>
                    </div>

                    {cells}
                </div>
            </Panel>
            <PanelResizeHandle />
        </>
    );
};

export const advancedTableColumnMeta: CodeComponentMeta<AdvancedTableColumnProps> = {
    name: "AdvancedTableColumn",
    displayName: "Advanced Table Column",
    providesData: true,
    props: {
        title: {
            type: "string",
            defaultValue: "Column Title",
        },
        align: {
            type: "choice",
            options: ["left", "center", "right"],
            defaultValue: "left",
        },
        initialWidth: {
            type: "number",
            defaultValue: 200,
        },
        minWidth: {
            type: "number",
            defaultValue: 100,
        },
        maxWidth: {
            type: "number",
            defaultValue: 500,
        },
        cells : {
            type: "slot",
            allowedComponents: ["AdvancedTableCell"],
        }
    },
    importPath: "inprodi-design-system",
    importName: "AdvancedTableColumn",
};

export function registerAdvancedTableColumn(
    loader?: Registerable,
    customAdvancedTableColumnMeta?: CodeComponentMeta<AdvancedTableColumnProps>
) {
    const doRegisterComponent: typeof registerComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(AdvancedTableColumn, customAdvancedTableColumnMeta ?? advancedTableColumnMeta);
}
