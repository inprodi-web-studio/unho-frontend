import React, { useEffect } from "react";
import registerComponent, {
    CodeComponentMeta,
} from "@plasmicapp/host/registerComponent";
import { Registerable } from "./registerable";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Divider } from "./registerDivider";
import { Button } from "./registerButton";
import { Icon } from "./registerIcon";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";

interface TextEditorProps {
    value?: string;
    placeholder?: string;
    onChange?: any;
    disabled?: boolean;
}

export const TextEditor = ({
    value,
    placeholder,
    onChange,
    disabled,
} : TextEditorProps ) => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            TextAlign.configure({
                types : ["heading", "paragraph"],
            }),
            Placeholder.configure({
                placeholder,
            })
        ],
        onUpdate({ editor }) {
            onChange( editor.getHTML() );
        },
    });

    useEffect(() => {
        if (value && editor && value !== editor.getHTML()) {
          editor.commands.setContent(value, false, { preserveWhitespace: 'full' });
        }
      }, [value, editor]);

    useEffect(() => {
        editor?.setEditable(!disabled);
    }, [disabled, editor]);

    if (!editor) {
        return null;
    }

    const mainContainerStyles : React.CSSProperties = {
        background : disabled ? "var(--antd-colorBgContainerDisabled)" : "white",
    };

    const actionContainerStyles : React.CSSProperties = {
        display : "flex",
        flexDirection : "row",
        width : "100%",
        alignItems : "center",
        gap : "10px",
        padding: "6px 0 12px 0",
        opacity : disabled ? 0.5 : 1,
        pointerEvents : disabled ? "none" : "auto",
        overflow : "auto",
    };

    const sectionStyles : React.CSSProperties = {
        display : "flex",
        flexDirection : "row",
        gap : "10px",
    };

    return <div className="text-editor_container" style={mainContainerStyles}>
        <div style={actionContainerStyles}>
            <div style={sectionStyles}>
                <Button
                    label=""
                    type={ editor.isActive("bold") ? "primary" : "text" }
                    size="small"
                    disabled={
                        !editor.can()
                        .chain()
                        .focus()
                        .toggleBold()
                        .run()
                    }
                    icon={ <Icon
                        variant="bold"
                        icon="TextB"
                        color={ editor.isActive("bold") ? "white" : "var(--token-YFIqRc19SnuM)" }
                    /> }
                    onClick={ () => editor.chain().focus().toggleBold().run() }
                />

                <Button
                    label=""
                    type={ editor.isActive("italic") ? "primary" : "text" }
                    size="small"
                    disabled={
                        !editor.can()
                        .chain()
                        .focus()
                        .toggleItalic()
                        .run()
                    }
                    icon={ <Icon
                        variant="regular"
                        icon="TextItalic"
                        color={ editor.isActive("italic") ? "white" : "var(--token-YFIqRc19SnuM)" }
                    /> }
                    onClick={ () => editor.chain().focus().toggleItalic().run() }
                />

                <Button
                    label=""
                    type={ editor.isActive("underline") ? "primary" : "text" }
                    size="small"
                    icon={ <Icon
                        variant="regular"
                        icon="TextUnderline"
                        color={ editor.isActive("underline") ? "white" : "var(--token-YFIqRc19SnuM)" }
                    /> }
                    onClick={ () => editor.chain().focus().toggleUnderline().run() }
                />

                <Button
                    label=""
                    type={ editor.isActive("strike") ? "primary" : "text" }
                    size="small"
                    disabled={
                        !editor.can()
                        .chain()
                        .focus()
                        .toggleStrike()
                        .run()
                    }
                    icon={ <Icon
                        variant="regular"
                        icon="TextStrikethrough"
                        color={ editor.isActive("strike") ? "white" : "var(--token-YFIqRc19SnuM)" }
                    /> }
                    onClick={ () => editor.chain().focus().toggleStrike().run() }
                />
            </div>

            <Divider
                type="vertical"
            />

            <div style={sectionStyles}>
                <Button
                    label=""
                    type={ editor.isActive({ textAlign: "left" }) ? "primary" : "text" }
                    size="small"
                    icon={ <Icon
                        variant="regular"
                        icon="TextAlignLeft"
                        color={ editor.isActive({ textAlign: "left" }) ? "white" : "var(--token-YFIqRc19SnuM)" }
                    /> }
                    onClick={ () => editor.chain().focus().setTextAlign("left").run() }
                />

                <Button
                    label=""
                    type={ editor.isActive({ textAlign: "center" }) ? "primary" : "text" }
                    size="small"
                    icon={ <Icon
                        variant="regular"
                        icon="TextAlignCenter"
                        color={ editor.isActive({ textAlign: "center" }) ? "white" : "var(--token-YFIqRc19SnuM)" }
                    /> }
                    onClick={ () => editor.chain().focus().setTextAlign("center").run() }
                />

                <Button
                    label=""
                    type={ editor.isActive({ textAlign: "right" }) ? "primary" : "text" }
                    size="small"
                    icon={ <Icon
                        variant="regular"
                        icon="TextAlignRight"
                        color={ editor.isActive({ textAlign: "right" }) ? "white" : "var(--token-YFIqRc19SnuM)" }
                    /> }
                    onClick={ () => editor.chain().focus().setTextAlign("right").run() }
                />

                <Button
                    label=""
                    type={ editor.isActive({ textAlign: "justify" }) ? "primary" : "text" }
                    size="small"
                    icon={ <Icon
                        variant="regular"
                        icon="TextAlignJustify"
                        color={ editor.isActive({ textAlign: "justify" }) ? "white" : "var(--token-YFIqRc19SnuM)" }
                    /> }
                    onClick={ () => editor.chain().focus().setTextAlign("justify").run() }
                />
            </div>

            <Divider
                type="vertical"
            />

            <div style={sectionStyles}>
                <Button
                    label=""
                    type={ editor.isActive("bulletList") ? "primary" : "text" }
                    size="small"
                    icon={ <Icon
                        variant="regular"
                        icon="ListBullets"
                        color={ editor.isActive("bulletList") ? "white" : "var(--token-YFIqRc19SnuM)" }
                    /> }
                    onClick={ () => editor.chain().focus().toggleBulletList().run() }
                />

                <Button
                    label=""
                    type={ editor.isActive("orderedList") ? "primary" : "text" }
                    size="small"
                    icon={ <Icon
                        variant="regular"
                        icon="ListNumbers"
                        color={ editor.isActive("orderedList") ? "white" : "var(--token-YFIqRc19SnuM)" }
                    /> }
                    onClick={ () => editor.chain().focus().toggleOrderedList().run() }
                />

                <Button
                    label=""
                    type={ editor.isActive("blockquote") ? "primary" : "text" }
                    size="small"
                    icon={ <Icon
                        variant="regular"
                        icon="Quotes"
                        color={ editor.isActive("blockquote") ? "white" : "var(--token-YFIqRc19SnuM)" }
                    /> }
                    onClick={ () => editor.chain().focus().toggleBlockquote().run() }
                />
            </div>

            <Divider
                type="vertical"
            />

            <Button
                label=""
                type="text"
                size="small"
                icon={ <Icon
                    variant="regular"
                    icon="Minus"
                    color="var(--token-YFIqRc19SnuM)"
                /> }
                onClick={ () => editor.chain().focus().setHorizontalRule().run() }
            />
        </div>

        <EditorContent editor={editor} />
    </div>;
};

export const textEditorMeta: CodeComponentMeta<TextEditorProps> = {
    name: "TextEditor",
    displayName: "Text Editor",
    states : {
        value : {
            type : "writable",
            variableType : "text",
            valueProp : "value",
            onChangeProp : "onChange",
        },
    },
    props: {
        value : {
            type: "string",
        },
        placeholder : {
            type: "string",
            defaultValue : "Escribe algo..."
        },
        disabled : {
            type : "boolean",
            defaultValue : false,
        },
        onChange : {
            type     : "eventHandler",
            argTypes : [],
        },
    },
    importPath: "inprodi-design-system",
    importName: "TextEditor",
};

export function registerTextEditor(
    loader?: Registerable,
    customTextEditorMeta?: CodeComponentMeta<TextEditorProps>
) {
    const doRegisterComponent: typeof registerComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(TextEditor, customTextEditorMeta ?? textEditorMeta);
}