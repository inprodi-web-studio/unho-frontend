import React from "react";
import registerComponent, {
    CodeComponentMeta,
} from "@plasmicapp/host/registerComponent";
import { Modal, theme } from "antd";
import type { ModalProps } from "antd/es/modal";

import { Registerable } from "./registerable";
import { Icon } from "./registerIcon";
import { Skeleton } from "./registerSkeleton";

interface ConfirmationProps extends ModalProps {
    loading?: boolean;
    content : any;
    type : "info" | "danger" | "warning";
    description: string;
    bodyLoading?: boolean;
}

const iconDictionary = {
    info : "Info",
    danger : "WarningOctagon",
    warning : "Warning",
};

export const Confirmation = ({
    type,
    title,
    loading,
    content,
    bodyLoading,
    description,
    ...props
} : ConfirmationProps ) => {

    const { token } = theme.useToken();

    const containerStyle : React.CSSProperties = {
        display : "flex",
        flexDirection : "row",
        width : "calc( 100% - 40px )",
        gap : "20px",
    };

    const iconStyles : React.CSSProperties = {
        backgroundColor : type === "danger" ? token.colorErrorBg : type === "warning" ? token.colorWarningBg : token.colorInfoBg,
        color : type === "danger" ? token.colorError : type === "warning" ? token.colorWarning : token.colorInfo,
        borderRadius : "50%",
        width : "40px",
        minWidth : "40px",
        height : "40px",
        minHeight : "40px",
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
    };

    return <Modal
        centered
        destroyOnClose
        width="500px"
        closable={false}
        cancelText="Cancelar"
        confirmLoading={ loading }
        className="confirmation-modal"
        footer={ bodyLoading ? null : undefined }
        okButtonProps={{
            danger : type === "danger",
        }}
        styles={{
            header : {
                display : "none",
            },
        }}
        {...props}
    >
        <div className="confirmation-content" style={ containerStyle }>
            { !bodyLoading ? (
                <>
                    <div className="icon-container" style={ iconStyles }>
                        <Icon icon={ iconDictionary[type] } size={20} variant="duotone" />
                    </div>
        
                    <div className="text-container" style={{ width : "100%" }}>
                        <h3 style={{ fontSize : "16px", color : "black", fontWeight : 500, margin : 0 }}>{ title }</h3>
        
                        <p style={{ color : "#868E96", fontSize : "14px", fontWeight : 400, margin : 0 }}>{ description }</p>
                    </div>
                </>
            ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
                    <Skeleton
                        width="100%"
                        count={ 1 }
                        height="30px"
                        />
                    <Skeleton
                        width="100%"
                        count={ 1 }
                        height="30px"
                        />
                    <Skeleton
                        width="100%"
                        count={ 1 }
                        height="30px"
                    />
                </div>
            )}
        </div>
    </Modal>;
};

export const confirmationMeta: CodeComponentMeta<ConfirmationProps> = {
    name: "Confirmation",
    displayName: "Confirmation",
    props: {
        title : {
            type : "string",
            defaultValue : "Confirmation Title",
        },
        description : {
            type : "string",
            defaultValue : "Confirmation Description",
        },
        type : {
            type : "choice",
            options : ["info", "danger", "warning"],
            defaultValue : "danger",
        },
        open : {
            type : "boolean",
            defaultValue : false,
        },
        okText : {
            type : "string",
            defaultValue : "Confirmar",
        },
        bodyLoading : {
            type : "boolean",
            defaultValue : false,
        },
        loading : {
            type : "boolean",
            defaultValue : false,
        },
        content : {
            type : "slot",
        },
        onCancel : {
            type : "eventHandler",
            argTypes : [],
        },
        onOk : {
            type : "eventHandler",
            argTypes : [],
        },
        afterOpenChange : {
            type : "eventHandler",
            argTypes : [],
        },
        afterClose : {
            type : "eventHandler",
            argTypes : [],
        },
    },
    importPath: "inprodi-design-system",
    importName: "Confirmation",
};

export function registerConfirmation(
    loader?: Registerable,
    customConfirmationMeta?: CodeComponentMeta<ConfirmationProps>
) {
    const doRegisterComponent: typeof registerComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(Confirmation, customConfirmationMeta ?? confirmationMeta);
}