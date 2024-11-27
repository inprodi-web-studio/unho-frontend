import React, { forwardRef, useImperativeHandle, useState } from "react";
import registerComponent from "@plasmicapp/host/registerComponent";

import { Upload } from 'antd';
const { Dragger } = Upload;

export const CustomUpload = forwardRef(({ value = [], onChange }, ref) => {
    const [files, setFiles] = useState(value);

    useImperativeHandle(ref, () => ({
        getFiles: () => files,
    }));

    return (
        <Dragger
            multiple
            fileList={files}
            listType="picture"
            onChange={(info) => {
                setFiles(info.fileList);
                onChange && onChange();
            }}
        >
            <p>Subir Archivos</p>
        </Dragger>
    );
});

CustomUpload.displayName = "CustomUpload";

export const customUploadMeta = {
    name: "CustomUpload",
    displayName: "Custom Upload",
    props: {
        value: {
            type: "array",
        },
        onChange : {
            type : "eventHandler",
            argTypes : [],
        },
    },
    refActions: {
        getFiles: {
          description: "Get current files",
          argTypes: []
        }
    },
    importPath: "inprodi-design-system",
    importName: "CustomUpload",
};

export function registerCustomUpload(loader, customCustomUploadMeta) {
    const doRegisterComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(CustomUpload, customCustomUploadMeta ?? customUploadMeta);
}