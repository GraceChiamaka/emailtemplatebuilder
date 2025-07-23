import React from "react";
import { BlockData, BlockType } from "@container/types";
import { TextBlock, HeadingBlock, ButtonBlock, ImageBlock } from "@core/Blocks";
import { ComponentType } from "react";

export const BlocksRecord: Record<BlockType, ComponentType<any>> = {
    button: ButtonBlock,
    image: ImageBlock,
    heading: HeadingBlock,
    text: TextBlock,
};

export const Block = ({ block }: { block: BlockData }) => {
    const BlockEl = BlocksRecord[block.type];
    if (!Block) return <div>Invalid block</div>;
    return <BlockEl {...block} />;
};
