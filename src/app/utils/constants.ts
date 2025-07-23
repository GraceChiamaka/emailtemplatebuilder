import { BaseBlock } from "@container/types";

export const defaultBlocks: Record<string, Omit<BaseBlock, "id">> = {
    text: {
        type: "text",
        value: "Hello world",
        style: {
            fontSize: 16,
        },
        props: {},
    },
    image: {
        type: "image",
        value: "",
        style: {},
        props: {
            alt: "",
        },
    },
    button: {
        type: "button",
        value: "Click me",
        style: {},
        props: {
            link: "",
        },
    },
    heading: {
        type: "heading",
        value: "Hello Heading",
        style: {
            fontSize: 40,
            fontWeight: "bold",
        },
        props: {
            level: 1, // represents <h1>
        },
    },
};
