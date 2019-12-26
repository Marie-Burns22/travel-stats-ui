import React from 'react';
import { Card, ListGroup, ListGroupItem, Image, Row, Col } from 'react-bootstrap';

export default function CountryInfo({country}) {
    
    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return(
        <Card style={{ marginTop: "1em" }} bg="success">
            <Card.Header as="h4">
                <Card.Title className="justify-content-between" as="h4">
                    <Row>
                    <Col>
                        {country.name} 
                    </Col>
                    <Col>
                        <Image src={country.flag} style={{height: "2em"}}/>
                    </Col>
                    </Row>
                </Card.Title>
            </Card.Header>
            {!country.name ? null :
                <ListGroup className="list-group-flush">
                    <ListGroupItem >Languages: {!country.languages ? '' : country.languages.map(language => (
                        <li key={language.name}>{language.name}</li>
                        ))} </ListGroupItem>
                    <ListGroupItem>Currencies: {!country.currencies ? '' : country.currencies.map(c => (
                        <li key={c.name}>{c.name}</li>
                        ))} </ListGroupItem>
                    <ListGroupItem>Population: {!country.population ? '' : formatNumber(country.population)}</ListGroupItem>
                    <ListGroupItem>Capital: {!country.capital ? '' : country.capital}</ListGroupItem>
                    <ListGroupItem>Borders: {country.borders.length === 0 ? 'No land borders' : country.borders.join(", ")}</ListGroupItem>
                </ListGroup>
            }
        </Card>
    )
} 