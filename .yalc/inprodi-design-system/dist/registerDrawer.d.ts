import React from "react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import type { DrawerProps as AntdDrawerProps } from "antd/es/drawer";
import { Registerable } from "./registerable";
interface DrawerProps extends AntdDrawerProps {
    content: any;
    onOpenChange: any;
    maskColor?: string;
    bodyPadding: string;
}
export declare const Drawer: ({ open, content, maskColor, bodyPadding, ...props }: DrawerProps) => React.JSX.Element;
export declare const drawerMeta: CodeComponentMeta<DrawerProps>;
export declare function registerDrawer(loader?: Registerable, customDrawerMeta?: CodeComponentMeta<DrawerProps>): void;
export {};
