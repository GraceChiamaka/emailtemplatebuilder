export type StyleProps = React.CSSProperties;
export interface BaseBlock<T extends string = string> {
    id: string;
    type: T;
    value?: string | number;
    style?: StyleProps;
    props?: Record<string, any>;
}

export interface TextBlock extends BaseBlock<"text"> {
    value: string;
    style?: StyleProps & {
        fontSize?: number;
        fontWeight?: string;
        color?: string;
    };
    props?: {
        align?: "left" | "center" | "right";
    };
}
export interface ButtonBlock extends BaseBlock<"button"> {
    value: string;
    style?: StyleProps & {
        fontSize?: number;
        backgroundColor?: string;
        color?: string;
    };
    props?: {
        link?: string;
    };
}

export interface HeadingBlock extends BaseBlock<"heading"> {
    value: string;
    style?: StyleProps & {
        fontSize?: number;
        fontWeight?: string;
        color?: string;
    };
    props?: {
        level?: 1 | 2 | 3 | 4;
    };
}

export interface ImageBlock extends BaseBlock<"image"> {
    value: string; // supports only URLs
    style?: StyleProps & {
        width?: number;
        height?: number;
    };
    props?: {
        alt?: string;
    };
}

export type BlockData = TextBlock | ImageBlock | ButtonBlock | HeadingBlock;

export type BlockType = BlockData["type"];
