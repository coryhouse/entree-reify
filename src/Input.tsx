type InputProps = {
  /** Input ID */
  id: string;

  /** Input label */
  label: string;

  /** Input type */
  type?: "text" | "email" | "number" | "date" | "textarea";
};

export function Input({ id, label, type = "text" }: InputProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <br />
      {type === "textarea" ? (
        <textarea id={id} />
      ) : (
        <input type={type} id={id} />
      )}
    </div>
  );
}

// Deprecated
Input.defaultArgs = {
  type: "text",
};
