import React from "react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import type { ModalProps } from "antd/es/modal";
import { Registerable } from "./registerable";
interface ConfirmationProps extends ModalProps {
    loading?: boolean;
    content: any;
    type: "info" | "danger" | "warning";
    description: string;
    bodyLoading?: boolean;
}
export declare const Confirmation: ({ type, title, loading, content, bodyLoading, description, ...props }: ConfirmationProps) => React.JSX.Element;
export declare const confirmationMeta: CodeComponentMeta<ConfirmationProps>;
export declare function registerConfirmation(loader?: Registerable, customConfirmationMeta?: CodeComponentMeta<ConfirmationProps>): void;
export {};
