"use client";

import { useState } from "react";

export interface Column {
  id: number;
  name: { value: string; isValid: boolean };
  type: { value: string };
  format: { value: string };
  unique: { value: boolean };
  required: { value: boolean };
  min: { value: string | number; isValid: boolean };
  max: { value: string | number; isValid: boolean };
  default: { value: string | number | boolean; isValid: boolean };
}

export interface Database {
  name: { value: string; isValid: boolean };
  languages: string[];
  columns: Column[];
}

export function useColumns() {
  const [database, setDatabase] = useState<Database>({
    name: { value: "New database", isValid: true },
    languages: ["en"],
    columns: [],
  });

  const addColumn = () => {
    setDatabase((prev) => {
      const columnIndex = prev.columns.length + 1;
      const newColumn: Column = {
        id: columnIndex,
        name: { value: `column_${columnIndex}`, isValid: true },
        type: { value: "text" },
        format: { value: "" },
        unique: { value: true },
        required: { value: false },
        min: { value: 0, isValid: true },
        max: { value: 99999, isValid: true },
        default: { value: "", isValid: true },
      };
      return { ...prev, columns: [...prev.columns, newColumn] };
    });
  };

  const getColumnById = (id: number) =>
    database.columns.find((col) => col.id === id);

  const resetDatabase = () => {
    setDatabase({
      name: { value: "New database", isValid: true },
      languages: ["en"],
      columns: [],
    });
  };

  const updateColumn = (id: number, newData: Partial<Column>) => {
    setDatabase((prev) => ({
      ...prev,
      columns: prev.columns.map((col) =>
        col.id === id ? { ...col, ...newData } : col
      ),
    }));
  };

  return {
    database,
    addColumn,
    getColumnById,
    resetDatabase,
    updateColumn,
  };
}
