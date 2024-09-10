import React from "react";
import registerComponent, {
    CodeComponentMeta,
} from "@plasmicapp/host/registerComponent";
import { Badge } from "antd";
import type { BadgeProps } from "antd/es/badge";
import { Registerable } from "./registerable";

interface RibbonProps extends BadgeProps {
    content : any;
}

export const Ribbon = ({
    content,
    ...props
} : RibbonProps ) => {

    return <Badge.Ribbon {...props}>
        {content}
    </Badge.Ribbon>;
};

export const ribbonMeta: CodeComponentMeta<RibbonProps> = {
    name: "Ribbon",
    displayName: "Ribbon",
    props: {
        text: {
            type: "string",
        },
        color: {
            type: "color",
        },
        placement: {
            type: "choice",
            options: ["start", "end"],
            defaultValue: "end",
        },
        content : {
            type : "slot",
            hidePlaceholder : true,
        },
    },
    importPath: "inprodi-design-system",
    importName: "Ribbon",
};

export function registerRibbon(
    loader?: Registerable,
    customRibbonMeta?: CodeComponentMeta<RibbonProps>
) {
    const doRegisterComponent: typeof registerComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(Ribbon, customRibbonMeta ?? ribbonMeta);
}