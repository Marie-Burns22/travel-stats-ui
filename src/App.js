import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://restcountries.eu/rest/v2/regionalbloc/eu'
      );
      setCountries(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Oh the places I've been!</h1>
      
        {countries.map(country => (
          <li key={country.name}>
            <p>{country.name}</p>
          </li>
        ))}
    </div>
  );
}

export default App;
