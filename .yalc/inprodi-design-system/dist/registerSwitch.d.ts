import React from "react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import type { SwitchProps as AntdSwitchProps } from "antd/es/switch";
import { Registerable } from "./registerable";
interface SwitchProps extends AntdSwitchProps {
    value: boolean;
    checkedIcon?: string;
    unCheckedIcon?: string;
}
export declare const Switch: ({ checkedIcon, unCheckedIcon, ...props }: SwitchProps) => React.JSX.Element;
export declare const switchMeta: CodeComponentMeta<SwitchProps>;
export declare function registerSwitch(loader?: Registerable, customSwitchMeta?: CodeComponentMeta<SwitchProps>): void;
export {};
