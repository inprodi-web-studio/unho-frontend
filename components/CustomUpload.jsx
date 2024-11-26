import React from "react";
import registerComponent from "@plasmicapp/host/registerComponent";

import { Upload } from 'antd';
const { Dragger } = Upload;

export const CustomUpload = ({
    value,
    onChange,
}) => {
    return (
        <Dragger
            multiple
            fileList={value}
            listType="picture-card"
            onChange={(info) => {
                onChange(info.fileList);
            }}
        >
            <p>Subir Archivos</p>
        </Dragger>
    )
};

export const customUploadMeta = {
    name: "CustomUpload",
    displayName: "Custom Upload",
    states : {
        value : {
            type : "writable",
            variableType : "array",
            valueProp : "value",
            onChangeProp : "onChange",
        },
    },
    props: {
        value : {
            type : "array",
        },
        onChange : {
            type : "eventHandler",
            argTypes : [],
        },
    },
    importPath: "inprodi-design-system",
    importName: "CustomUpload",
};

export function registerCustomUpload(
    loader,
    customCustomUploadMeta
) {
    const doRegisterComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(CustomUpload, customCustomUploadMeta ?? customUploadMeta);
}