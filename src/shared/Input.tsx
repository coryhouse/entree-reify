import React from "react";

type InputProps = {
  /** Input ID */
  id: string;

  /** Validation error to display below the input */
  error: string;

  /** Input label */
  label: string;

  /** onChange handler */
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;

  /** Input type */
  type?: "text" | "email" | "number" | "date" | "textarea";

  /** Input value */
  value: string;
};

export function Input({
  id,
  label,
  type = "text",
  error,
  value,
  onChange,
}: InputProps) {
  if (!id) throw new Error("ID must be populated.");
  return (
    <>
      <div>
        <label htmlFor={id}>{label}</label>
        <br />
        {type === "textarea" ? (
          <textarea id={id} value={value} onChange={onChange} />
        ) : (
          <input type={type} id={id} value={value} onChange={onChange} />
        )}
      </div>
      <div style={{ color: "red" }}>{error}</div>
    </>
  );
}

// Deprecated
Input.defaultArgs = {
  type: "text",
};
