import { useDebounce } from "@hooks/useDebounce";
import { useState, useEffect } from "react";
import { BlockEditorProps } from "./BlockEditor";
import { InputRow } from "./style";

export const TextBlockEditor = ({ blockProps, onValueChange, onStyleChange }: BlockEditorProps) => {
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
                <label htmlFor={"message"}>Text:</label>
                <textarea id={"message"} value={text} onChange={(e) => setText(e.target.value)} />
            </InputRow>
            <InputRow>
                <label>Font Size:</label>
                <input
                    type="number"
                    value={styles?.fontSize ?? ""}
                    onChange={(e) => setStyles?.({ fontSize: parseInt(e.target.value) })}
                />
            </InputRow>
            <InputRow>
                <label>Font Color:</label>
                <input
                    type="color"
                    value={blockProps.style?.color ?? ""}
                    onChange={(e) => setStyles?.({ color: e.target.value })}
                />
            </InputRow>
        </>
    );
};
