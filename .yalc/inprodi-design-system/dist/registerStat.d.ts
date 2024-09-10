import React from "react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import { Registerable } from "./registerable";
interface StatProps {
    className?: string;
    title: string;
    icon: any;
    value: number;
    prefix?: string;
    suffix?: string;
    delay: number;
    duration: number;
    comparison?: number;
    comparisonLabel?: string;
    loading?: boolean;
    isComparisonCurrency?: boolean;
    precision?: number;
}
export declare const Stat: ({ icon, title, value, delay, prefix, suffix, loading, duration, className, precision, comparison, comparisonLabel, isComparisonCurrency, }: StatProps) => React.JSX.Element;
export declare const statMeta: CodeComponentMeta<StatProps>;
export declare function registerStat(loader?: Registerable, customRegisterMeta?: CodeComponentMeta<StatProps>): void;
export {};
