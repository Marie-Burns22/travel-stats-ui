import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
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
      <Form>
        <fieldset>
        <Form.Group>
          <Form.Label>Regions</Form.Label>
            <Form.Check as="input"
              type="radio"
              id="africaRadio"
              label="Africa"
              name='regionRadios'
              />
          
            <Form.Check as="input"
              type="radio"
              id="americasRadio"
              label="Americas"
              name='regionRadios'
            />

            <Form.Check as="input"
              type="radio"
              id="asiaRadio"
              label="Asia"
              name='regionRadios'
            />

            <Form.Check as="input"
              type="radio"
              id="europeRadio"
              label="Europe"
              name='regionRadios'
            />

            <Form.Check as="input"
              type="radio"
              id="Oceania"
              label="Oceania"
              name='regionRadios'
            />
        </Form.Group>
        </fieldset>
      </Form>
      
        {countries.map(country => (
          <li key={country.name}>
            <p>{country.name}</p>
          </li>
        ))}
    </div>
  );
}

export default App;
