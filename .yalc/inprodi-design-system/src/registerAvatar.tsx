import React from "react";
import registerComponent, {
    CodeComponentMeta,
} from "@plasmicapp/host/registerComponent";

import { Registerable } from "./registerable";
import { Image } from "antd";
import { Icon } from "./registerIcon";

interface AvatarProps {
    variant : "filled" | "light";
    color: string;
    type: "image" | "text" | "icon";
    isCircular?: boolean;
    size: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    bordered?: boolean;
    content: string;
    className?: string;
}

const sizeDictionary = {
    xxs : "20px",
    xs  : "24px",
    sm  : "32px",
    md  : "40px",
    lg  : "48px",
    xl  : "56px",
    xxl : "80px",
} as any;

const iconSizeDictionary = {
    xxs : 10,
    xs : 12,
    sm : 16,
    md : 22,
    lg : 26,
    xl : 30,
    xxl : 38,
} as any;

const fontSizeDictionary = {
    xxs : 9,
    xs : 10,
    sm : 14,
    md : 16,
    lg : 18,
    xl : 20,
    xxl : 26,
} as any;

export const Avatar = ({
    size,
    type,
    color,
    variant,
    content,
    bordered,
    className,
    isCircular,
} : AvatarProps ) => {

    const borderWidth = size === "xxs" ? "1px" : "2px";

    const avatarStyles : React.CSSProperties = {
        boxSizing : "border-box",
        width: sizeDictionary[size],
        maxWidth: sizeDictionary[size],
        minWidth: sizeDictionary[size],
        height: sizeDictionary[size],
        maxHeight: sizeDictionary[size],
        minHeight: sizeDictionary[size],
        borderRadius: isCircular ? "50%" : "6px",
        border: bordered ? `solid ${ borderWidth } ${ variant === "filled" ? color : `${color}4D` }` : `none`,
        padding: bordered ? (size === "xxs" || size === "xs") ? "1px" : "2px" : "0px",
    };
    
    const avatarInnerStyles : React.CSSProperties = {
        width: "100%",
        height: "100%",
        borderRadius: isCircular ? "50%" : bordered ? "4px" : "6px",
        background : variant === "filled" ? color : `${color}1F`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    return <div className={`avatar-inprodi ${className}`} style={avatarStyles}>
        <div className="avatar-inner" style={avatarInnerStyles}>
            { type === "image" && (
                <Image
                    src={content}
                    width="100%"
                    height="100%"
                    preview={false}
                    alt="avatar-image"
                    style={{
                        objectFit: "cover",
                        verticalAlign: "unset",
                        borderRadius: isCircular ? "50%" : bordered ? "3px" : "6px",
                        background: "white",
                    }}
                />
            )}

            { type === "icon" && (
                <Icon
                    variant="bold"
                    icon={content}
                    size={ iconSizeDictionary[size] }
                    color={ variant === "filled" ? "white" : color }
                />
            )}

            { type === "text" && (
                <p style={{
                    fontSize : fontSizeDictionary[size],
                    color : variant === "filled" ? "white" : color,
                    fontWeight : 500,
                    textTransform : "uppercase",
                }}>
                    { content?.slice(0, 1) }
                </p>
            )}
        </div>
    </div>;
};

export const avatarMeta: CodeComponentMeta<AvatarProps> = {
    name: "Avatar",
    displayName: "Avatar",
    props: {
        color: {
            type: "color",
            keepCssVar: false,
            defaultValue : "#000000",
        },
        variant : {
            type : "choice",
            options : ["filled", "light"],
            defaultValue : "filled",
        },
        type : {
            type : "choice",
            options : ["text", "image", "icon"],
            defaultValue : "text",
        },
        size : {
            type : "choice",
            options : ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"],
            defaultValue : "md",
        },
        isCircular : {
            type : "boolean",
            defaultValue : false,
        },
        bordered : {
            type : "boolean",
            defaultValue : false,
        },
        content : {
            type : "string",
            defaultValue : "Avatar",
        },
    },
    importPath: "inprodi-design-system",
    importName: "Avatar",
};

export function registerAvatar(
    loader?: Registerable,
    customAvatarMeta?: CodeComponentMeta<AvatarProps>
) {
    const doRegisterComponent: typeof registerComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(Avatar, customAvatarMeta ?? avatarMeta);
}