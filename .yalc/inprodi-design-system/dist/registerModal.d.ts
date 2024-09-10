import React from "react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import type { ModalProps as AntdModalProps } from "antd/es/modal";
import { Registerable } from "./registerable";
interface ModalProps extends AntdModalProps {
    content: any;
    onOpenChange: any;
    bodyPadding: string;
    showFooter?: boolean;
    showCloseButton?: boolean;
}
export declare const Modal: ({ open, content, bodyPadding, showFooter, showCloseButton, ...props }: ModalProps) => React.JSX.Element;
export declare const modalMeta: CodeComponentMeta<ModalProps>;
export declare function registerModal(loader?: Registerable, customModalMeta?: CodeComponentMeta<ModalProps>): void;
export {};
