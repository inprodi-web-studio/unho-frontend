import React from "react";
import registerComponent, {
    CodeComponentMeta,
} from "@plasmicapp/host/registerComponent";
import { TimePicker as AntdTimePicker } from "antd";
import type { TimePickerProps as AntdTimePickerProps } from "antd/es/time-picker";
import { Registerable } from "./registerable";

import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
import localeData from "dayjs/plugin/localeData";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";
import weekYear from "dayjs/plugin/weekYear";

import "dayjs/locale/es-mx";

dayjs.extend(customParseFormat)
dayjs.extend(advancedFormat)
dayjs.extend(weekday)
dayjs.extend(localeData)
dayjs.extend(weekOfYear)
dayjs.extend(weekYear)

dayjs.locale("es-mx");

interface TimePickerProps extends AntdTimePickerProps {
    error?: string | null | undefined;
    value: any;
    onChange : any;
    format: string;
}

export const TimePicker = ({
    size,
    value,
    error,
    format,
    onChange,
    ...props
} : TimePickerProps ) => {

    return (
        <AntdTimePicker
            {...props}
            style={{
                height: size === "small" ? "30px" : size === "middle" ? "38px" : "46px",
            }}
            showNow={false}
            format={ format }
            value={ value ? dayjs(value, format) : undefined }
            status={error ? "error" : undefined}
            onChange={(time) => {
                onChange( time?.format(format) );
            }}
        />
    );
};

export const timePickerMeta: CodeComponentMeta<TimePickerProps> = {
    name: "TimePicker",
    displayName: "Time Picker",
    states : {
        value : {
            type : "writable",
            variableType : "text",
            valueProp : "value",
            onChangeProp : "onChange",
        },
    },
    props: {
        value: {
            type: "string",
        },
        disabled: {
            type: "boolean",
            defaultValue: false,
        },
        allowClear: {
            type: "boolean",
            defaultValue: false,
        },
        placeholder: {
            type: "string",
            defaultValue: "Seleccionar...",
        },
        size: {
            type: "choice",
            options: ["small", "middle", "large"],
            defaultValue: "middle",
        },
        hourStep : {
            type: "number",
            defaultValue: 1,
        },
        minuteStep : {
            type: "number",
            defaultValue: 1,
        },
        format : {
            type: "string",
            defaultValue: "HH:mm:ss",
        },
        use12Hours : {
            type: "boolean",
            defaultValue: false,
        },
        secondStep : {
            type: "number",
            defaultValue: 1,
        },
        error: {
            type: "string",
        },
        variant: {
            type: "choice",
            options: ["outlined", "borderless", "filled"],
            defaultValue: "outlined",
        },
        onChange : {
            type: "eventHandler",
            argTypes : [],
        },
    },
    importPath: "inprodi-design-system",
    importName: "DatePicker",
};

export function registerTimePicker(
    loader?: Registerable,
    customTimePickerMeta?: CodeComponentMeta<TimePickerProps>
) {
    const doRegisterComponent: typeof registerComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(TimePicker, customTimePickerMeta ?? timePickerMeta);
}