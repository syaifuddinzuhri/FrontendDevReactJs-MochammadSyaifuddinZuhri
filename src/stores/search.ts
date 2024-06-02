/* eslint-disable import/prefer-default-export */
import { create } from "zustand";

interface StoreType {
  search?: string;
  filter?: { label: string | number; value: string | number };
  filterDate?: {
    from: string | undefined;
    to: string | undefined;
    date: string | undefined;
  };
  pagination?: { perPage: number; page: number | undefined };
  setSearch: (search?: string) => void;
  setFilter: (label: string | number, value: string | number) => void;
  setFilterDate: (
    from: string | undefined,
    to: string | undefined,
    date: string | undefined
  ) => void;
  setPagination: (perPage: number, page: number) => void;
  reset: () => void;
}

export const useSearchStore = create<StoreType>((set) => ({
  search: undefined,
  filter: undefined,
  filterDate: undefined,
  pagination: { page: 1, perPage: 10 },
  setSearch: (search?: string) => set((state) => ({ ...state, search })),
  setFilter: (label: string | number, value: string | number) =>
    set((state) => ({ ...state, filter: { label, value } })),
  setFilterDate: (
    from: string | undefined,
    to: string | undefined,
    date: string | undefined
  ) => set((state) => ({ ...state, filterDate: { from, to, date } })),
  setPagination: (perPage: number, page: number) =>
    set((state) => ({ ...state, pagination: { page, perPage } })),
  reset: () =>
    set({
      search: undefined,
      filter: undefined,
      filterDate: undefined,
      pagination: { page: undefined, perPage: 10 },
    }),
}));
