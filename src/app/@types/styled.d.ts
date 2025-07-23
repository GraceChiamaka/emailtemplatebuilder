import "styled-components";

type ColorsTheme = {
    background: string;
    text: string;
    primary: string;
    secondary: string;
    border: string;
    button: string;
    lightest: string;
};

type FontSizes = {
    custom: (fontSize: number) => string /* custom */;
    tiny: string;
    small: string;
    medium: string;
    normal: string;
    large: string;
};

type FontFamily = {
    geist: string;
};

export type Spacing = {
    tiny: string;
    small: string;
    medium: string;
    normal: string;
    large: string;
    xl: string;
    double: (value: number, value2: number) => string;
    custom: (val: number) => string;
};

export type Media = {
    custom: (minWidth: number, maxWidth: number) => string;
    customDesktop: (minWidth: number) => string;
    mobile: string;
    tablet: string;
    smallLaptop: string;
    largeLaptop: string;
    extraLargeLaptop: string;
};

export type Weights = "regular" | "medium" | "semibold" | "bold";

export type FontWeights = {
    [key in TextWeights]: number;
};
export type Shadows = {
    primary: string;
};

declare module "styled-components" {
    export interface DefaultTheme {
        colors: ColorsTheme;
        fontSize: FontSizes;
        fontFamily: FontFamily;
        shadows: Shadows;
        spacing: Spacing;
        media: Media;
        borderRadius;
        fontWeights: FontWeights;
    }
}
