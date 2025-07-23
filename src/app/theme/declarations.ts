import { font } from "../fonts/fonts";
const colors = {
    light: {
        lightest: "#EFEEFD",
        button: "#E0DDFB",
        background: "#ffffff",
        text: "#111111",
        primary: "#6457EB",
        secondary: "#5045BC",
        border: "#28225E",
    },
    dark: {
        lightest: "#D9D9DA",
        light: "#9289F1",
        button: "#B4B3B6",
        background: "#05040C",
        text: "#F2F2F2",
        primary: "#828185",
        secondary: "#1E1D24",
        border: "#504F54",
    },
};

/**
 * @param maxWidth max width of media query
 * @param minWidth max width of media query
 */

const customMediaQuery = (minWidth: number, maxWidth: number) =>
    `@media only screen and (min-width: ${minWidth}px)  and  (max-width: ${maxWidth}px)`;
const extraMediaQuery = (minWidth: number) => `@media only screen and (min-width: ${minWidth}px)`;

interface Media {
    custom: (minWidth: number, maxWidth: number) => string;
    customDesktop: (minWidth: number) => string;
    mobile: string;
    tablet: string;
    smallLaptop: string;
    largeLaptop: string;
    extraLargeLaptop: string;
}

const media: Media = {
    custom: customMediaQuery,

    customDesktop: extraMediaQuery,
    /**
     * Mobile devices
     */
    mobile: customMediaQuery(250, 480),
    /**
     * iPads, Tablets
     */
    tablet: customMediaQuery(481, 768),
    /**
     * fairly large displays like small laptops
     */
    smallLaptop: customMediaQuery(769, 1024),
    /**
     * large laptops
     */
    largeLaptop: customMediaQuery(1025, 1200),
    /**
     * extra large laptops
     */
    extraLargeLaptop: extraMediaQuery(1201),
};

/**
 *
 * @param val  size as number(unitless)
 */

const customFontSize = (val: number) => `${val}rem`;
const customRadius = (val: number) => `${val}px`;
const customSpacing = (val: number) => `${val}rem`;
const circleRadius = () => `50%`;
const doubleSpacing = (x: number, y: number) => `${x}rem ${y}rem`;

const fontSize = {
    custom: customFontSize,
    tiny: customFontSize(0.75),
    small: customFontSize(0.875),
    normal: customFontSize(1),
    medium: customFontSize(1.125),
    large: customFontSize(1.25),
    xl: customFontSize(1.5),
};

const fontFamily = {
    geist: font.style.fontFamily,
};
const weights = [400, 500, 600, 700];

const fontWeights = {
    regular: weights[0],
    medium: weights[1],
    semibold: weights[2],
    bold: weights[3],
};

const spacing = {
    tiny: customSpacing(0.75),
    small: customSpacing(0.875),
    normal: customSpacing(1),
    medium: customSpacing(1.125),
    large: customSpacing(1.25),
    xl: customSpacing(1.5),
    double: doubleSpacing,
    custom: customSpacing,
};

const borderRadius = {
    default: "10px",
    input: "6px",
    button: "8px",
    custom: customRadius,
    round: circleRadius,
};
const lightShadows = {
    primary: "0 0px 4px 0px rgba(40, 34, 94, 0.4)",
};
const darkShadows = {
    primary: "0 0 4px 0 rgba(146, 137, 241, 0.40)",
};

export {
    colors,
    fontSize,
    fontWeights,
    fontFamily,
    lightShadows,
    darkShadows,
    media,
    borderRadius,
    spacing,
};
