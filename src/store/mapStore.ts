import { create } from 'zustand';
import { MapState } from '../types';

const DEFAULT_CENTER: [number, number] = [0, 0];
const DEFAULT_ZOOM = 1;

export const useMapStore = create<MapState>((set) => ({
  zoom: DEFAULT_ZOOM,
  center: DEFAULT_CENTER,
  selectedCountry: null,
  showAllCountries: true,
  setZoom: (zoom) => set({ zoom }),
  setCenter: (center) => set({ center }),
  setSelectedCountry: (code) => set({ selectedCountry: code }),
  toggleShowAllCountries: () => set((state) => ({ showAllCountries: !state.showAllCountries })),
  reset: () => set({ 
    zoom: DEFAULT_ZOOM, 
    center: DEFAULT_CENTER, 
    selectedCountry: null,
    showAllCountries: true 
  }),
}));