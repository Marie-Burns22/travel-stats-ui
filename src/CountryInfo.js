import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

export default function CountryInfo({country}) {
    
    return(

        <Card>
            <Card.Header as="h4">
                {!country.name 
                ?
                <Card.Title>Select a Region and Country To See Its Info</Card.Title>
                :
                <Card.Title>{country.name}</Card.Title>
                }
            </Card.Header>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Languages: {!country.languages ? '' : country.languages.map(language => (
                    <li key={language.name}>{language.name}</li>
                ))} </ListGroupItem>

            </ListGroup>
        </Card>
    )
} 