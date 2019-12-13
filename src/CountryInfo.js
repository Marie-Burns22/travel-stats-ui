import React from 'react';
import { Card, ListGroup, ListGroupItem, Image, Row, Col } from 'react-bootstrap';

export default function CountryInfo({country}) {
    
    return(
        <Card style={{ marginTop: "1em" }}>
            <Card.Header as="h4">
                {!country.name 
                ?
                <Card.Title>Select a Region and Country To See Its Info</Card.Title>
                :
                    <Card.Title className="justify-content-between">
                        <Row>
                        <Col>
                            {country.name} 
                        </Col>
                        <Col>
                            <Image src={country.flag} style={{height: "2em"}}/>
                        </Col>
                        </Row>
                    </Card.Title>
                }
            </Card.Header>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Languages: {!country.languages ? '' : country.languages.map(language => (
                    <li key={language.name}>{language.name}</li>
                ))} </ListGroupItem>
                <ListGroupItem>Currencies: {!country.currencies ? '' : country.currencies.map(c => (
                    <li key={c.name}>{c.name}</li>
                ))} </ListGroupItem>
                <ListGroupItem>Population: {!country.population ? '' : country.population}</ListGroupItem>
                <ListGroupItem>Capital: {!country.capital ? '' : country.capital}</ListGroupItem>
            </ListGroup>
        </Card>
    )
} 