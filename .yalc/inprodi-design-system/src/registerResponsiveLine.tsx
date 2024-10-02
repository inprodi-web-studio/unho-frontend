import React from "react";
import { ResponsiveLine as ReactResponsiveLine } from '@nivo/line';

import registerComponent, {
    CodeComponentMeta,
} from "@plasmicapp/host/registerComponent";

import { Registerable } from "./registerable";

export const ResponsiveLine = ({
    data,
    ...props
} : any ) => {

    return (
        <ReactResponsiveLine
            data={data}
            colors={ data => data.color }
            {...props}
        />
    );
};

export const responsiveLineMeta: CodeComponentMeta<any> = {
    name: "ResponsiveLine",
    displayName: "Responsive Line",
    props: {
        data : {
            type : "array",
            defaultValue : [
                {
                    id : "test",
                    color : "#000000",
                    data : [
                        { x : "2023-01-01", y : 1000 },
                        { x : "2023-02-01", y : 1500 },
                        { x : "2023-05-01", y : 1200 },
                        { x : "2023-10-01", y : 1760 },
                    ],
                }
            ],
        },
        xScale : {
            type : "object",
            defaultValue : {},
        },
        yScale : {
            type : "object",
            defaultValue : {},
        },
        margin : {
            type : "object",
            defaultValue : {
                top : 0,
                right : 0,
                bottom : 0,
                left : 0,
            },
        },
        curve : {
            type : "choice",
            options : ["basis", "cardinal", "catmullRom", "linear", "monotoneX", "monotoneY", "natural", "step", "stepAfter", "stepBefore"],
            defaultValue : "linear",
        },
        lineWidth : {
            type : "number",
            defaultValue : 3,
        },
        enableArea : {
            type : "boolean",
            defaultValue : false,
        },
        areaOpacity : {
            type : "number",
            defaultValue : 0.5,
            hidden : (props) => !props.enableArea,
        },
        enablePoints : {
            type : "boolean",
            defaultValue : true,
        },
        defs : {
            type : "array",
            defaultValue : [],
        },
        fill : {
            type : "array",
            defaultValue : [],
        },
        pointSize : {
            type : "number",
            defaultValue : 10,
            hidden : (props) => !props.enablePoints,
        },
        pointBorderWidth : {
            type : "number",
            defaultValue : 2,
            hidden : (props) => !props.enablePoints,
        },
        enablePointLabel : {
            type : "boolean",
            defaultValue : true,
            hidden : (props) => !props.enablePoints,
        },
        pointLabelYOffset : {
            type : "number",
            defaultValue : 0,
            hidden : (props) => !props.enablePointLabel,
        },
        enableGridX : {
            type : "boolean",
            defaultValue : true,
        },
        enableGridY : {
            type : "boolean",
            defaultValue : true,
        },
        axisBottom : {
            type : "object",
            defaultValue : {},
        },
        axisLeft : {
            type : "object",
            defaultValue : {},
        },
        isInteractive : {
            type : "boolean",
            defaultValue : true,
        },
        useMesh : {
            type : "boolean",
            defaultValue : true,
        },
        enableCrosshair : {
            type : "boolean",
            defaultValue : true,
        },
        crosshairType : {
            type : "choice",
            options : ["x", "y", "top-left", "top", "top-right", "right", "bottom-left", "bottom-right", "bottom", "left", "cross"],
            defaultValue : "cell",
            hidden : (props) => !props.enableCrosshair,
        },
        animate : {
            type : "boolean",
            defaultValue : true,
        },
    },
    importPath: "inprodi-design-system",
    importName: "ResponsiveLine",
};

export function registerResponsiveLine(
    loader?: Registerable,
    customResponsiveLineMeta?: CodeComponentMeta<any>
) {
    const doRegisterComponent: typeof registerComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(ResponsiveLine, customResponsiveLineMeta ?? responsiveLineMeta);
}