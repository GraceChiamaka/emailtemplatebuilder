import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BlockData } from "@container/types";

export type BuilderState = {
    activePanel: "default" | "edit";
    blocks: BlockData[];
    draftBlocks: BlockData[];
    selectedBlockId: string | null;
};

const initialState: BuilderState = {
    activePanel: "default",
    blocks: [],
    draftBlocks: [],
    selectedBlockId: null,
};

const builderSlice = createSlice({
    name: "editor",
    initialState,
    reducers: {
        clearDrafts: (state) => {
            state.draftBlocks = [];
        },
        deleteBlock: (state, action: PayloadAction<{ id: string }>) => {
            const stateUpdates = {
                selectedBlockId: null,
                activePanel: "default" as BuilderState["activePanel"],
            };
            const filteredBlock = state.draftBlocks.filter(
                (block) => block.id !== action.payload.id,
            );
            return {
                ...state,
                draftBlocks: filteredBlock,
                ...(state.selectedBlockId === action.payload.id && stateUpdates),
            };
        },
        setDraftBlocks: (state, action: PayloadAction<{ blocks: BlockData[] }>) => {
            state.draftBlocks = action.payload.blocks;
        },
        mergeDraftToPublished: (state) => {
            state.blocks = [...state.draftBlocks];
        },
        updateDraftBlock: (
            state,
            action: PayloadAction<{ id: string; data: Partial<BlockData> }>,
        ) => {
            state.draftBlocks = state.draftBlocks.map((block) =>
                block.id === action.payload.id ? { ...block, ...action.payload.data } : block,
            ) as BlockData[];
        },
        updateSelectedBlockId: (state, action: PayloadAction<{ id: string }>) => {
            return { ...state, selectedBlockId: action.payload.id, activePanel: "edit" };
        },
        updateBlock: (state, action: PayloadAction<{ blocks: BlockData[] }>) => {
            return { ...state, blocks: action.payload.blocks };
        },
        clearSelection: (state) => {
            return { ...state, activePanel: "default", selectedBlockId: null };
        },
    },
});

export const builderReducer = builderSlice.reducer;
export const builderActions = builderSlice.actions;
