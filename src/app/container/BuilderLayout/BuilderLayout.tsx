import styled from "styled-components";
import { BuilderCanvas } from "./BuilderCanvas";
import { BuilderSidebar } from "./BuilderSidebar";
import { Navbar } from "../index";
import { DragDropProvider } from "@dnd-kit/react";
import { BlockData } from "@container/types";
import { defaultBlocks } from "@utils/constants";
import { v4 as uuidv4 } from "uuid";
import { useCanvas } from "@hooks/useCanvas";
import { useBlocks } from "@hooks/useBlock";

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    padding: ${({ theme }) => theme.spacing.double(0, 4)};
    margin-top: 5rem;
    gap: 2rem;
`;

export const BuilderLayout = () => {
    const { activePanel, addBlock, blocks, removeBlock, selectBlock, selectedBlockId } =
        useCanvas();

    const { handleExport, handleSend, handleSave } = useBlocks();

    const handleDrop = (target: any) => {
        if (!target) return;

        const template = defaultBlocks[target.id];
        const newBlock = {
            id: uuidv4(),
            ...template,
        };
        addBlock(newBlock as BlockData);
    };
    const handleDragEnd = (event: any) => {
        const { source, target } = event.operation;

        const canvas = document.querySelector("#canvas") as any;
        if (canvas?.__canvasDropHandler__) {
            canvas.__canvasDropHandler__(event);
        }
        if (target?.id === "canvas") {
            handleDrop(source);
        }
    };

    return (
        <>
            <Navbar onSave={handleSave} onExport={handleExport} onSend={handleSend} />
            <DragDropProvider onDragEnd={handleDragEnd}>
                <Container>
                    <BuilderCanvas
                        blocks={blocks}
                        selectedBlockId={selectedBlockId}
                        selectBlock={selectBlock}
                        removeBlock={removeBlock}
                    />
                    <BuilderSidebar activePanel={activePanel} />
                </Container>
            </DragDropProvider>
        </>
    );
};
