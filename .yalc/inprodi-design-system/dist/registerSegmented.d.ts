import React from "react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import type { SegmentedProps as AntdSegmentedProps } from "antd/es/segmented";
import { Registerable } from "./registerable";
interface SegmentedProps extends AntdSegmentedProps {
    options: Array<{
        label: string;
        value: string;
        icon?: string;
        disabled?: boolean;
    }>;
    onChange: any;
}
export declare const Segmented: ({ options, onChange, ...props }: SegmentedProps) => React.JSX.Element;
export declare const segmentedMeta: CodeComponentMeta<SegmentedProps>;
export declare function registerSegmented(loader?: Registerable, customSegmentedMeta?: CodeComponentMeta<SegmentedProps>): void;
export {};
