import React from "react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import { Registerable } from "./registerable";
interface AvatarProps {
    variant: "filled" | "light";
    color: string;
    type: "image" | "text" | "icon";
    isCircular?: boolean;
    size: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    bordered?: boolean;
    content: string;
    className?: string;
}
export declare const Avatar: ({ size, type, color, variant, content, bordered, className, isCircular, }: AvatarProps) => React.JSX.Element;
export declare const avatarMeta: CodeComponentMeta<AvatarProps>;
export declare function registerAvatar(loader?: Registerable, customAvatarMeta?: CodeComponentMeta<AvatarProps>): void;
export {};
