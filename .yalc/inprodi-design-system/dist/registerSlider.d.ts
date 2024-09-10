import React from "react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import type { SliderBaseProps as AntdSliderProps } from "antd/es/slider";
import { Registerable } from "./registerable";
interface SliderProps extends AntdSliderProps {
}
export declare const Slider: ({ ...props }: SliderProps) => React.JSX.Element;
export declare const sliderMeta: CodeComponentMeta<SliderProps>;
export declare function registerSlider(loader?: Registerable, customSliderMeta?: CodeComponentMeta<SliderProps>): void;
export {};
