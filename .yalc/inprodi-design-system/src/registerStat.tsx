import React from "react";
import registerComponent, { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import { Registerable } from "./registerable";
import CountUp from "react-countup";
import { Tag } from "./registerTag";
import { Icon } from "./registerIcon";
import { Skeleton } from "./registerSkeleton";
import { theme } from "antd";

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

export const Stat = ({
    icon,
    title,
    value = 0,
    delay,
    prefix,
    suffix,
    loading,
    duration,
    className,
    precision,
    comparison,
    comparisonLabel,
    isComparisonCurrency,
} : StatProps ) => {
    const { token } = theme.useToken();

    const containerStyles: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        padding: "18px",
        borderRadius: "6px",
        background: token.colorBgContainer,
        border : `solid 1px ${token.colorBorder}`,
        boxShadow : "rgba(0, 0, 0, 0.04) 0px 1px 3px 0px, rgba(0, 0, 0, 0.01) 0px 1px 2px 0px",
    };

    const headerStyles : React.CSSProperties = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width : "100%",
        gap : "14px",
    };

    const titleStyles : React.CSSProperties = {
        color: "black",
        fontSize: "14px",
        fontWeight: "500",
        lineHeight: "20px",
    };

    const numberStyle : React.CSSProperties = {
        color: "black",
        fontSize: "24px",
        fontWeight: "600",
        lineHeight: "32px",
    };

    const valueStyle : React.CSSProperties = {
        display : "flex",
        flexDirection : "row",
        alignItems : "flex-end",
        columnGap : "2px",
        marginTop: "8px",
    };

    const prefixStyle : React.CSSProperties = {
        color: "black",
        fontSize : "14px",
        fontWeight : "500",
        lineHeight : "20px",
        paddingBottom : "4px",
    };

    const suffixStyle : React.CSSProperties = {
        color: token.colorTextSecondary,
        fontSize : "14px",
        fontWeight : "500",
        lineHeight : "20px",
        paddingBottom : "4px",
    };

    const comparisonStyle : React.CSSProperties = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width : "100%",
        gap : "6px",
        marginTop: "4px",
    };

    const formatCurrency = (value: string) => {
        return new Intl.NumberFormat("es-MX", {
            style: "currency",
            currency: "MXN",
        }).format(Number(value));
    };

    return (
        <div className={`stat-inprodi ${className}`} style={containerStyles}>
                <div className="header" style={headerStyles}>
                    { loading ?
                        <Skeleton count={1} width="60%" height="20px" /> : (
                            <>
                                <p className="stat_title" style={titleStyles}>{title}</p>
                                { icon && icon }
                            </>
                    )}
                </div>

                <div className="value" style={valueStyle}>
                    { loading ?
                        <Skeleton count={1} width="25%" height="32px" /> : (
                        <>
                            { prefix && (
                                <span className="prefix" style={prefixStyle}>{prefix}</span>
                            )}

                            <span style={numberStyle}>
                                <CountUp
                                    preserveValue
                                    decimal="."
                                    decimals={precision}
                                    delay={delay}
                                    duration={duration}
                                    start={0}
                                    separator=","
                                    end={value}
                                />
                            </span>

                            { suffix && <span className="suffix" style={suffixStyle}>{suffix}</span> }
                        </>
                    )}
                </div>

                { (comparison || comparison == 0) && (
                    <div className="comparison" style={comparisonStyle}>
                        { loading ? <Skeleton count={1} width="80%" height="18px" /> : (
                            <>
                                <Tag
                                    style={{
                                        margin : 0,
                                        lineHeight : "16px",
                                        display : "flex",
                                        alignItems : "center",
                                        gap : "6px",
                                        fontSize : "10px",
                                    }}
                                    bordered={false}
                                    label={ comparison === 0 ? "0" : isComparisonCurrency ? formatCurrency(comparison.toString()) : comparison.toString() }
                                    color={ comparison > 0 ? "green" : comparison < 0 ? "red" : "cyan" }
                                    icon={ comparison > 0
                                        ? <Icon icon="TrendUp" size={12} variant="regular" />
                                        : comparison < 0
                                        ? <Icon icon="TrendDown" size={12} variant="regular" /> 
                                        : <Icon icon="DotOutline" size={12} variant="fill" /> 
                                    }
                                />

                                { comparisonLabel && (
                                    <span
                                        style={{
                                            color : "#868E96",
                                            fontSize : "12px",
                                            fontWeight : 400,
                                            lineHeight : "16px",
                                        }}
                                    >
                                        { comparisonLabel }
                                    </span>
                                )}
                            </>
                        )}
                    </div>
                )}
        </div>
    );
};

export const statMeta: CodeComponentMeta<StatProps> = {
    name: "Stat",
    displayName: "Stat",
    props: {
        title : {
            type : "string",
            defaultValue : "Stat Title",
            description : "The title of the stat",
        },
        value : {
            type : "number",
            defaultValue : 0,
            description : "The value of the stat",
        },
        precision : {
            type : "number",
            defaultValue : 2,
            description : "The number of decimals of the stat value",
        },
        prefix : {
            type : "string",
            description : "The prefix of the stat",
        },
        suffix : {
            type : "string",
            description : "The suffix of the stat",
        },
        comparison : {
            type : "number",
            description : "The comparison of the stat",
        },
        comparisonLabel : {
            type : "string",
            description : "The comparison label of the stat",
            hidden : (props) => !props.comparison && props.comparison !== 0,
        },
        isComparisonCurrency : {
            type : "boolean",
            defaultValue : false,
            description : "The comparison label of the stat is currency",
            hidden : (props) => !props.comparison && props.comparison !== 0,
        },
        loading : {
            type : "boolean",
            defaultValue : false,
            description : "The loading state of the stat",
        },
        duration : {
            type : "number",
            defaultValue : 2,
            description : "The duration of the stat",
            advanced : true,
        },
        delay : {
            type : "number",
            defaultValue : 0,
            description : "The delay of the stat",
            advanced : true,
        },
        icon : {
            type : "slot",
            description : "The icon of the stat",
            defaultValue : [
                {
                    type : "component",
                    name : "Icon",
                },
            ],
            allowedComponents : ["Icon"],
        },
    },
    importPath: "inprodi-design-system",
    importName: "Stat",
};

export function registerStat(
    loader?: Registerable,
    customRegisterMeta?: CodeComponentMeta<StatProps>
) {
    const doRegisterComponent: typeof registerComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(Stat, customRegisterMeta ?? statMeta);
}