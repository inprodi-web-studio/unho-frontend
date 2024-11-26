import React from "react";
import registerComponent from "@plasmicapp/host/registerComponent";
import { DatePicker as AntdDatePicker } from "antd";

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

const daysMap = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
};

export const LimitedDatePicker = ({
    error,
    value,
    minDate,
    activeWeekDay,
    size,
    maxDate,
    onChange,
    allowedDates,
    ...props
}) => {

    const disabledDayNumber = daysMap[activeWeekDay] ? daysMap[activeWeekDay] : undefined;

    const disabledDate = (current) => {
        if (!allowedDates) return false;
        return !allowedDates.some(date => dayjs(date).isSame(current, 'day'));
    };

    return (
        <AntdDatePicker
            {...props}
            showNow={false}
            format="MMMM D, YYYY"
            minDate={ minDate ? dayjs( minDate ) : undefined }
            disabledDate={ (current) => {
                return current && disabledDayNumber !== current.day() || disabledDate(current);
            }}
            style={{
                height: size === "small" ? "30px" : size === "middle" ? "38px" : "46px",
            }}
            maxDate={ maxDate ? dayjs( maxDate ) : undefined }
            value={ value ? dayjs( value ) : undefined }
            status={error ? "error" : undefined}
            onChange={(date) => {
                onChange( date?.format("YYYY-MM-DD") );
            }}
        />
    );
};

export const datePickerMeta = {
    name: "LimitedDatePicker",
    displayName: "Limited Date Picker",
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
        minDate: {
            type: "string",
        },
        allowClear: {
            type: "boolean",
            defaultValue: false,
        },
        maxDate: {
            type: "string",
        },
        activeWeekDay : {
            type : "string",
        },
        picker: {
            type: "choice",
            options: ["date", "week", "month", "quarter", "year"],
            defaultValue: "date",
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
        error: {
            type: "string",
        },
        showTime: {
            type: "boolean",
            defaultValue: false,
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
        allowedDates: {
            type: "array",
            defaultValue: [],
            description: "Array of dates to be enabled in the date picker",
        },
    },
    importPath: "inprodi-design-system",
    importName: "LimitedDatePicker",
};

export function registerLimitedDatePicker(
    loader,
    customDatePickerMeta
) {
    const doRegisterComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(LimitedDatePicker, customDatePickerMeta ?? datePickerMeta);
}