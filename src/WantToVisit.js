import React from 'react';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'

export default function WantToVisit(props) {
    return(
        <Card>
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
    )
}