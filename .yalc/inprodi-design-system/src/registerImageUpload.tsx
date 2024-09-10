import registerComponent, {
    CodeComponentMeta,
} from "@plasmicapp/host/registerComponent";
import React, { useState, useRef, forwardRef, useImperativeHandle, useEffect } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";

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

registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateType);

export const ImageUploader = forwardRef(({
    value = [],
    label,
    disabled,
    multiple,
    maxFiles,
    className,
    dropOnPage,
}: ImageUploaderProps, ref) => {

    const [files, setFiles] = useState(value);
    const [ updated, setUpdated ] = useState(false);
    const pondRef = useRef<any>(null);

    useEffect(() => {
        if (files.length === 0 && !updated) {
            setFiles(value);
        }
    }, [value]);

    useImperativeHandle(ref, () => ({
        getFiles: () => {
            const result = pondRef.current.getFiles();
            let fileList: any = [];

            result.map((file: any) => {
                fileList.push(file.file);
            });

            return fileList;
        }
    }));

    return (
        <div className={className}>
            <FilePond
                ref={ref => pondRef.current = ref}
                files={files}
                onaddfile={(error, file) => {
                    console.log(error);
                    const index = files.findIndex((i: any) => i === file.source);

                    if (index === -1) {
                        setFiles((prevFiles: any) => [...prevFiles, file.source]);
                    }
                }}
                onremovefile={(error, file) => {
                    console.log(error);
                    setFiles((prevFiles: any) => prevFiles.filter((prevFile: any) => {                        
                        return prevFile !== file.source;
                    }));

                    setUpdated(true);
                }}
                credits={false}
                maxFiles={maxFiles}
                disabled={disabled}
                allowReorder={true}
                maxParallelUploads={3}
                dropOnPage={dropOnPage}
                allowMultiple={multiple}
                className="image-uploader"
                itemInsertLocation="after"
                labelDecimalSeparator="."
                labelThousandsSeparator=","
                acceptedFileTypes={["image/*"]}
                labelIdle={ label }
                labelInvalidField="Hay archivos inválidos"
                labelFileWaitingForSize="Esperando tamaño..."
                labelFileSizeNotAvailable="Tamaño no disponible"
                labelFileLoading="Cargando..."
                labelFileLoadError="Error al cargar el archivo"
                labelFileProcessing="Subiendo..."
                labelFileProcessingComplete="Completado"
                labelFileProcessingAborted="Cancelado"
                labelTapToCancel="click para cancelar"
                labelTapToRetry="click para reintentar"
                labelTapToUndo="click para deshacer"
                labelButtonRemoveItem="Eliminar"
                labelButtonAbortItemLoad="Cancelar"
                labelButtonRetryItemLoad="Reintentar"
                labelButtonAbortItemProcessing="Cancelar"
                labelButtonUndoItemProcessing="Deshacer"
                labelButtonRetryItemProcessing="Reintentar"
                labelButtonProcessItem="Subir"
            />
        </div>
    );
});

export const imageUploaderMeta: CodeComponentMeta<ImageUploaderProps> = {
    name: "ImageUploader",
    displayName: "Image Uploader",
    props: {
        value: {
            type: "array",
            defaultValue: [],
        },
        label : {
            type: "string",
            defaultValue: "Arrastra y suelta imágenes o haz click para buscar",
        },
        authToken: {
            type: "string",
        },
        uploadUrl: {
            type: "string",
        },
        deleteUrl: {
            type: "string",
        },
        disabled: {
            type: "boolean",
            defaultValue: false,
        },
        multiple: {
            type: "boolean",
            defaultValue: true,
        },
        maxFiles: {
            type: "number",
            defaultValue: 1,
        },
        dropOnPage: {
            type: "boolean",
            defaultValue: false,
            advanced: true,
        },
        onChange: {
            type: "eventHandler",
            argTypes: [],
        },
    },
    refActions: {
        getFiles: {
            description: "Get files uploaded into the instance",
            argTypes: [],
        }
    },
    importPath: "inprodi-design-system",
    importName: "ImageUploader",
};

export function registerImageUploader(
    loader?: Registerable,
    customImageUploaderMeta?: CodeComponentMeta<ImageUploaderProps>
) {
    const doRegisterComponent: typeof registerComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(ImageUploader, customImageUploaderMeta ?? imageUploaderMeta);
}
