import React, { forwardRef } from "react";
import registerComponent, { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import { Registerable } from "./registerable";
import { PanelGroup } from "react-resizable-panels";
import { HoverProvider } from "./contexts/hoveredCell";
import { Pagination, theme } from "antd";
import { Button } from "./registerButton";
import { Icon } from "./registerIcon";

interface AdvancedTableProps {
    content: any;
    onPaginationChange : any;
    name: string;
    currentPage: number;
    pagination?: {
        page : number;
        pageSize : number;
        pageCount : number;
        total : number;
    };
    className?: string;
}

const AdvancedTable = forwardRef<any, AdvancedTableProps>(({
    name,
    content,
    className,
    pagination,
    currentPage,
    onPaginationChange,
}, ref ) => {

    const { token } = theme.useToken();

    const footerStyles : React.CSSProperties = {
        display: "flex",
        position: "absolute",
        alignItems : "center",
        padding : "0 20px",
        justifyContent: "space-between",
        width: "100%",
        height: "42px",
        borderBottom : `solid 1px ${ token.colorBorder }`,
        background : token.colorBgLayout,
    };

    return (
        <HoverProvider>
            <div ref={ref} className="wrapper" style={{ width: "100%", maxWidth: "100%", overflowX: "auto" }}>
                <PanelGroup
                    className={className}
                    autoSaveId={name}
                    direction="horizontal"
                    style={{ minWidth: "fit-content" }}
                >
                    {content}
                </PanelGroup>

                { pagination && (
                    <div className="footer" style={footerStyles}>
                        <Button
                            size="small"
                            type="default"
                            onClick={ () => onPaginationChange( currentPage - 1 ) }
                            icon={
                                <Icon
                                    size={16}
                                    icon="CaretLeft"
                                    variant="regular"
                                />
                            }
                            disabled={ currentPage === 1 }
                        />

                        <Pagination
                            size="small"
                            showSizeChanger={false}
                            current={ currentPage }
                            total={ pagination.total }
                            pageSize={ pagination.pageSize }
                            onChange={ page => onPaginationChange(page) }
                        />

                        <Button
                            size="small"
                            type="default"
                            onClick={ () => onPaginationChange( currentPage + 1 ) }
                            icon={
                                <Icon
                                    size={16}
                                    icon="CaretRight"
                                    variant="regular"
                                />
                            }
                            disabled={ currentPage === pagination.pageCount }
                        />
                    </div>
                )}
            </div>
        </HoverProvider>
    );
});

export const advancedTableMeta: CodeComponentMeta<AdvancedTableProps> = {
    name: "AdvancedTable",
    displayName: "Advanced Table",
    states : {
        currentPage : {
            type : "writable",
            variableType : "number",
            valueProp : "currentPage",
            onChangeProp : "onPaginationChange",
        },
    },
    props: {
        name: {
            type: "string",
        },
        pagination : {
            type : "object",
            description : "Pagination object",
        },
        currentPage : {
            type : "number",
            defaultValue : 1,
        },
        content: {
            type: "slot",
            allowedComponents: ["AdvancedTableColumn"],
        },
        onPaginationChange : {
            type : "eventHandler",
            argTypes : [],
        },
    },
    importPath: "inprodi-design-system",
    importName: "AdvancedTable",
};

export function registerAdvancedTable(
    loader?: Registerable,
    customAdvancedTableMeta?: CodeComponentMeta<AdvancedTableProps>
) {
    const doRegisterComponent: typeof registerComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(AdvancedTable, customAdvancedTableMeta ?? advancedTableMeta);
}

export default AdvancedTable;