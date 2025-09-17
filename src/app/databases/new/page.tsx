"use client";

import { useEffect, useState } from "react";
import HmnButton from "@/components/HmnButton";
import "@/styles/newDatabasePage.scss";

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
          
        </section>
        <section>
          <HmnButton label="Save" iconLeft="save" type="accent" disabled={true} />
        </section>
      </div>

      <div id="ims-content-body">
        <div id="ims-content-body__left-panel" className={isOpenLeftPanel ? 'active' : ''}>
          <div id="left-panel_header">
            {isMobile && (
              <HmnButton iconLeft="close" onClick={() => setIsOpenLeftPanel(false)} />
            )}
          </div>
        </div>

        <div id="ims-content-body__column-content">
          <div id="column-body">
            <div id="column-body__header" className="container-flex">
              <section>
                {isMobile && (
                  <HmnButton iconLeft="hamburger" onClick={() => setIsOpenLeftPanel(true)} />
                )}
              </section>
              <section>
                
              </section>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
