import React from "react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import type { RangePickerProps as AntdDatePickerProps } from "antd/es/date-picker";
import { Registerable } from "./registerable";
import "dayjs/locale/es-mx";
interface DateRangePickerProps extends AntdDatePickerProps {
    error?: string | null | undefined;
    onChange: any;
}
export declare const DateRangePicker: ({ error, value, minDate, maxDate, onChange, ...props }: DateRangePickerProps) => React.JSX.Element;
export declare const dateRangePickerMeta: CodeComponentMeta<DateRangePickerProps>;
export declare function registerDateRangePicker(loader?: Registerable, customDateRangePickerMeta?: CodeComponentMeta<DateRangePickerProps>): void;
export {};
