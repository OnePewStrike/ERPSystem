import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
    { type = "text", className = "", isFocused = true, ...props },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={`${
                isFocused
                    ? "shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-md"
                    : "focus:ring-0 focus:border-0 border-0"
            } rounded-md ${className}`}
            ref={input}
        />
    );
});
