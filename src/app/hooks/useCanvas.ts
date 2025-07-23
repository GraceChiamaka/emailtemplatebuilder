import { useAppDispatch, useAppSelector } from "@store/index";
import { BlockData } from "@container/types";
import { builderActions } from "@store/slices/builder/builder.slice";

export const useCanvas = () => {
    const dispatch = useAppDispatch();
    const { activePanel, blocks, selectedBlockId, draftBlocks } = useAppSelector(
        (state) => state.builder,
    );

    const addBlock = (block: BlockData) => {
        dispatch(builderActions.setDraftBlocks({ blocks: [...draftBlocks, block] }));
    };

    const removeBlock = (id: string) => {
        dispatch(builderActions.deleteBlock({ id }));
    };

    const selectBlock = (id: string) => {
        dispatch(builderActions.updateSelectedBlockId({ id }));
    };

    const updateBlock = (id: string, data: Partial<Omit<BlockData, "id" | "type">>) => {
        dispatch(builderActions.updateDraftBlock({ id, data: data as BlockData }));
    };

    const mergeBlocks = () => {
        dispatch(builderActions.updateBlock({ blocks: draftBlocks }));
    };

    return {
        activePanel,
        addBlock,
        blocks: draftBlocks,
        savedBlocks: blocks,
        mergeBlocks,
        removeBlock,
        updateBlock,
        selectBlock,
        selectedBlockId,
    };
};
