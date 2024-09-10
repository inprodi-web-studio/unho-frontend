import React from "react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import type { DatePickerProps as AntdDatePickerProps } from "antd/es/date-picker";
import { Registerable } from "./registerable";
import "dayjs/locale/es-mx";
interface DatePickerProps extends AntdDatePickerProps {
    error?: string | null | undefined;
    value: any;
    onChange: any;
}
export declare const DatePicker: ({ size, error, value, minDate, maxDate, onChange, ...props }: DatePickerProps) => React.JSX.Element;
export declare const datePickerMeta: CodeComponentMeta<DatePickerProps>;
export declare function registerDatePicker(loader?: Registerable, customDatePickerMeta?: CodeComponentMeta<DatePickerProps>): void;
export {};
