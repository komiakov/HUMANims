"use client";

import { useEffect, useState } from "react";
import HmnButton from "@/components/HmnButton";
import "@/styles/newDatabasePage.scss";
import HmnInput from "@/components/HmnInput";
import { useColumns } from "@/hooks/useColumns";

export default function Databases() {
  const [isOpenLeftPanel, setIsOpenLeftPanel] = useState(false);
  const [activeColumn, setActiveColumn] = useState(-1);
  const { database, addColumn, resetDatabase, updateColumn } = useColumns();

  useEffect(() => {
    addColumn();
  }, []);

  const currentColumn = database.columns.find((col) => col.id === activeColumn);

  return <div id="ims-content"></div>;
}
