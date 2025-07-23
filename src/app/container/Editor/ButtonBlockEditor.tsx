import { useDebounce } from "@hooks/useDebounce";
import { useState, useEffect } from "react";
import { BlockEditorProps } from "./BlockEditor";
import { InputRow } from "./style";

export const ButtonBlockEditor = ({
    blockProps,
    onPropsChange,
    onValueChange,
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
                <label>Text:</label>
                <input value={text} onChange={(e) => setText(e.target.value)} />
            </InputRow>
            <InputRow>
                <label>Link:</label>
                <input value={props?.link} onChange={(e) => setProps({ link: e.target.value })} />
            </InputRow>
            <InputRow>
                <label htmlFor="fontSize">Font Size:</label>
                <input
                    id={"fontSize"}
                    type="number"
                    value={styles?.fontSize ?? ""}
                    onChange={(e) => setStyles({ fontSize: parseInt(e.target.value) })}
                />
            </InputRow>
            <InputRow>
                <label>Padding:</label>
                <input
                    type="number"
                    value={styles?.padding ?? ""}
                    onChange={(e) => setStyles({ padding: parseInt(e.target.value) })}
                />
            </InputRow>
            <InputRow>
                <label>Font Color:</label>
                <input
                    type="color"
                    value={styles?.color ?? ""}
                    onChange={(e) => setStyles({ ...styles, color: e.target.value })}
                />
            </InputRow>
            <InputRow>
                <label>Background Color:</label>
                <input
                    type="color"
                    value={styles?.backgroundColor ?? ""}
                    onChange={(e) => setStyles({ ...styles, backgroundColor: e.target.value })}
                />
            </InputRow>
        </>
    );
};
