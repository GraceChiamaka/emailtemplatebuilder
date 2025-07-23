export const ImageBlock = ({ value, style, props }: any) => {
    return value === "" ? (
        <div>Img place holder</div>
    ) : (
        <img src={value} alt={props?.alt} style={{ objectFit: "fill", ...style }} />
    );
};
