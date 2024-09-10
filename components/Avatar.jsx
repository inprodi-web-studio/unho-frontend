import React from "react";
import { Image } from "antd";
import { Icon } from "./Icon";

const sizeDictionary = {
    xxs : "16px",
    xs  : "24px",
    sm  : "32px",
    md  : "40px",
    lg  : "48px",
    xl  : "56px",
    xxl : "80px",
};

const iconSizeDictionary = {
    xxs : 8,
    xs : 12,
    sm : 16,
    md : 22,
    lg : 26,
    xl : 30,
    xxl : 38,
};

const fontSizeDictionary = {
    xxs : 7,
    xs : 10,
    sm : 14,
    md : 16,
    lg : 18,
    xl : 20,
    xxl : 26,
};

export const Avatar = ({
    size,
    type,
    color,
    variant,
    content,
    bordered,
    className,
    isCircular,
}) => {

    const borderWidth = size === "xxs" ? "1px" : "2px";

    const avatarStyles = {
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
    
    const avatarInnerStyles = {
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