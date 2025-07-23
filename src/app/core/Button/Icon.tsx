import styled from "styled-components";
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { Svg } from "@assets/svg";
import Image from "next/image";
const {
    PreviewIcon,
    SaveIcon,
    SendIcon,
    ExportIcon,
    DarkIcon,
    LightIcon,
    CloseIcon,
    DeleteIcon,
    EditIcon,
} = Svg;

type IconTypes =
    | "dark"
    | "light"
    | "preview"
    | "save"
    | "send"
    | "export"
    | "delete"
    | "edit"
    | "close";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    active?: boolean;
    icon?: ReactNode;
    iconName?: IconTypes;
    size?: number;
    label: string;
};

const StyledIconButton = styled.button<{ $active?: boolean }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    padding: 0.5rem;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: background 0.2s;
    &:hover,
    &:focus {
        background: rgba(0, 0, 0, 0.08);
        outline: none;
    }
    box-shadow: ${({ theme, $active }) => ($active ? theme.shadows.primary : "none")};
`;

const icons: Record<IconTypes, string> = {
    close: CloseIcon,
    delete: DeleteIcon,
    edit: EditIcon,
    dark: DarkIcon,
    light: LightIcon,
    preview: PreviewIcon,
    save: SaveIcon,
    send: SendIcon,
    export: ExportIcon,
};

export const IconButton = ({
    active = false,
    icon,
    iconName,
    label,
    size,
    ...props
}: IconButtonProps) => {
    const iconSrc = iconName ? icons[iconName] : "";

    const renderIcon = <Image src={iconSrc} width={size} height={size} alt={"icon"} />;
    return (
        <StyledIconButton
            $active={active ? true : false}
            aria-label={label}
            title={label}
            {...props}
        >
            {!iconName && icon && icon}
            {typeof iconName === "string"}
            {renderIcon}
        </StyledIconButton>
    );
};
