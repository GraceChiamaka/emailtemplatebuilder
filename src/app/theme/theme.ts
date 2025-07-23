import {
    colors,
    borderRadius,
    fontSize,
    fontFamily,
    fontWeights,
    media,
    lightShadows,
    darkShadows,
    spacing,
} from "./declarations";

export const lightTheme = {
    colors: colors.light,
    borderRadius,
    fontSize,
    fontFamily,
    fontWeights,
    shadows: lightShadows,
    media,
    spacing,
    mode: "light" as const,
};

export const darkTheme = {
    colors: colors.dark,
    borderRadius,
    fontSize,
    fontFamily,
    fontWeights,
    shadows: darkShadows,
    media,
    spacing,
    mode: "dark" as const,
};
