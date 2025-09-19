"use client";

import Link from "next/link";
import { useIcons } from "@/hooks/useIcons";
import "@/styles/components/hmnButton.scss";

interface HmnButtonProps {
  link?: string;
  label?: string;
  iconLeft?: string;
  iconRight?: string;
  disabled?: boolean;
  type?: string;
  className?: string;
  onClick?: () => void;
}

export default function HmnButton({
  link,
  label,
  iconLeft,
  iconRight,
  disabled = false,
  type = "primary",
  onClick,
}: HmnButtonProps) {
  const icons = useIcons();

  if (link && !disabled) {
    return (
      <Link
        href={link}
        className={`hmn-button ${type} ${disabled ? "disabled" : ""}`}
      >
        {iconLeft && (
          <span
            className="icon hmn-button__icon"
            dangerouslySetInnerHTML={{ __html: icons[iconLeft] }}
          />
        )}
        {label && <span className="hmn-button__label">{label}</span>}
        {iconRight && (
          <span
            className="icon hmn-button__icon"
            dangerouslySetInnerHTML={{ __html: icons[iconRight] }}
          />
        )}
      </Link>
    );
  }

  return (
    <button
      className={`hmn-button ${type} ${disabled ? "disabled" : ""}`}
      onClick={(e) => {
        if (disabled) {
          e.preventDefault();
          return;
        }
        onClick?.();
      }}
    >
      {iconLeft && (
        <span
          className="icon hmn-button__icon"
          dangerouslySetInnerHTML={{ __html: icons[iconLeft] }}
        />
      )}
      {label && <span className="hmn-button__label">{label}</span>}
      {iconRight && (
        <span
          className="icon hmn-button__icon"
          dangerouslySetInnerHTML={{ __html: icons[iconRight] }}
        />
      )}
    </button>
  );
}
