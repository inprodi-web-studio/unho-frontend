import React from "react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import type { CardProps as AntdCardProps } from "antd/es/card";
import { Registerable } from "./registerable";
interface CardProps extends AntdCardProps {
    isLoading: boolean;
    padding: string;
    shadow: "none" | "sm" | "md" | "lg";
    content: any;
}
export declare const Card: ({ shadow, content, padding, isLoading, ...props }: CardProps) => React.JSX.Element;
export declare const cardMeta: CodeComponentMeta<CardProps>;
export declare function registerCard(loader?: Registerable, customCardMeta?: CodeComponentMeta<CardProps>): void;
export {};
