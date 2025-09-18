"use client";

import { useState } from "react";
import { useIcons } from "@/hooks/useIcons";
import "@/styles/components/hmnInput.scss";

interface HmnButtonProps {
  placeholder?: string;
  iconLeft?: string;
  type?: string;
  defaultValue?: string;
  onSave?: (value: string) => void;
}

export default function HmnInput({
  placeholder,
  iconLeft,
  type = "text",
  defaultValue = "",
  onSave,
}: HmnButtonProps) {
  const icons = useIcons();
  const [value, setValue] = useState(defaultValue);

  return (
    <div className="hmn-input">
      {iconLeft && (
        <span
          className="icon hmn-input__icon"
          dangerouslySetInnerHTML={{ __html: icons[iconLeft] }}
        />
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => onSave?.(value)}
      />
      {value && (
        <span
          className="icon hmn-input__icon hmn-input__icon--clear"
          dangerouslySetInnerHTML={{ __html: icons["close"] }}
          onClick={() => setValue("")}
        />
      )}
    </div>
  );
}
