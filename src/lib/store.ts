import { create } from 'zustand';

interface User {
  fullName: string;
  email: string;
  dateOfBirth: string;
  termsAccepted: boolean;
  password: string;
}

interface StoreState {
  propertyType: string;
  priceRange: string;
  user: User;
  setPropertyType: (propertyType: string) => void;
  setPriceRange: (priceRange: string) => void;
  setUser: (user: User) => void;
}

export const useStore = create<StoreState>((set) => ({
  propertyType: "",
  priceRange: "",
  user: {} as User,
  setPropertyType: (propertyType) => set({ propertyType }),
  setPriceRange: (priceRange) => set({ priceRange }),
  setUser: (user) => set({ user }),
}));
