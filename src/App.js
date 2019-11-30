import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Jumbotron, Card, Toast } from 'react-bootstrap';
import axios from 'axios';
import MyTravelStats from './MyTravelStats';
import MyCountriesList from './MyCountriesList';
import CountryInfo from './CountryInfo';
import WantToVisit from './WantToVisit';

function App() {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState('africa');
  const [myCountries, setMyCountries] = useState([]);
  const [wantToVisit, setWantToVisit] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});
  const [languages, setLanguages] = useState([]);

  // Toast(bootstrap component) toggled on when add button clicked to show if a country is alredy on a list
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);
  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);

  // useEffect hook calls API to get countries for a specific region based on region selected by user in form. The selection set state for region and the API call is triggered by changes to the region state. 
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://restcountries.eu/rest/v2/region/${region}`
      );
      setCountries(result.data);
    };
    fetchData();
  }, [region]);

  //handleChange uses selection from form to find a country and set state for selectedCountry. 
  function handleChange(e){
    const countryName = e.target.value;
    const country = countries.find(c => c.name === countryName);
    setSelectedCountry(country);
  };

  // TODO: Add check to only add the language to the list if it is not already in the array.
  const addToLanguages = (selectedCountry) => {

    selectedCountry.languages.map(language => (
      setLanguages(languages => [...languages, language.name])
    ))
  }

  const addToMyCountries = () => {
    let onLists = checkLists();
    onLists ? toggleShowA() : setMyCountries(myCountries => [...myCountries, selectedCountry]);
    addToLanguages(selectedCountry);
  }

  const addToWantToVisit = () => {
    let onLists = checkLists();
    onLists ? toggleShowB() : setWantToVisit(wantToVisit=> [...wantToVisit, selectedCountry])
  }
  // Check to see if the selectedCountry is already on a list before adding it.
  const checkLists = () => {
    let selectedName = selectedCountry.name;
    let foundInVisitedList = myCountries.find(c => c.name === selectedName);
    let foundInWantedList = wantToVisit.find(c => c.name === selectedName);
    return (foundInVisitedList || foundInWantedList) ? true : false;
  }

  return (
    <div>
      <Jumbotron style={{ backgroundImage: 'url("Myanmar.jpg")', backgroundSize: "cover"}} className="img-fluid" fluid>
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
            <Card>
                <Form>
                  <Card.Header as="h4">Select a Region</Card.Header>
                  
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
              </Form>

              <Form>
                  <Form.Group controlId="countrySelect">
                      <Form.Control as="select" onChange={handleChange} value={selectedCountry}>
                        <option>Select a Country</option>
                        {countries.map(country => (
                          <option key={country.name} name='country'>{country.name}</option>
                        ))}
                      </Form.Control>
                  </Form.Group>
              </Form>

            </Card>
          </Col>

          <Col>
            <CountryInfo country={selectedCountry} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button 
              variant='info'
              disabled={!selectedCountry.name ? true : false}
              onClick={addToMyCountries}>Add country to places I have been 
            </Button>
            <Toast show={showA} onClose={toggleShowA}>
              <Toast.Header>
                <img
                  className="rounded mr-2"
                  alt=""
                />
                <strong className="mr-auto">{selectedCountry.name} is already on your list.</strong>
              </Toast.Header>
            </Toast>
          </Col>
          <Col>
            <Button
              variant='success'
              disabled={!selectedCountry.name ? true : false}
              onClick={addToWantToVisit}>Add country to places I want to go
            </Button>
            <Toast show={showB} onClose={toggleShowB}>
              <Toast.Header>
              <img
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">{selectedCountry.name} is already on your list.</strong>
            </Toast.Header>
            </Toast>
          </Col>
        </Row>
        <Row>
          <Col>
            <MyCountriesList myCountries={myCountries} />
          </Col>
          <Col>
            <WantToVisit wantToVisit={wantToVisit} />
          </Col>
        </Row>
        
        <MyTravelStats myCountries={myCountries} languages={languages} wantCount={wantToVisit.length} />
      </Container>
    </div>
  );
}

export default App;
