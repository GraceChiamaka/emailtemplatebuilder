import { BlockData } from "@container/types";
import { Block } from "@container/index";
import { IconButton } from "@core/Button";
import { useDroppable } from "@dnd-kit/react";
import { BlockContainer, Container, CanvaEmtyState, Action } from "./style";

type CanvasProps = {
    blocks: BlockData[];
    selectedBlockId: string | null;
    selectBlock: (id: string) => void;
    removeBlock: (id: string) => void;
};

export const BuilderCanvas = ({
    blocks,
    selectBlock,
    selectedBlockId,
    removeBlock,
}: CanvasProps) => {
    const { isDropTarget, ref } = useDroppable({
        id: "canvas",
    });

    const blockAction = (action: "edit" | "remove", id: string) => {
        if (action === "edit") {
            selectBlock(id);
        } else {
            removeBlock(id);
        }
    };

    return (
        <Container ref={ref} $isDropTarget={isDropTarget} data-container={"BuilderCanvas"}>
            {blocks.length === 0 ? (
                <CanvaEmtyState>Drag blocks here</CanvaEmtyState>
            ) : (
                blocks.map((block) => {
                    return (
                        <BlockContainer key={block.id} style={{}}>
                            <Block block={block} />
                            <Action>
                                <IconButton
                                    label={"Edit Block"}
                                    iconName={"edit"}
                                    onClick={() => blockAction("edit", block.id)}
                                    size={24}
                                    disabled={block.id === selectedBlockId}
                                />

                                <IconButton
                                    label={"Delete Block"}
                                    iconName={"delete"}
                                    onClick={() => blockAction("remove", block.id)}
                                    size={24}
                                />
                            </Action>
                        </BlockContainer>
                    );
                })
            )}
        </Container>
    );
};
