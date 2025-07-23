import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: ${({ theme }) => theme.spacing.normal};
    align-items: center;
`;

export const InputRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    background: ${({ theme }) => theme.colors.background};
    flex: 0 0 1;
    label {
        display: block;
        min-width: 30%;
    }
    input {
        height: ${({ theme }) => theme.spacing.custom(2)};
        padding: ${({ theme }) => theme.spacing.double(0, 0.5)};
        background: ${({ theme }) => theme.colors.background};
        border: ${({ theme }) => `1px solid ${theme.colors.border}`};
        border-radius: 4px;
        color: ${({ theme }) => theme.colors.text};
    }
    textarea {
        min-height: 120px;
        padding: ${({ theme }) => theme.spacing.double(0.5, 1)};
        background: ${({ theme }) => theme.colors.background};
        border: ${({ theme }) => `1px solid ${theme.colors.border}`};
        border-radius: 4px;
        font-size: ${({ theme }) => theme.fontSize.normal};
        color: ${({ theme }) => theme.colors.text};
        outline: none;
        width: 100%;
    }
`;
