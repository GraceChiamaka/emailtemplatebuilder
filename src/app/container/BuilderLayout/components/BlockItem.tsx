import { useDraggable } from "@dnd-kit/react";
import { BlockType } from "@container/types";
import Image from "next/image";
import styled from "styled-components";

type DraggableBlockProps = {
    icon?: string;
    label: string;
    type: BlockType;
};

const StyledBlockItem = styled.div`
    display: flex;
    width: 128px;
    height: 128px;
    align-items: center;
    justify-content: center;
    padding: 4px;
    margin-bottom: 0.5rem;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.border};
    cursor: grab;
    text-transform: capitalize;
    &:hover {
        box-shadow: ${({ theme }) => theme.shadows.primary};
    }
`;

export const DraggableBlock = ({ icon, label, type }: DraggableBlockProps) => {
    const { ref } = useDraggable({
        id: type,
    });

    return (
        <StyledBlockItem data-container={"BlockItem"} ref={ref}>
            {icon && <Image src={icon} width={64} height={64} alt={"block icon"} />}
            {label}
        </StyledBlockItem>
    );
};
