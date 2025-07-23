import styled from "styled-components";

export const BlockContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: ${({ theme }) => theme.spacing.small};
    gap: ${({ theme }) => theme.spacing.normal};
    margin-bottom: ${({ theme }) => theme.spacing.normal};
    border-radius: ${({ theme }) => theme.spacing.small};

    &:hover {
        box-shadow: ${({ theme }) => theme.shadows.primary};
    }
`;
export const Container = styled.section<{ $isDropTarget: boolean }>`
    width: 100%;
    padding: ${({ theme }) => theme.spacing.double(0, 4)};
    background: ${({ theme, $isDropTarget }) =>
        $isDropTarget ? theme.colors.lightest : theme.colors.background};
    border: ${({ theme, $isDropTarget }) => $isDropTarget && `1px dashed ${theme.colors.primary}`};
`;

export const Action = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    button {
        cursor: pointer;
    }
`;

export const CanvaEmtyState = styled.div`
    padding: ${({ theme }) => theme.spacing.large};
    border: 1px dashed ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.lightest};
    text-align: center;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.primary};
`;
