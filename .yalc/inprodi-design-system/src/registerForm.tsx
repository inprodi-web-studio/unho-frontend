import React, { useRef, useImperativeHandle, forwardRef } from "react";
import registerComponent, {
    CodeComponentMeta,
} from "@plasmicapp/host/registerComponent";

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

const Form = forwardRef<any, FormProps>(({
    content,
    onSubmit,
    className,
    onLoadingChange,
}: FormProps, ref) => {
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onLoadingChange(true);

        onSubmit && await onSubmit();

        onLoadingChange(false);
    };

    useImperativeHandle(ref, () => ({
        submitForm: () => {
            formRef.current?.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
        }
    }));

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={`inprodi-form ${className}`}
        >
            {content}
        </form>
    );
});

export const formMeta: CodeComponentMeta<FormProps> = {
    name: "Form",
    displayName: "Form",
    states: {
        loading: {
            type: "writable",
            variableType: "boolean",
            valueProp: "loading",
            onChangeProp: "onLoadingChange",
        },
    },
    props: {
        content: {
            type: "slot",
            description: "Set the content of form",
        },
        loading: {
            type: "boolean",
            description: "Set the loading status of form",
            defaultValue: false,
        },
        onLoadingChange: {
            type: "eventHandler",
            description: "Event handler for form loading change",
            argTypes: [],
        },
        onSubmit: {
            type: "eventHandler",
            description: "Event handler for form submit",
            argTypes: [],
        }
    },
    refActions : {
        sumbitForm : {
            description : "Submits the form from outside element",
            argTypes : [],
        },
    },
    importPath: "inprodi-design-system",
    importName: "Form",
};

export function registerForm(
    loader?: Registerable,
    customFormMeta?: CodeComponentMeta<FormProps>
) {
    const doRegisterComponent: typeof registerComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(Form, customFormMeta ?? formMeta);
}