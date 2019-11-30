import React from 'react';
import { Card, ListGroup, ListGroupItem, Image} from 'react-bootstrap';

export default function MyCountriesList(props) {
    return(
        // TODO: Need to add delete button to each country rendered in the lists. */ }
            <Card>
                <Card.Body>
                    <Card.Title>Where I've Been</Card.Title>
                    <Card.Text>
                        The purpose of travel is not the number of stamps in your passport, its the experiences and the people. Each place on the list represents people and places that have changed who you are.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    {props.myCountries.map(country => (
                        <ListGroupItem key={country.name}><Image src={country.flag} style={{height: "2em"}} thumbnail />{country.name}</ListGroupItem>
                    ))}
                </ListGroup>
            </Card>
    )
}