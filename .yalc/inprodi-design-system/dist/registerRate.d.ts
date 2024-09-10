import React from "react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import type { RateProps as AntdRateProps } from "antd/es/rate";
import { Registerable } from "./registerable";
interface RateProps extends AntdRateProps {
    onValueChange: any;
    value: number;
    icon: string;
}
export declare const Rate: ({ value, onValueChange, className, icon, ...props }: RateProps) => React.JSX.Element;
export declare const rateMeta: CodeComponentMeta<RateProps>;
export declare function registerRate(loader?: Registerable, customRateMeta?: CodeComponentMeta<RateProps>): void;
export {};
