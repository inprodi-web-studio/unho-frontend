import React from "react";
import registerComponent, {
    CodeComponentMeta,
} from "@plasmicapp/host/registerComponent";
import { Modal as AntdModal, theme } from "antd";
import type { ModalProps as AntdModalProps } from "antd/es/modal";

import { Registerable } from "./registerable";
import { Icon } from "./registerIcon";

interface ModalProps extends AntdModalProps {
    content: any;
    onOpenChange: any;
    bodyPadding : string,
    showFooter?: boolean,
    showCloseButton?: boolean,
}

export const Modal = ({
    open,
    content,
    bodyPadding,
    showFooter,
    showCloseButton,
    ...props
} : ModalProps ) => {

    const { token } = theme.useToken();

    return <AntdModal
        centered
        closable
        destroyOnClose
        getContainer={false}
        open={open}
        footer={ showFooter ? undefined : null }
        closeIcon={ showCloseButton ? <Icon icon="X" variant="regular" /> : false }
        styles={{
            header : {
                padding : "8px 16px 8px 10px !important",
                borderBottom : `solid 1px ${ token.colorBorder } !important`,
                margin : "0 !important",
            },
            body : {
                padding : bodyPadding,
            },
            content : {
                padding : "0 !important",
            },
            mask : {
                background : "#0000004D",
            },
            footer : {
                margin : "0 !important",
                padding : "10px 16px !important",
                borderTop : `solid 1px ${ token.colorBorder } !important`,
            },
        }}
        {...props}
    >
        { content }
    </AntdModal>;
};

export const modalMeta: CodeComponentMeta<ModalProps> = {
    name: "Modal",
    displayName: "Modal",
    states : {
        open : {
            type : "writable",
            variableType : "boolean",
            valueProp : "open",
            onChangeProp : "onOpenChange",
        },
    },
    props: {
        title : {
            type : "string",
            defaultValue : "Modal Title",
        },
        okText : {
            type : "string",
            defaultValue : "Aceptar",
        },
        cancelText : {
            type : "string",
            defaultValue : "Cancelar",
        },
        showFooter : {
            type : "boolean",
            defaultValue : true,
        },
        showCloseButton : {
            type : "boolean",
            defaultValue : true,
        },
        open : {
            type : "boolean",
            defaultValue : false,
        },
        width : {
            type : "string",
            defaultValue : "350px",
        },
        bodyPadding : {
            type : "string",
            defaultValue : "16px",
        },
        confirmLoading : {
            type : "boolean",
            defaultValue : false,
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
        afterOpenChange : {
            type : "eventHandler",
            argTypes : [],
        },
        onOk : {
            type : "eventHandler",
            argTypes : [],
        },
        onCancel : {
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
    },
    importPath: "inprodi-design-system",
    importName: "Modal",
};

export function registerModal(
    loader?: Registerable,
    customModalMeta?: CodeComponentMeta<ModalProps>
) {
    const doRegisterComponent: typeof registerComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(Modal, customModalMeta ?? modalMeta);
}