import React from 'react';
import Select from 'react-select';
import { useMapStore } from '../store/mapStore';
import { countryData } from '../data/countries';
import { countryZoomLevels } from '../data/zoomLevels';

interface Option {
  value: string;
  label: string;
}

const CountrySelector = () => {
  const { selectedCountry, setSelectedCountry, setCenter, setZoom } = useMapStore();

  const handleChange = (option: Option | null) => {
    if (!option) {
      setSelectedCountry(null);
      setCenter([0, 0]);
      setZoom(1);
      return;
    }

    const country = countryData.find(c => c.code === option.value);
    
    if (country) {
      console.log('Setting selected country:', {
        code: country.code,
        name: country.name,
        coordinates: country.coordinates
      });
      
      setSelectedCountry(country.code);
      setCenter(country.coordinates);
      setZoom(countryZoomLevels[country.code] || countryZoomLevels.default);
    }
  };

  const options = countryData
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(country => ({
      value: country.code,
      label: country.name
    }));

  const selectedOption = selectedCountry 
    ? options.find(option => option.value === selectedCountry)
    : null;

  return (
    <div className="absolute top-8 left-8 w-72">
      <Select<Option>
        value={selectedOption}
        onChange={handleChange}
        options={options}
        className="text-sm"
        classNamePrefix="react-select"
        placeholder="Search for a country..."
        isClearable
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: '#3B82F6',
            primary75: '#60A5FA',
            primary50: '#93C5FD',
            primary25: '#BFDBFE',
          },
        })}
      />
    </div>
  );
};

export default CountrySelector;