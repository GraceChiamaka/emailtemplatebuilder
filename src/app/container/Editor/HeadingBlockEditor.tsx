import { BlockEditorProps } from "./BlockEditor";
import { useState, useEffect } from "react";
import { InputRow } from "./style";
import { useDebounce } from "@hooks/useDebounce";

export const HeadingBlockEditor = ({
    blockProps,
    onValueChange,
    onStyleChange,
}: BlockEditorProps) => {
    const [text, setText] = useState(blockProps.value ?? "");
    const [styles, setStyles] = useState(blockProps.style ?? {});
    const debouncedText = useDebounce(text, 1000);
    const debouncedStyles = useDebounce(styles, 1000);

    useEffect(() => {
        onValueChange(debouncedText);
        onStyleChange?.(debouncedStyles);
    }, [debouncedText, debouncedStyles]);

    return (
        <>
            <InputRow>
                <label>Heading:</label>
                <input value={text} onChange={(e) => setText(e.target.value)} />
            </InputRow>
            <InputRow>
                <label>Font Size:</label>
                <input
                    type="number"
                    value={styles?.fontSize ?? ""}
                    onChange={(e) => setStyles({ fontSize: parseInt(e.target.value) })}
                />
            </InputRow>
            <InputRow>
                <label>Font Color:</label>
                <input
                    type="color"
                    value={blockProps.style?.color ?? ""}
                    onChange={(e) => onStyleChange?.({ color: e.target.value })}
                />
            </InputRow>
        </>
    );
};
