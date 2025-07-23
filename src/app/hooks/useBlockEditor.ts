import { builderActions } from "@store/slices/builder/builder.slice";
import { BlockData } from "@container/types";
import { useState, useEffect, useMemo, CSSProperties } from "react";
import { useCanvas } from "./useCanvas";
import { useAppSelector, useAppDispatch } from "@store/store";
const logger = "[useBlockEditor]";

type BlockValue = string | number | File;

export const useBlockEditor = () => {
    const { selectedBlockId, draftBlocks } = useAppSelector((state) => state.builder);
    const [selectedBlock, setSelectedBlock] = useState<BlockData | null>(null);
    const { updateBlock, mergeBlocks } = useCanvas();
    const dispatch = useAppDispatch();

    const blockInfo = useMemo(() => {
        const filteredBlock = draftBlocks.filter((block) => block.id === selectedBlockId);
        return filteredBlock[0];
    }, [selectedBlockId, draftBlocks]);

    useEffect(() => {
        if (blockInfo) setSelectedBlock(blockInfo);
    }, [blockInfo]);

    const commit = () => {
        console.log(`${logger} syncing blocks`);
        mergeBlocks();
    };
    const handleClose = () => {
        dispatch(builderActions.clearSelection());
    };
    const updateBlockValue = (value: BlockValue) => {
        if (!selectedBlockId) return;
        updateBlock(selectedBlockId, { value: value as any });
    };

    const updateBlockStyle = (style: Partial<CSSProperties>) => {
        if (!selectedBlockId) return;
        const currentStyle = blockInfo?.style;
        const mergedStyle = {
            ...currentStyle,
            ...style,
        };
        updateBlock(selectedBlockId, {
            style: mergedStyle as BlockData["style"],
        });
    };

    const updateBlockProps = (props: Record<string, any>) => {
        if (!selectedBlockId) return;
        updateBlock(selectedBlockId, { props: props });
    };

    return {
        blockInfo: selectedBlock,
        commit,
        handleClose,
        updateBlockValue,
        updateBlockProps,
        updateBlockStyle,
    };
};
