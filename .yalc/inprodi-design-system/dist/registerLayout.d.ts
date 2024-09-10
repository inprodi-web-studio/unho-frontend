import React from "react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import type { LayoutProps as AntdLayoutProps } from "antd/es/layout";
import { Registerable } from "./registerable";
interface LayoutProps extends AntdLayoutProps {
    content: any;
    menuItems: any;
    selected: any;
    collapsed: boolean;
    headerContent: any;
    backgroundColor: string;
    menuTopSection: any;
    showTrigger: boolean;
    menuBottomSection: any;
    onCollapse: (collapsed: boolean) => void;
    onSelect: any;
    showHeader: boolean;
    defaultSelectedKeys: string[];
}
export declare const Layout: ({ content, onSelect, menuItems, collapsed, onCollapse, showTrigger, showHeader, headerContent, menuTopSection, backgroundColor, menuBottomSection, defaultSelectedKeys, }: LayoutProps) => React.JSX.Element;
export declare const layoutMeta: CodeComponentMeta<LayoutProps>;
export declare function registerLayout(loader?: Registerable, customLayoutMeta?: CodeComponentMeta<LayoutProps>): void;
export {};
