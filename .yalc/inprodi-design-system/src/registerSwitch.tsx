import React from "react";
import registerComponent, {
    CodeComponentMeta,
} from "@plasmicapp/host/registerComponent";
import { Switch as AntdSwitch } from "antd";
import type { SwitchProps as AntdSwitchProps } from "antd/es/switch";
import { Registerable } from "./registerable";
import { Icon } from "./registerIcon";

interface SwitchProps extends AntdSwitchProps {
    value : boolean;
    checkedIcon? : string;
    unCheckedIcon? : string;
}

export const Switch = ({
    checkedIcon,
    unCheckedIcon,
    ...props
} : SwitchProps ) => {

    return <AntdSwitch
        onClick={ (checked, event) => {
            if ( checked ) {
                event.stopPropagation();
            } else {
                event.stopPropagation();
            }
        } }
        checkedChildren={ checkedIcon && <Icon icon={ checkedIcon } variant="regular" />}
        unCheckedChildren={ unCheckedIcon && <Icon icon={ unCheckedIcon } variant="regular" />}
        {...props}
    />
};

export const switchMeta: CodeComponentMeta<SwitchProps> = {
    name: "Switch",
    displayName: "Switch",
    states : {
        value : {
            type : "writable",
            variableType : "boolean",
            valueProp : "value",
            onChangeProp : "onChange",
        },
    },
    props: {
        size : {
            type : "choice",
            options : ["default", "small"],
            defaultValue : "default",
        },
        value : {
            type : "boolean",
            defaultValue : false,
        },
        disabled : {
            type : "boolean",
            defaultValue : false,
        },
        loading : {
            type : "boolean",
            defaultValue : false,
        },
        checkedIcon : {
            type : "string",
        },
        unCheckedIcon : {
            type : "string",
        },
        onChange : {
            type : "eventHandler",
            argTypes : [],
        },
    },
    importPath: "inprodi-design-system",
    importName: "Switch",
};

export function registerSwitch(
    loader?: Registerable,
    customSwitchMeta?: CodeComponentMeta<SwitchProps>
) {
    const doRegisterComponent: typeof registerComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(Switch, customSwitchMeta ?? switchMeta);
}