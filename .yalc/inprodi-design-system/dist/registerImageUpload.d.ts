import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import React from "react";
import { Registerable } from "./registerable";
interface ImageUploaderProps {
    value?: any;
    disabled?: boolean;
    multiple?: boolean;
    maxFiles?: number;
    onChange?: any;
    dropOnPage?: boolean;
    className?: string;
    label?: string;
}
export declare const ImageUploader: React.ForwardRefExoticComponent<ImageUploaderProps & React.RefAttributes<unknown>>;
export declare const imageUploaderMeta: CodeComponentMeta<ImageUploaderProps>;
export declare function registerImageUploader(loader?: Registerable, customImageUploaderMeta?: CodeComponentMeta<ImageUploaderProps>): void;
export {};
