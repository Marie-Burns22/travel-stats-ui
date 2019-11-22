import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Jumbotron, Card } from 'react-bootstrap';
import axios from 'axios';
import MyTravelStats from './MyTravelStats';
import MyCountriesList from './MyCountriesList';
import CountryInfo from './CountryInfo';
// import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState('africa');
  const [myCountries, setMyCountries] = useState([]);
  const [wantToVisit, setWantToVisit] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});
  const [languages, setLanguages] = useState([]);

  // useEffect hook calls API t0 get countries for a specific region based on region selected by user in form. The selection set state for region and the API call is triggered by changes to the region state. 
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://restcountries.eu/rest/v2/region/${region}`
      );
      setCountries(result.data);
    };
    fetchData();
  }, [region]);

  //handleChange uses selection from form to find a country and set state for selectedCountry. Buttons at bottom of the form use the selectedCountry to add it to the myCountries state array or wantToVisit state array.
  function handleChange(e){
    const countryName = e.target.value;
    const country = countries.find(c => c.name === countryName);
    setSelectedCountry(country);
  };

  // Add check to only add the language to the list if it is not already in the array.
  const addToLanguages = (selectedCountry) => {
    console.log(selectedCountry.name)
    selectedCountry.languages.map(language => (
      setLanguages(languages => [...languages, language.name])
    ))
  }

  const addToMyCountries = () => {
    setMyCountries(myCountries => [...myCountries, selectedCountry]);
    addToLanguages(selectedCountry);
  }

  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Oh the places I've been!</h1>
          <p>
            So many places to visit in the world. Where have you been? Where do you want to go?
          </p>
        </Container>
      </Jumbotron>
        
      <Container>
        {/* Radio buttons to select region which triggers API call (uses region name in the URL) */}
        <Row>
          <Col>
            <Form>
              <Card>
                <Card.Header>Select a Region</Card.Header>
                <Form.Group onChange={(event) => setRegion(event.target.id)}>
                  <Card.Body>
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
                </Card.Body>
              </Form.Group>
            </Card>
            <br />
          </Form>

          <Form>
            <Card>
              <Card.Header>Select a Country</Card.Header>
              <Form.Group controlId="countrySelect">

                  <Form.Control as="select" onChange={handleChange}>
                    {countries.map(country => (
                      <option key={country.name} name='country' value={country.name} >{country.name}</option>
                    ))}
                  </Form.Control>

              </Form.Group>
            </Card>
            {/* Need to add check for duplicate countries when either button is clicked. */}

          </Form>
          </Col>
          {/* Selection of countries rendered based on region selection. Selected country is saved to state as selectedCountry. Buttons use selectedCountry state to add country object to one of two lists. */}
          <Col>
            <CountryInfo country={selectedCountry} />
          </Col>
        </Row>
        
            <Button 
              variant='info' 
              onClick={addToMyCountries}>Add country to places I have been 
            </Button>

            <Button
              variant='success'
              onClick={() => setWantToVisit([...wantToVisit, selectedCountry])}>Add country to places I want to go
            </Button>
        <MyCountriesList myCountries={myCountries} wantToVisit={wantToVisit} />
        <MyTravelStats myCountries={myCountries} languages={languages} wantCount={wantToVisit.length}/>
      </Container>
    </div>
  );
}

export default App;
