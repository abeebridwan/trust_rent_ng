import { create } from 'zustand';

interface StoreState {
  propertyType: string;
  priceRange: string;
  setPropertyType: (propertyType: string) => void;
  setPriceRange: (priceRange: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  propertyType: "",
  priceRange: "",
  setPropertyType: (propertyType) => set({ propertyType }),
  setPriceRange: (priceRange) => set({ priceRange }),
}));
