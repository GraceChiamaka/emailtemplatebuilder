import { ChangeEvent } from "react";
import styled from "styled-components";

type EditorRowProps = {
    label: string;
    type: string;
    value: string | number;
    onChange: (val: any) => void;
};
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    background: ${({ theme }) => theme.colors.background};
    input {
        height: ${({ theme }) => theme.spacing.custom(2)};
        padding: ${({ theme }) => theme.spacing.double(0, 0.5)};
        background: ${({ theme }) => theme.colors.background};
        border: ${({ theme }) => `1px solid ${theme.colors.border}`};
        border-radius: 4px;
    }
`;

export const EditorInput = ({ label, type = "text", value, onChange }: EditorRowProps) => {
    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
        const { value } = ev.target;
        onChange(value);
    };
    return (
        <Container>
            <span>{label}</span>
            <input type={type} value={value} onChange={handleChange} />
        </Container>
    );
};
