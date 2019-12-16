import React, { useState, useEffect, Fragment } from 'react';
import { Container, Row, Col, Jumbotron, Card} from 'react-bootstrap';
import axios from 'axios';
import MyTravelStats from './MyTravelStats';
import CountryInfo from './CountryInfo';
import CountryList from './CountryList';
import Forms from './Forms';

function App() {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState('africa');
  const [myCountries, setMyCountries] = useState([]);
  const [wantToVisit, setWantToVisit] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});
  const [languages, setLanguages] = useState([]);

  // Toast(bootstrap component) toggled on when add button clicked to show if a country is alredy on a list
  const [showAddError, setShowAddError] = useState(false);
  const [showAdded, setShowAdded] = useState(false);
  const toggleShowAddError = () => setShowAddError(!showAddError);
  const toggleShowAdded = () => setShowAdded(!showAdded);
  
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

  // handleChange uses selection from form to find a country and set state for selectedCountry. 
  function handleChange(e){
    setShowAddError(false);
    setShowAdded(false);
    const countryName = e.target.value;
    const country = countries.find(c => c.name === countryName);
    setSelectedCountry(country);
  };

  const addToLanguages = (countryLanguages) => {
    let newLanguageList = [...languages]
    countryLanguages.forEach(language => {
      let found = languages.find(l => l.name === language.name);
      if (!found) {
        let newLanguage = { name: language.name, count: 1 };
        newLanguageList.push(newLanguage);
      } else {
        found.count++;
        let index = newLanguageList.findIndex(l => l.name === found.name);
        newLanguageList.splice(index, 1, found);
      }
    })
    setLanguages(newLanguageList);
  }

  // called when button clicked. Adds selectedCountry to list if not already on a list.
  const addToMyCountries = () => {
    let onLists = checkLists();
    if (onLists) {
      toggleShowAddError();
    } else {
      setMyCountries(myCountries => [...myCountries, selectedCountry]);
      addToLanguages(selectedCountry.languages);
      toggleShowAdded();
   }
  }
  const moveList = (countryName, list) => {
      let moveCountry = wantToVisit.find(c => c.name === countryName)
      removeFromList(countryName, list)
      setMyCountries(myCountries => [...myCountries, moveCountry]);
      addToLanguages(moveCountry.languages);
  }

  // called when button clicked. Adds selectedCountry to list if not already on a list.
  const addToWantToVisit = () => {
    let onLists = checkLists();
    if (onLists) {
      toggleShowAddError();
     } else {
       setWantToVisit(wantToVisit=> [...wantToVisit, selectedCountry])
       toggleShowAdded();

    }
  }
  // Check to see if the selectedCountry is already on a list before adding it.
  const checkLists = () => {
    let selectedName = selectedCountry.name;
    let foundInVisitedList = myCountries.find(c => c.name === selectedName);
    let foundInWantedList = wantToVisit.find(c => c.name === selectedName);
    return (foundInVisitedList || foundInWantedList) ? true : false;
  }

  const removeFromList = (countryName, list) => {
    let newList = [...list];
    let index = newList.findIndex(c => c.name === countryName);
    let languagesToRemove = newList[index].languages;
    if (index !== -1) {
      newList.splice(index, 1);
      if (list === wantToVisit) {
        setWantToVisit(newList);
      } else {
        removeLanguages(languagesToRemove);
        setMyCountries(newList);
      }
    }
  }

  const removeLanguages = (languagesToRemove) => {
    let newList = [...languages];
    languagesToRemove.forEach(language => {
      let foundLanguage = newList.find(l => l.name === language.name);
      foundLanguage.count--;
      let index = newList.findIndex(l => l.name === language.name);
      if (foundLanguage.count === 0) {
        newList.splice(index, 1)
      } else {
        newList.splice(index, 1, foundLanguage)
      }
    })
    setLanguages(newList)
  }

  return (
    <Fragment>
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
          <Col sm>
            <Card style={{ marginTop: "1em" }}>
              <Forms 
                setRegion={setRegion} 
                handleChange={handleChange} 
                selectedCountry={selectedCountry} 
                countries={countries}
                addToMyCountries={addToMyCountries}
                addToWantToVisit={addToWantToVisit}
                showAddError={showAddError}
                showAdded={showAdded}
                toggleShowAddError={toggleShowAddError}
                toggleShowAdded={toggleShowAdded}
                />
            </Card>
          </Col>

          <Col sm>
            <CountryInfo country={selectedCountry} />
          </Col>
        </Row>

        <Row>
          <Col sm>
            <CountryList
              bg="info"
              countries={myCountries}
              text="The purpose of travel is not the number of stamps in your passport, its the experiences and the people. Each place on the list represents people and places that have changed who you are."
              title="Where I have been"
              remove={removeFromList}
            />
          </Col>

          <Col sm>
            <CountryList
              bg="success"
              countries={wantToVisit}
              text="What are you curious about?"
              title="Where I want to go"
              remove={removeFromList}
              moveList={moveList}
              name="want"
            />
          </Col>
        </Row>

        <MyTravelStats 
            myCountries={myCountries} 
            languages={languages} 
            wantCount={wantToVisit.length} 
        />
       </Container>

    </Fragment>
  );
}

export default App;
