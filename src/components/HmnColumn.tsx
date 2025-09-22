"use client";

import "@/styles/components/hmnColumn.scss";
import { useState } from "react";
import { useColumns } from "@/store/useColumns";
import HmnInput from "@/components/HmnInput";
import HmnButton from "@/components/HmnButton";

interface HmnColumnProps {
  columnId: number;
}

export default function HmnColumn({ columnId }: HmnColumnProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { database, updateColumn } = useColumns();

  const currentColumn = database.columns.find((c) => c.id === columnId);

  if (!currentColumn) return null;

  return (
    <div className="hmn-column">
      <div className="hmn-column__header container-flex">
        <section>
          <HmnButton iconLeft="move" />
          <span className="hmn-column__header__name">
            {currentColumn.name.value}
          </span>
        </section>
        <section>
          <HmnButton iconLeft="duplicate" type="warning" disabled={true} />
          <HmnButton iconLeft="delete" type="alert" disabled={true} />
          <HmnButton
            iconLeft="arrowDown"
            onClick={() => setIsOpen(!isOpen)}
            type="primary"
            className={isOpen ? "rotate" : ""}
          />
        </section>
      </div>

      {isOpen && (
        <div className="hmn-column__body">
          <div className="row">
            <div className="input-block input-block__hulf">
              <span className="input-block__label">* Column name</span>
              <HmnInput
                placeholder="Required"
                defaultValue={currentColumn.name.value}
                onSave={(value: string) =>
                  updateColumn(columnId, {
                    name: { ...currentColumn.name, value },
                  })
                }
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
