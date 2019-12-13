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
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);
  const [showC, setShowC] = useState(false);
  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);
  const toggleShowC = () => setShowC(!showC);
  
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
    setShowA(false);
    setShowB(false);
    setShowC(false);
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
      toggleShowA();
    } else {
      setMyCountries(myCountries => [...myCountries, selectedCountry]);
      addToLanguages(selectedCountry.languages);
      toggleShowC();
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
      toggleShowB();
     } else {
       setWantToVisit(wantToVisit=> [...wantToVisit, selectedCountry])
       toggleShowC();

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
          <Col>
            <Card>
              <Forms 
                setRegion={setRegion} 
                handleChange={handleChange} 
                selectedCountry={selectedCountry} 
                countries={countries}
                addToMyCountries={addToMyCountries}
                addToWantToVisit={addToWantToVisit}
                showA={showA}
                showB={showB}
                showC={showC}
                toggleShowA={toggleShowA}
                toggleShowB={toggleShowB}
                toggleShowC={toggleShowC}
                />
            </Card>
          </Col>

          <Col>
            <CountryInfo country={selectedCountry} />
          </Col>
        </Row>
        <br />

        <Row>
          <Col>
            <CountryList
              countries={myCountries}
              text="The purpose of travel is not the number of stamps in your passport, its the experiences and the people. Each place on the list represents people and places that have changed who you are."
              title="Where I have been"
              remove={removeFromList}
              border="info"
            />
          </Col>
          <Col>
            <CountryList
              countries={wantToVisit}
              text="What are you curious about?"
              title="Where I want to go"
              remove={removeFromList}
              border="primary"
              name="want"
              moveList={moveList}
            />
          </Col>
        </Row>
        <br />
        <MyTravelStats myCountries={myCountries} languages={languages} wantCount={wantToVisit.length} />
        </Container>
        <br />
    </Fragment>
  );
}

export default App;
