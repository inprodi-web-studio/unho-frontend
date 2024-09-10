import React from "react";
import * as Icons from "@phosphor-icons/react/dist/ssr";

export const Icon = ({
    icon,
    size,
    color,
    variant,
}) => {
    const IconComponent = Icons[icon];

    if (!IconComponent) {
        throw new Error(`Invalid icon: ${icon}`);
    }

    return <IconComponent
        size={size}
        color={color}
        weight={variant}
        style={{
            flexShrink : 0,
        }}
    />
};