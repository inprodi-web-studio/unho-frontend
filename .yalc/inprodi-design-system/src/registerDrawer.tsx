import React from "react";
import registerComponent, {
    CodeComponentMeta,
} from "@plasmicapp/host/registerComponent";
import { Drawer as AntdDrawer, theme } from "antd";
import type { DrawerProps as AntdDrawerProps } from "antd/es/drawer";

import { Registerable } from "./registerable";
import { Icon } from "./registerIcon";

interface DrawerProps extends AntdDrawerProps {
    content: any;
    onOpenChange: any;
    maskColor?: string;
    bodyPadding : string;
}

export const Drawer = ({
    open,
    content,
    maskColor,
    bodyPadding,
    ...props
} : DrawerProps ) => {

    const { token } = theme.useToken();

    return <AntdDrawer
        destroyOnClose
        open={open}
        closeIcon={ <Icon icon="X" variant="regular" /> }
        styles={{
            header : {
                padding : "8px 16px 8px 10px !important",
                borderBottom : `solid 1px ${ token.colorBorder } !important`,
            },
            body : {
                padding : bodyPadding,
            },
            mask : {
                background : maskColor ? maskColor : "#0000004D",
            },
        }}
        {...props}
    >
        { content }
    </AntdDrawer>;
};

export const drawerMeta: CodeComponentMeta<DrawerProps> = {
    name: "Drawer",
    displayName: "Drawer",
    states : {
        open : {
            type : "writable",
            variableType : "boolean",
            valueProp : "open",
            onChangeProp : "onOpenChange",
        },
    },
    props: {
        placement : {
            type : "choice",
            options : ["top", "right", "bottom", "left"],
            defaultValue : "right",
        },
        title : {
            type : "string",
            defaultValue : "Drawer Title",
        },
        open : {
            type : "boolean",
            defaultValue : false,
        },
        width : {
            type : "string",
            defaultValue : "350px",
        },
        height : {
            type : "string",
        },
        bodyPadding : {
            type : "string",
            defaultValue : "16px",
        },
        mask : {
            type : "boolean",
            defaultValue : true,
            advanced : true,
        },
        maskClosable : {
            type : "boolean",
            defaultValue : true,
            advanced : true,
        },
        maskColor : {
            type : "color",
            defaultValue : "#0000004D",
        },
        afterOpenChange : {
            type : "eventHandler",
            argTypes : [],
        },
        onClose : {
            type : "eventHandler",
            argTypes : [],
        },
        onOpenChange : {
            type : "eventHandler",
            argTypes : [],
        },
        content : {
            type : "slot",
        },
        extra : {
            type : "slot",
            hidePlaceholder : true,
        },
        footer : {
            type : "slot",
            hidePlaceholder : true,
        },
    },
    importPath: "inprodi-design-system",
    importName: "Drawer",
};

export function registerDrawer(
    loader?: Registerable,
    customDrawerMeta?: CodeComponentMeta<DrawerProps>
) {
    const doRegisterComponent: typeof registerComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(Drawer, customDrawerMeta ?? drawerMeta);
}