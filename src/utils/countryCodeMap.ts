import { Country } from '../types';

// Map between country names and their ISO codes
export const countryNameToCode: { [key: string]: string } = {
  'Afghanistan': 'AFG',
  'Albania': 'ALB',
  'Algeria': 'DZA',
  'Angola': 'AGO',
  'Argentina': 'ARG',
  'Australia': 'AUS',
  'Austria': 'AUT',
  'Azerbaijan': 'AZE',
  'Bangladesh': 'BGD',
  'Belarus': 'BLR',
  'Belgium': 'BEL',
  'Bolivia': 'BOL',
  'Brazil': 'BRA',
  'Bulgaria': 'BGR',
  'Cambodia': 'KHM',
  'Cameroon': 'CMR',
  'Canada': 'CAN',
  'Chile': 'CHL',
  'China': 'CHN',
  'Colombia': 'COL',
  'Costa Rica': 'CRI',
  'Croatia': 'HRV',
  'Cuba': 'CUB',
  'Czech Republic': 'CZE',
  'Denmark': 'DNK',
  'Ecuador': 'ECU',
  'Egypt': 'EGY',
  'Estonia': 'EST',
  'Ethiopia': 'ETH',
  'Finland': 'FIN',
  'France': 'FRA',
  'Germany': 'DEU',
  'Ghana': 'GHA',
  'Greece': 'GRC',
  'Hungary': 'HUN',
  'Iceland': 'ISL',
  'India': 'IND',
  'Indonesia': 'IDN',
  'Iran': 'IRN',
  'Iraq': 'IRQ',
  'Ireland': 'IRL',
  'Israel': 'ISR',
  'Italy': 'ITA',
  'Japan': 'JPN',
  'Kazakhstan': 'KAZ',
  'Kenya': 'KEN',
  'South Korea': 'KOR',
  'Latvia': 'LVA',
  'Libya': 'LBY',
  'Lithuania': 'LTU',
  'Malaysia': 'MYS',
  'Mexico': 'MEX',
  'Mongolia': 'MNG',
  'Morocco': 'MAR',
  'Netherlands': 'NLD',
  'New Zealand': 'NZL',
  'Nigeria': 'NGA',
  'Norway': 'NOR',
  'Pakistan': 'PAK',
  'Peru': 'PER',
  'Philippines': 'PHL',
  'Poland': 'POL',
  'Portugal': 'PRT',
  'Romania': 'ROU',
  'Russia': 'RUS',
  'Saudi Arabia': 'SAU',
  'Serbia': 'SRB',
  'Singapore': 'SGP',
  'Slovakia': 'SVK',
  'Slovenia': 'SVN',
  'South Africa': 'ZAF',
  'Spain': 'ESP',
  'Sri Lanka': 'LKA',
  'Sweden': 'SWE',
  'Switzerland': 'CHE',
  'Syria': 'SYR',
  'Taiwan': 'TWN',
  'Thailand': 'THA',
  'Turkey': 'TUR',
  'Ukraine': 'UKR',
  'United Arab Emirates': 'ARE',
  'United Kingdom': 'GBR',
  'United States': 'USA',
  'Uruguay': 'URY',
  'Venezuela': 'VEN',
  'Vietnam': 'VNM',
};

// Helper function to get standardized country code
export const getStandardizedCountryCode = (code: string, name?: string): string => {
  // First try the direct code
  if (code && Object.values(countryNameToCode).includes(code)) {
    return code;
  }
  
  // Then try the name
  if (name && countryNameToCode[name]) {
    return countryNameToCode[name];
  }
  
  // Finally try to find a partial name match
  if (name) {
    const normalizedName = name.toLowerCase();
    const match = Object.entries(countryNameToCode).find(([key]) => 
      key.toLowerCase().includes(normalizedName) || 
      normalizedName.includes(key.toLowerCase())
    );
    if (match) {
      return match[1];
    }
  }
  
  return code || '';
};