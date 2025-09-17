"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useIcons } from "@/hooks/useIcons";
import "@/styles/components/hmnHeader.scss";
import HmnButton from "./HmnButton";
import HmnDropdown from "./HmnDropdown";

const navButtons = {
  dashboard: { label: "Dashboard", icon: "dashboard", link: "/" },
  databases: { label: "Databases", icon: "database", link: "/databases" },
  reports: { label: "Reports", icon: "report", link: "/reports" },
};

export default function HmnHeader() {
  const pathname = usePathname();
  const icons = useIcons();

  const [activeIndex, setActiveIndex] = useState(0);
  const [lineStyle, setLineStyle] = useState({ left: 0, width: 0 });
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const navArray = Object.values(navButtons);

  useEffect(() => {
    let index = -1;

    if (pathname === "/") {
      index = navArray.findIndex((item) => item.link === "/");
    } else {
      index = navArray.findIndex(
        (item) => item.link !== "/" && pathname.startsWith(item.link)
      );
    }

    if (index !== -1) {
      setActiveIndex(index);
    }
  }, [pathname, navArray]);

  useEffect(() => {
    const updateLine = () => {
      const current = navRefs.current[activeIndex];
      if (current) {
        setLineStyle({ left: current.offsetLeft, width: current.offsetWidth });
      }
    };

    updateLine();

    window.addEventListener("resize", updateLine);

    return () => window.removeEventListener("resize", updateLine);
  }, [activeIndex]);

  return (
    <header className="hmn-header">
      <div className="container-flex">
        <section>
          <Link href="/" id="header-logo">
            <svg
              width="400"
              height="400"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M84 4.02051L152 72.0205V399.989L84.0107 332L84 332.011V4H84.0205L84 4.02051Z"
                fill="#237260"
              />
              <path
                d="M247 168.011L314.99 236H98V168H247.011L247 168.011Z"
                fill="#237260"
              />
              <path
                d="M315 399.989L247.011 332L247 332.011V236H315V399.989Z"
                fill="#237260"
              />
              <path d="M315 4L315 139.999L247 71.999L315 4Z" fill="#237260" />
            </svg>

            <span id="header-logo__label">HUMANims</span>
          </Link>
        </section>
        <section>
          <HmnButton iconLeft="search" disabled={true} />
          <HmnButton iconLeft="notification" disabled={true} />
          <HmnDropdown label="Andrii" iconRight="arrowDown" type="accent">
            <div id="header-user-info">
              <span id="header-user-info__name">ANDRII KOMIAKOV</span>
              <span id="header-user-info__email">
                andrii.komiakov@icloud.com
              </span>
            </div>
            <hr />
            <HmnButton iconLeft="settings" label="Settings" disabled={true} />
            <HmnButton iconLeft="license" label="License" disabled={true} />
            <hr />
            <HmnButton
              iconLeft="documentation"
              label="Documentation"
              disabled={true}
            />
            <HmnButton iconLeft="support" label="Support" disabled={true} />
            <hr />
            <HmnButton iconLeft="logOut" label="Log Out" disabled={true} />
          </HmnDropdown>
        </section>
      </div>
      <div>
        <nav>
          {navArray.map((btn, i) => (
            <Link
              key={i}
              href={btn.link}
              className={`header_nav_nav-link ${
                activeIndex === i ? "active" : ""
              }`}
              ref={(el: HTMLAnchorElement | null) => {
                navRefs.current[i] = el;
              }}
            >
              <span
                className="icon header_nav_nav-link__icon"
                dangerouslySetInnerHTML={{ __html: icons[btn.icon] }}
              />
              <span className="header_nav_nav-link__label">{btn.label}</span>
            </Link>
          ))}

          <span
            className="header_nav_nav-line"
            style={{ left: lineStyle.left, width: lineStyle.width }}
          ></span>
        </nav>
      </div>
    </header>
  );
}
