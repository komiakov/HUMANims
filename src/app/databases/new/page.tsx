"use client";

import { useEffect, useState } from "react";
import HmnButton from "@/components/HmnButton";
import "@/styles/newDatabasePage.scss";
import HmnInput from "@/components/HmnInput";

export default function Databases() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpenLeftPanel, setIsOpenLeftPanel] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 721);
    };

    checkWidth(); // проверка при первом рендере
    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <div id="ims-content">
      <div id="functional-panel" className="container-flex">
        <section>
          <HmnButton iconLeft="arrowLeft" type="accent" disabled={true} />
        </section>
        <section>
          <HmnButton label="Edit form" iconLeft="editForm" disabled={true} />
          <HmnButton
            label="Save"
            iconLeft="save"
            type="accent"
            disabled={true}
          />
        </section>
      </div>

      <div id="ims-content-body">
        <div
          id="ims-content-body__left-panel"
          className={isOpenLeftPanel ? "active" : ""}
        >
          <div id="left-panel_header">
            <HmnInput placeholder="Database name" defaultValue="New database" />
            {isMobile && (
              <HmnButton
                iconLeft="sidebar"
                onClick={() => setIsOpenLeftPanel(false)}
              />
            )}
          </div>
          <hr />
          <HmnInput placeholder="Search columns" iconLeft="search" />
          <hr />
          <HmnButton iconLeft="add" label="Add column" type="accent" />
          <hr />
          <div className="scroll">
            <div className="hmn-column active">
              <HmnButton iconLeft="move" />
              <div className="hmn-column__label">new_column1</div>
            </div>
            <div className="hmn-column">
              <HmnButton iconLeft="move" />
              <div className="hmn-column__label">new_column1</div>
            </div>
          </div>
        </div>

        <div id="ims-content-body__column-content">
          <div id="column-body">
            <div id="column-body__header" className="container-flex">
              <section>
                {isMobile && (
                  <HmnButton
                    iconLeft="hamburger"
                    onClick={() => setIsOpenLeftPanel(true)}
                  />
                )}
              </section>
              <section></section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
