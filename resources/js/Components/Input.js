import React, { useEffect, useRef } from "react";

export default function Input({
    type = "text",
    name,
    value,
    className,
    autoComplete,
    required,
    isFocused,
    isError,
    handleChange,
    disable,
    placeholder = "",
    htmlId,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                value={value}
                className={`appearance-none text-lg  rounded-lg transition-all ease-in-out ${className} ${
                    disable ? "text-gray-400" : "text-gray-800"
                } ${
                    isError
                        ? "border-red-500 focus:border-red-500"
                        : "focus:border-gray-600  border-gray-300"
                }`}
                placeholder={placeholder}
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
                disabled={disable}
                id={htmlId}
            />
        </div>
    );
}
