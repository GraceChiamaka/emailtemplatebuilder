import { ReactNode } from "react";
import styled from "styled-components";

const StyledButton = styled.button<ButtonProps>`
    padding: ${({ theme }) => theme.spacing.double(0.5, 1)};
    border-radius: none;
    background: ${({ theme, variant }) =>
        variant === "default" ? theme.colors.primary : "transparent"};
    border: ${({ theme }) => `1px solid ${theme.colors.border}`};
    cursor: pointer;
    ${({ style }) => `${style}`}
`;

type ButtonProps = {
    children: ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    htmlType?: "button" | "submit" | "reset";
    size?: "small" | "large";
    style?: React.CSSProperties;
    variant?: "default" | "transparent" | "secondary";
    title?: string;
};

export const Button = ({
    children,
    onClick,
    htmlType = "button",
    size = "large",
    style,
    variant = "default",
    ...rest
}: ButtonProps) => {
    return (
        <StyledButton
            onClick={onClick}
            type={htmlType}
            size={size}
            style={style}
            variant={variant}
            {...rest}
        >
            {children}
        </StyledButton>
    );
};
