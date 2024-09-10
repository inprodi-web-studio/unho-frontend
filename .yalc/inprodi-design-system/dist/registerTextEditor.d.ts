import React from "react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import { Registerable } from "./registerable";
interface TextEditorProps {
    value?: string;
    placeholder?: string;
    onChange?: any;
    disabled?: boolean;
}
export declare const TextEditor: ({ value, placeholder, onChange, disabled, }: TextEditorProps) => React.JSX.Element | null;
export declare const textEditorMeta: CodeComponentMeta<TextEditorProps>;
export declare function registerTextEditor(loader?: Registerable, customTextEditorMeta?: CodeComponentMeta<TextEditorProps>): void;
export {};
