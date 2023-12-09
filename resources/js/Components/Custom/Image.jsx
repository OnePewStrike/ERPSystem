export default function Image({
    src,
    alt,
    height,
    width,
    className = "",
    ...props
}) {
    return (
        <img
            src={src}
            alt={alt}
            height={height}
            width={width}
            {...props}
            className={"object-cover" + className}
        />
    );
}
