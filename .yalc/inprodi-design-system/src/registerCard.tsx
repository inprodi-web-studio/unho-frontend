import React from "react";
import registerComponent, {
    CodeComponentMeta,
} from "@plasmicapp/host/registerComponent";
import { Card as AntdCard } from "antd";
import type { CardProps as AntdCardProps } from "antd/es/card";
import { Registerable } from "./registerable";

interface CardProps extends AntdCardProps {
    isLoading : boolean;
    padding: string;
    shadow: "none" | "sm" | "md" | "lg";
    content: any;
}

const shadowDictionary = {
    none: "none",
    sm: "rgba(0, 0, 0, 0.04) 0px 1px 3px 0px, rgba(0, 0, 0, 0.01) 0px 1px 2px 0px",
    md: "rgba(0, 0, 0, 0.04) 0px 1px 3px, rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 5px 5px -5px",
    lg: "rgba(0, 0, 0, 0.04) 0px 1px 3px, rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
};

export const Card = ({
    shadow,
    content,
    padding,
    isLoading,
    ...props
} : CardProps ) => {
    return <AntdCard
        bordered
        loading={isLoading}
        className="inprodi-card"
        style={{
            boxShadow : shadowDictionary[shadow],
            padding : padding,
            borderRadius : "6px",
        }}
        styles={{
            body : {
                padding : "0px",
                height : "100%",
            },
        }}
        {...props}
    >
        {content}
    </AntdCard>;
};

export const cardMeta: CodeComponentMeta<CardProps> = {
    name: "Card",
    displayName: "Card",
    props: {
        isLoading : {
            type : "boolean",
            description : "Set the loading state of card",
            defaultValue : false,
        },
        padding: {
            type : "string",
            description : "Set the padding of card",
            defaultValue : "16px",
        },
        shadow : {
            type : "choice",
            options : [ "none", "sm", "md", "lg"],
            description : "Set the shadow of card",
            defaultValue : "none",
        },
        content : {
            type : "slot",
            description : "Set the content of card",
        },
    },
    importPath: "inprodi-design-system",
    importName: "Card",
};

export function registerCard(
    loader?: Registerable,
    customCardMeta?: CodeComponentMeta<CardProps>
) {
    const doRegisterComponent: typeof registerComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(Card, customCardMeta ?? cardMeta);
}