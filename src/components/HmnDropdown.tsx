"use client";

import HmnButton from "./HmnButton";
import { useState, useRef, useEffect } from "react";
import "@/styles/components/hmnDropdown.scss";

interface HmnDropdownProps {
  label?: string;
  iconLeft?: string;
  iconRight?: string;
  type?: string;
  alignment?: string;
  children: React.ReactNode;
}

export default function HmnDropdown({
  label,
  iconLeft,
  iconRight,
  type = "primary",
  alignment = "right",
  children,
}: HmnDropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`hmn-dropdown ${alignment} ${open ? "open" : ""}`} ref={dropdownRef}>
      <HmnButton
        label={label}
        iconLeft={iconLeft}
        iconRight={iconRight}
        type={type}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && <div className="hmn-dropdown__body">{children}</div>}
    </div>
  );
}
