import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import WorldMap from './components/WorldMap';
import Controls from './components/Controls';
import CountrySelector from './components/CountrySelector';

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4 py-8 h-screen">
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
            <WorldMap />
            <Controls />
            <CountrySelector />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;