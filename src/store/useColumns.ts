// store/useColumns.ts
"use client";

import { create } from "zustand";

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

interface ColumnsStore {
  database: Database;
  addColumn: () => void;
  getColumnById: (id: number) => Column | undefined;
  resetDatabase: () => void;
  updateColumn: (id: number, newData: Partial<Column>) => void;
}

export const useColumns = create<ColumnsStore>((set, get) => ({
  database: {
    name: { value: "New database", isValid: true },
    languages: ["en"],
    columns: [],
  },

  addColumn: () =>
    set((state) => {
      const columnIndex = state.database.columns.length + 1;
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
      return {
        database: {
          ...state.database,
          columns: [...state.database.columns, newColumn],
        },
      };
    }),

  getColumnById: (id) =>
    get().database.columns.find((col) => col.id === id),

  resetDatabase: () =>
    set({
      database: {
        name: { value: "New database", isValid: true },
        languages: ["en"],
        columns: [],
      },
    }),

  updateColumn: (id, newData) =>
    set((state) => ({
      database: {
        ...state.database,
        columns: state.database.columns.map((col) =>
          col.id === id ? { ...col, ...newData } : col
        ),
      },
    })),
}));
