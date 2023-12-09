export default function IconButton({
    type = "button",
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            type={type}
            className={
                "flex items-center justify-center px-4 py-2 bg-ingerit object-cover" +
                className
            }
        >
            {children}
        </button>
    );
}
