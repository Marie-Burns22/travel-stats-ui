import React from 'react';
import { CardGroup, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

export default function MyCountriesList(props) {
    return(
        // {/* TODO: Need to add delete button to each country rendered in the lists. */ }
        <CardGroup className="container">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Where I've Been</Card.Title>
                    <Card.Text>
                        The purpose of travel is not the number of stamps in your passport, its the experiences and the people. Each place on the list represents people and places that have changed who you are.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    {props.myCountries.map(country => (
                        <ListGroupItem key={country.name}>{country.name}</ListGroupItem>
                    // <Card.Link href="#">Card Link</Card.Link>
                    ))}
                </ListGroup>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Where I Want To Go</Card.Title>
                    <Card.Text>
                        The purpose of travel is not the number of stamps in your passport, its the experiences and the people. Each place on the list represents people and places that have changed who you are.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    {props.wantToVisit.map(country => (
                        <ListGroupItem key={country.name}>{country.name}</ListGroupItem>
                        // <Card.Link href="#">Card Link</Card.Link>
                    ))}
                </ListGroup>
            </Card>
        </CardGroup>
    )
}