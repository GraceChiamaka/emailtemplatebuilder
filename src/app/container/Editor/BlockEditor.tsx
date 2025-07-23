import { BaseBlock, StyleProps } from "@container/types";
import { TextBlockEditor } from "./TextBlockEditor";
import { ImageBlockEditor } from "./ImageBlockEditor";
import { ButtonBlockEditor } from "./ButtonBlockEditor";
import { HeadingBlockEditor } from "./HeadingBlockEditor";
import { Button, IconButton } from "@core/index";
import { Header } from "./style";
import { useBlockEditor } from "@hooks/useBlockEditor";

export type BlockEditorProps = {
    blockProps: BaseBlock;
    onValueChange: (val: string | number) => void;
    onPropsChange?: (val: any) => void;
    onStyleChange?: (style: StyleProps) => void;
};

export const BlockEditor = () => {
    const { blockInfo, handleClose, updateBlockValue, updateBlockProps, updateBlockStyle, commit } =
        useBlockEditor();

    if (!blockInfo) return null;

    const renderEditor = () => {
        switch (blockInfo.type) {
            case "text":
                return (
                    <TextBlockEditor
                        blockProps={blockInfo}
                        onValueChange={updateBlockValue}
                        onPropsChange={updateBlockProps}
                        onStyleChange={updateBlockStyle}
                    />
                );
            case "image":
                return (
                    <ImageBlockEditor
                        blockProps={blockInfo}
                        onValueChange={updateBlockValue}
                        onPropsChange={updateBlockProps}
                        onStyleChange={updateBlockStyle}
                    />
                );
            case "button":
                return (
                    <ButtonBlockEditor
                        blockProps={blockInfo}
                        onValueChange={updateBlockValue}
                        onPropsChange={updateBlockProps}
                        onStyleChange={updateBlockStyle}
                    />
                );
            case "heading":
                return (
                    <HeadingBlockEditor
                        blockProps={blockInfo}
                        onValueChange={updateBlockValue}
                        onPropsChange={updateBlockProps}
                        onStyleChange={updateBlockStyle}
                    />
                );
            default:
                return <div>Unsupported block</div>;
        }
    };

    return (
        <div>
            <Header>
                <h1>Customize {blockInfo.type} </h1>
                <IconButton
                    iconName="close"
                    label={"Close Panel"}
                    size={24}
                    onClick={handleClose}
                />
            </Header>
            {renderEditor()}
            <Button variant={"default"} onClick={commit}>
                Apply
            </Button>
        </div>
    );
};
