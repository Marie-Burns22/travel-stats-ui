import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios';

import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState('asia');
  // const [url, setUrl] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://restcountries.eu/rest/v2/region/${region}`
      );
      setCountries(result.data);
    };
    fetchData();
  }, [region]);

  return (
    <div className="App">
      <h1>Oh the places I've been!</h1>
      <Form>
        <fieldset>
          <Form.Group onChange={(event) => setRegion(event.target.id)}>
          <Form.Label>Regions</Form.Label>
            <Form.Check as="input"
              type="radio"
              id="africa"
              label="Africa"
              name='regionRadios'
              checked={region === "africa"}
              />
          
            <Form.Check as="input"
              type="radio"
              id="americas"
              label="Americas"
              name='regionRadios'
            />

            <Form.Check as="input"
              type="radio"
              id="asia"
              label="Asia"
              name='regionRadios'
              checked={region === "asia"}
            />

            <Form.Check as="input"
              type="radio"
              id="europe"
              label="Europe"
              name='regionRadios'
            />

            <Form.Check as="input"
              type="radio"
              id="oceania"
              label="Oceania"
              name='regionRadios'
            />
        </Form.Group>
        </fieldset>
      </Form>
      
        {countries.map(country => (
            <p key={country.name}>{country.name}</p>
        ))}
    </div>
  );
}

export default App;
