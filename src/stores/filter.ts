/* eslint-disable import/prefer-default-export */
import { create } from "zustand";

interface StoreType {
  status: string;
  setStatus: (status: string) => void;
  category?: string;
  setCategory: (category?: string) => void;
  price: number;
  setPrice: (price: number) => void;
  currentPageRestaurantList: number;
  setCurrentPageRestaurantList: (currentPageRestaurantList?: number) => void;
}

export const useFilterStore = create<StoreType>()(set => ({
  category: '',
  setCategory: (category?: string) => set(state => ({ ...state, category })),
  status: '',
  setStatus: (status?: string) => set(state => ({ ...state, status })),
  price: 0,
  setPrice: (price?: number) => set(state => ({ ...state, price })),
  currentPageRestaurantList: 1,
  setCurrentPageRestaurantList: (currentPageRestaurantList?: number) => set(state => ({ ...state, currentPageRestaurantList })),
}));
