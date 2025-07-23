import { useDebounce } from "@hooks/useDebounce";
import { useState, useEffect } from "react";
import { BlockEditorProps } from "./BlockEditor";
import { InputRow } from "./style";
export const ImageBlockEditor = ({
    blockProps,
    onValueChange,
    onPropsChange,
    onStyleChange,
}: BlockEditorProps) => {
    const [text, setText] = useState(blockProps.value ?? "");
    const [styles, setStyles] = useState(blockProps.style ?? {});
    const [props, setProps] = useState(blockProps.props ?? {});

    const debouncedText = useDebounce(text, 1000);
    const debouncedStyles = useDebounce(styles, 1000);
    const debouncedProps = useDebounce(props, 1000);

    useEffect(() => {
        onValueChange(debouncedText);
        onStyleChange?.(debouncedStyles);
        onPropsChange?.(debouncedProps);
    }, [debouncedText, debouncedStyles, debouncedProps]);

    return (
        <>
            <InputRow>
                <label>Image:</label>
                <input type={"text"} value={text} onChange={(e) => setText(e.target.value)} />
            </InputRow>
            <InputRow>
                <label>Alt text:</label>
                <input
                    type={"text"}
                    value={props?.alt ?? ""}
                    onChange={(e) => setProps({ alt: e.target.value })}
                />
            </InputRow>
            <InputRow>
                <label>Width:</label>
                <input
                    type="number"
                    value={styles?.width ?? ""}
                    onChange={(e) => setStyles?.({ ...styles, width: parseInt(e.target.value) })}
                />
            </InputRow>
            <InputRow>
                <label>Height:</label>
                <input
                    type="number"
                    value={styles?.height ?? ""}
                    onChange={(e) => setStyles?.({ ...styles, height: parseInt(e.target.value) })}
                />
            </InputRow>
        </>
    );
};
