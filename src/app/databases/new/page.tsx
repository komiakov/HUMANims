"use client";

import { useEffect, useState } from "react";
import HmnButton from "@/components/HmnButton";
import "@/styles/newDatabasePage.scss";
import HmnInput from "@/components/HmnInput";
import { useColumns } from "@/store/useColumns";
import HmnColumn from "@/components/HmnColumn";

export default function Databases() {
  const { database, addColumn, resetDatabase, updateColumn } = useColumns();

  useEffect(() => {
    addColumn();
  }, []);

  return (
    <div id="ims-content">
      <div id="functional-panel" className="container-flex">
        <section>
          <HmnButton type="accent" iconLeft="arrowLeft" disabled={true} />
        </section>
        <section>
          <HmnButton
            label="Edit form"
            type="primary mbl-hide"
            iconLeft="editForm"
            disabled={true}
          />
          <HmnButton
            label="Save"
            type="accent"
            iconLeft="save"
            disabled={true}
          />
        </section>
      </div>

      <div id="ims-content-body">
        <div id="ims-content-body__name-and-column">
          <HmnInput placeholder="Database name" />
          <HmnButton
            type="accent mbl-hide"
            label="Add column"
            iconLeft="add"
            onClick={() => {
              addColumn();
            }}
          />
        </div>
        <div id="ims-content-body__search">
          <HmnInput placeholder="Search columns" iconLeft="search" />
        </div>
        {database.columns.length > 0 && (
          <div className="scroll">
          {database.columns.map((col) => (
            <HmnColumn key={col.id} columnId={col.id}/>
          ))}
        </div>
        )}
        
      </div>
    </div>
  );
}
