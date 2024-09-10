import React from "react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import type { TimePickerProps as AntdTimePickerProps } from "antd/es/time-picker";
import { Registerable } from "./registerable";
import "dayjs/locale/es-mx";
interface TimePickerProps extends AntdTimePickerProps {
    error?: string | null | undefined;
    value: any;
    onChange: any;
    format: string;
}
export declare const TimePicker: ({ size, value, error, format, onChange, ...props }: TimePickerProps) => React.JSX.Element;
export declare const timePickerMeta: CodeComponentMeta<TimePickerProps>;
export declare function registerTimePicker(loader?: Registerable, customTimePickerMeta?: CodeComponentMeta<TimePickerProps>): void;
export {};
