import { DraggableBlock } from "@container/BuilderLayout/components";
import { BlockType } from "@container/types";
import { BlockEditor } from "../Editor";
import styled from "styled-components";

const SidebarContainer = styled.section<{ $grid: boolean }>`
    background-color: ${({ theme }) => theme.colors.background};
    gap: 1rem;
    min-width: ${({ theme, $grid }) => ($grid ? theme.spacing.custom(20) : "40%")};
    box-shadow: ${({ theme }) => theme.shadows.primary};
    padding: ${({ theme }) => theme.spacing.normal};
    ${({ $grid }) =>
        $grid &&
        `display: grid;
    grid-template-columns: 1fr 1fr;`};
`;

const blocksOptionsList: { type: BlockType; label: string }[] = [
    { type: "heading", label: "heading" },
    { type: "text", label: "Text" },
    { type: "image", label: "Image" },
    {
        type: "button",
        label: "Button",
    },
];
export const BuilderSidebar = ({ activePanel }: { activePanel: "edit" | "default" }) => {
    return (
        <SidebarContainer $grid={activePanel === "default"}>
            {activePanel === "edit" ? (
                <BlockEditor />
            ) : (
                blocksOptionsList.map((block) => (
                    <DraggableBlock key={block.type} label={block.label} type={block.type} />
                ))
            )}
        </SidebarContainer>
    );
};
