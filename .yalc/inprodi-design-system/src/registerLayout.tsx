import React, { CSSProperties } from "react";
import registerComponent, {
    CodeComponentMeta,
} from "@plasmicapp/host/registerComponent";
import {
    theme,
    Layout as AntdLayout,
    Menu,
} from "antd";
import type { LayoutProps as AntdLayoutProps } from "antd/es/layout";

import { Registerable } from "./registerable";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { Button } from "./registerButton";
import { Icon } from "./registerIcon";

interface LayoutProps extends AntdLayoutProps {
    content: any,
    menuItems: any,
    selected: any,
    collapsed: boolean,
    headerContent: any,
    backgroundColor: string,
    menuTopSection: any,
    showTrigger: boolean,
    menuBottomSection: any,
    onCollapse: (collapsed : boolean) => void,
    onSelect: any,
    showHeader: boolean,
    defaultSelectedKeys: string[],
}

export const Layout = ({
    content,
    onSelect,
    menuItems,
    collapsed,
    onCollapse,
    showTrigger,
    showHeader,
    headerContent,
    menuTopSection,
    backgroundColor,
    menuBottomSection,
    defaultSelectedKeys,
} : LayoutProps ) => {
    const {
        token: {
            colorBorder,
            colorBgLayout,
            colorBgContainer,
        },
    } = theme.useToken();

    const siderStyles : CSSProperties = {
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        background: colorBgLayout,
        borderRight: `solid 1px ${ colorBorder }`,
        zIndex: 5,
    };

    const headerStyles : CSSProperties = {
        borderBottom: `solid 1px ${ colorBorder }`,
        height : "54px",
        minHeight : "54px",
        maxHeight : "54px",
        padding: "0px 20px",
        background: "rgba(255,255,255, 0.70)",
        backdropFilter: "blur(10px)",
        position : "sticky",
        top : 0,
        zIndex: 1,
    };

    const parseMenuItems = () => {
        return menuItems.map((menuItem : any) => {
            if (menuItem.type !== "group") {
                return {
                    ...menuItem,
                    icon: typeof menuItem.icon === 'string' 
                          ? <Icon size={20} icon={menuItem.icon} variant="duotone" />
                          : menuItem.icon
                };
            } else {
                return {
                    ...menuItem,
                    children: menuItem.children.map((child : any) => ({
                        ...child,
                        icon: typeof child.icon === 'string' 
                              ? <Icon size={20} icon={child.icon} variant="duotone" />
                              : child.icon
                    }))
                };
            }
        });
    }; 

    return (
        <AntdLayout hasSider style={{ minHeight : "100vh" }}>
            <AntdLayout.Sider
                collapsible
                width={275}
                theme="light"
                trigger={null}
                collapsedWidth={80}
                style={siderStyles}
                collapsed={collapsed}
                onCollapse={(collapsed) => onCollapse(collapsed)}
            >
                { showTrigger && (
                    <Button
                        label=""
                        size="small"
                        type="default"
                        isSubmit={false}
                        loading={false}
                        onClick={() => onCollapse(!collapsed)}
                        style={{
                            position : "absolute",
                            top : "42px",
                            right : "-16px",
                            height: "20px",
                            width : "20px",
                        }}
                        icon={ collapsed ? <CaretRight size={14} /> : <CaretLeft size={14} />}
                    />
                )}

                { menuTopSection && (
                    <div style={{
                        padding : "8px"
                    }}>
                        {menuTopSection}
                    </div>
                )}

                <Menu
                    theme="light"
                    mode="inline"
                    items={parseMenuItems()}
                    onSelect={(data) => onSelect( data.key )}
                    defaultSelectedKeys={defaultSelectedKeys}
                    style={{
                        borderInlineEnd : "none",
                        background: "transparent",
                    }}
                />

                { menuBottomSection && (
                    <div style={{
                        padding : "10px",
                        background : "rgba(0,0,0, 0.05)",
                        borderTop : `solid 1px ${ colorBorder }`,
                        position : "absolute",
                        width : "100%",
                        bottom : 0,
                    }}>
                        {menuBottomSection}
                    </div>
                )}
            </AntdLayout.Sider>

            <AntdLayout
                style={{
                    marginLeft : collapsed ? "80px" : "275px",
                    maxHeight : "100vh",
                    overflow : "auto",
                    background: backgroundColor,
                }}
            >

                { showHeader && (
                    <AntdLayout.Header
                        style={headerStyles}
                    >
                        <div style={{ minWidth: "100%", display: "flex", alignItems: "center", height : "100%" }}>
                            {headerContent}
                        </div>
                    </AntdLayout.Header>
                )}

                <AntdLayout.Content
                    style={{
                        background: colorBgContainer,
                    }}
                >
                    {content}
                </AntdLayout.Content>
            </AntdLayout>
        </AntdLayout>
    );
};

export const layoutMeta: CodeComponentMeta<LayoutProps> = {
    name: "Layout",
    displayName: "Layout",
    states : {
        collapsed : {
            type : "writable",
            variableType : "boolean",
            valueProp : "collapsed",
            onChangeProp : "onCollapse",
        },
        selected : {
            type : "writable",
            variableType : "text",
            valueProp : "selected",
            onChangeProp : "onSelect",
        },
    },
    props: {
        collapsed : {
            type : "boolean",
            description : "Set the collapsed state of layout",
            defaultValue : false,
        },
        menuItems : {
            type : "array",
            description : "Set the menu items of layout",
            defaultValue : [
                {
                    key : "1",
                    label : "Menu Item 1",
                    icon : "Circle",
                },
            ],
        },
        backgroundColor : {
            type : "color",
            description : "Set the background color of layout",
            defaultValue : "#F5F5F5",
            keepCssVar : true,
        },
        defaultSelectedKeys : {
            type : "array",
            description : "Set the default selected keys of layout",
        },
        headerContent : {
            type : "slot",
            description : "Set the header content of layout",
        },
        menuTopSection : {
            type : "slot",
            description : "Set the top menu section of layout",
            hidePlaceholder : true,
        },
        menuBottomSection : {
            type : "slot",
            description : "Set the bottom menu section of layout",
            hidePlaceholder : true,
        },
        showTrigger : {
            type : "boolean",
            description : "Show the collapse trigger",
            defaultValue : true,
        },
        showHeader : {
            type : "boolean",
            description : "Show the header of layout",
            defaultValue : true,
        },
        selected : {
            type : "string",
            advanced : true,
        },
        content : {
            type : "slot",
            description : "Set the content of layout",
        },
        onCollapse : {
            type : "eventHandler",
            description : "Event handler for layout collapse",
            argTypes : [
                {name : "collapsed", type : "boolean"},
            ],
        },
        onSelect : {
            type : "eventHandler",
            description : "Event handler for layout select",
            argTypes : [],
        },
    },
    importPath: "inprodi-design-system",
    importName: "Layout",
};

export function registerLayout(
    loader?: Registerable,
    customLayoutMeta?: CodeComponentMeta<LayoutProps>
) {
    const doRegisterComponent: typeof registerComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(Layout, customLayoutMeta ?? layoutMeta);
}