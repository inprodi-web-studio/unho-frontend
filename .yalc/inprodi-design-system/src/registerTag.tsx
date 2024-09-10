import React from "react";
import registerComponent, {
    CodeComponentMeta,
} from "@plasmicapp/host/registerComponent";
import { Tag as AntdTag } from "antd";
import type { TagProps as AntdTagProps } from "antd/es/tag";

import { Registerable } from "./registerable";

interface TagProps extends AntdTagProps {
    closable?: boolean;
    label : string;
}

export const Tag = ({
    label,
    closable,
    ...props
} : TagProps ) => {

    return <AntdTag
        closeIcon={ closable }
        style={{
            display : "flex",
            alignItems : "center",
            gap : "6px",
        }}
        {...props}        
    >
        {label}
    </AntdTag>;
};

export const tagMeta: CodeComponentMeta<TagProps> = {
    name: "Tag",
    displayName: "Tag",
    props: {
        label : {
            type : "string",
            defaultValue : "Tag Label",
            description : "The label of the tag",
        },
        color : {
            type : "color",
            defaultValue : "blue",
        },
        bordered : {
            type : "boolean",
            defaultValue : true,
        },
        closable : {
            type : "boolean",
            defaultValue : false,
        },
        icon : {
            type : "slot",
            defaultValue : {
                type : "component",
                name : "Icon",
            },
            allowedComponents : ["Icon"],
            hidePlaceholder : true,
        },
    },
    importPath: "inprodi-design-system",
    importName: "Tag",
};

export function registerTag(
    loader?: Registerable,
    customTagmeta?: CodeComponentMeta<TagProps>
) {
    const doRegisterComponent: typeof registerComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(Tag, customTagmeta ?? tagMeta);
}