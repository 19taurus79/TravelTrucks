import { create } from "zustand";

type FilterState = {
  equipment: string[];
  vehicleType: string;
  location: string;
  activeFilters: {
    equipment: string[];
    vehicleType: string;
    location: string;
  };
  toggleEquipment: (item: string) => void;
  setVehicleType: (type: string) => void;
  setLocation: (location: string) => void;
  applyFilters: () => void;
};

export const useFilterStore = create<FilterState>((set) => ({
  equipment: [],
  vehicleType: "",
  location: "",
  activeFilters: {
    equipment: [],
    vehicleType: "",
    location: "",
  },
  toggleEquipment: (item) =>
    set((state) => ({
      equipment: state.equipment.includes(item)
        ? state.equipment.filter((i) => i !== item)
        : [...state.equipment, item],
    })),
  setVehicleType: (type) =>
    set((state) => ({
      vehicleType: state.vehicleType === type ? "" : type,
    })),
  setLocation: (location) => set({ location }),
  applyFilters: () =>
    set((state) => ({ activeFilters: { equipment: state.equipment, vehicleType: state.vehicleType, location: state.location } })),
}));
