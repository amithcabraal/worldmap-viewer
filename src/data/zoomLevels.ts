import { CountryZoom } from '../types';

export const countryZoomLevels: CountryZoom = {
  // Large countries (zoom level 2)
  'RU': 2, // Russia
  'CN': 2, // China
  'US': 2, // United States
  'CA': 2, // Canada
  'BR': 2, // Brazil
  'AU': 2, // Australia
  
  // Medium countries (zoom level 3)
  'IN': 3, // India
  'AR': 3, // Argentina
  'KZ': 3, // Kazakhstan
  'DZ': 3, // Algeria
  'MX': 3, // Mexico
  
  // Default zoom level for smaller countries
  'default': 4
};