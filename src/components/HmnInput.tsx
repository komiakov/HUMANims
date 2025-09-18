"use client";

import { useIcons } from "@/hooks/useIcons";
import "@/styles/components/hmnInput.scss";

interface HmnButtonProps {
  placeholder?: string;
  iconLeft?: string;
  type?: string;
}

export default function HmnInput({
  placeholder,
  iconLeft,
  type = "text",
}: HmnButtonProps) {
  const icons = useIcons();

  return (
    <div className="hmn-input">
      {iconLeft && (
        <span
          className="icon hmn-input__icon"
          dangerouslySetInnerHTML={{ __html: icons[iconLeft] }}
        />
      )}
      <input type={type} placeholder={placeholder} />
    </div>
  );
}
