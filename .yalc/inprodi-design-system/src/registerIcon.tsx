import React from "react";
import registerComponent, {
    CodeComponentMeta,
} from "@plasmicapp/host/registerComponent";
import * as Icons from "@phosphor-icons/react/dist/ssr";

import { Registerable } from "./registerable";

export interface iconProps {
    color?: string;
    size?: number;
    variant: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
    icon : string;
};

export const Icon = ({
    icon = "CircleDashed",
    size,
    color,
    variant,
}: iconProps) => {
    const IconComponent = Icons[icon as keyof typeof Icons] as React.ComponentType<any>;

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

export const iconMeta: CodeComponentMeta<iconProps> = {
    name: "Icon",
    displayName: "Icon",
    props: {
        icon : {
            type: "string",
            defaultValue: "Smiley",
        },
        color: {
            type: "color",
        },
        size : {
            type: "number",
            defaultValue: 16,
            control : "slider",
            min : 8,
            max : 100,
            step : 1,
        },
        variant : {
            type: "choice",
            options: ["thin", "light", "regular", "bold", "fill", "duotone"],
            defaultValue: "regular",
        },
    },
    importPath: "inprodi-design-system",
    importName: "Icon",
};

export function registerIcon(
    loader?: Registerable,
    customIconMeta?: CodeComponentMeta<iconProps>
) {
    const doRegisterComponent: typeof registerComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(Icon, customIconMeta ?? iconMeta);
}