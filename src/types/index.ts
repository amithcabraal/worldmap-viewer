export interface Country {
  name: string;
  code: string;
  coordinates: [number, number];
}

export interface CountryZoom {
  [key: string]: number;
  default: number;
}

export interface MapState {
  zoom: number;
  center: [number, number];
  selectedCountry: string | null;
  showAllCountries: boolean;
  setZoom: (zoom: number) => void;
  setCenter: (center: [number, number]) => void;
  setSelectedCountry: (code: string | null) => void;
  toggleShowAllCountries: () => void;
  reset: () => void;
}