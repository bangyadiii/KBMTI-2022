import React from "react";

export default function FieldErrorValidation({ error }) {
    return (
        <div className="my-1">
            <p className="text-sm text-red-600">{error}</p>
        </div>
    );
}
