import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState('africa');
  const [myCountries, setMyCountries] = useState([]);
  const [wantToVisit, setWantToVisit] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://restcountries.eu/rest/v2/region/${region}`
      );
      setCountries(result.data);
    };
    fetchData();
  }, [region]);

  function handleChange(e){
    const countryName = e.target.value;
    const country = countries.find(c => c.name === countryName);
    setSelectedCountry(country);
    console.log(selectedCountry)

  };

  return (
    <div className="App">
      <h1>Oh the places I've been!</h1>
      <Form>
          <Form.Group onChange={(event) => setRegion(event.target.id)}>
          <Form.Label>Regions</Form.Label>
            <Form.Check as="input"
              type="radio"
              id="africa"
              label="Africa"
              name='regionRadios'
              defaultChecked
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
      </Form>
      
      <Form>
        <Form.Group controlId="countrySelect">
          <Form.Label>Select Country</Form.Label>
          <Form.Control as="select" onChange={handleChange} multiple>
            {countries.map(country => (
    
              <option key={country.name} name='country' value={country.name} >{country.name}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button 
          variant='info' 
          onClick={() => setMyCountries([...myCountries, selectedCountry])}>Add country to places I have been 
        </Button>

        <Button
          variant='success'
          onClick={() => setWantToVisit([...wantToVisit, selectedCountry])}>Add country to places I want to go
        </Button>

      </Form>
          <h1>My Countries</h1>
          {myCountries.map(country => (
            <p key={country.name}>{country.name}</p>
          ))}

        <h1>Places I Want To Go!</h1>
        {wantToVisit.map(country => (
          <p key={country.name}>{country.name}</p>
        ))}
    </div>
  );
}

export default App;
