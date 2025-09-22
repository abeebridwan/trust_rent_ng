import { create } from 'zustand';

interface StoreState {
  propertyType: string;
  priceRange: string;
  user: any;
  setPropertyType: (propertyType: string) => void;
  setPriceRange: (priceRange: string) => void;
  setUser: (user: any) => void;
}

export const useStore = create<StoreState>((set) => ({
  propertyType: "",
  priceRange: "",
  user: {},
  setPropertyType: (propertyType) => set({ propertyType }),
  setPriceRange: (priceRange) => set({ priceRange }),
  setUser: (user) => set({ user }),
}));
