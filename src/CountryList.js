import React from 'react';
import {Card, ListGroup, ListGroupItem, Image, Button} from 'react-bootstrap'

export default function CountryList(props) {
    return(
        <Card>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                {props.countries.map(country => (
                    <ListGroupItem 
                        key={country.name}>
                        <Image 
                            src={country.flag} 
                            style={{ height: "2em" }} 
                            thumbnail 
                        />
                        {country.name}
                        <Button variant="secondary" size="sm" onClick={() => props.remove(country.name, props.countries)}>
                            X
                        </Button>
                    </ListGroupItem>
                ))}
            </ListGroup>
        </Card>
    )
}