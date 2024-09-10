import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import { Registerable } from "./registerable";
interface FormProps {
    onSubmit: any;
    content: any;
    className: string;
    schema: any;
    loading: boolean;
    onLoadingChange: any;
    defaultValues: {};
}
export declare const formMeta: CodeComponentMeta<FormProps>;
export declare function registerForm(loader?: Registerable, customFormMeta?: CodeComponentMeta<FormProps>): void;
export {};
