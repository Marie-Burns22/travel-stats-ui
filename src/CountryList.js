import React from 'react';
import {Card, ListGroup, ListGroupItem, Image, Button} from 'react-bootstrap';

export default function CountryList(props) {
    return(
        <Card bg={props.bg} style={{marginTop: "1em"}}>
            <Card.Header as="h4">{props.title}</Card.Header>

            <Card.Body >
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                {props.countries.map(country => (
                    <ListGroupItem
                        className="justify-content-between"
                        key={country.name}
                        onClick={() => props.selectCountryFromList(country.name)}>
                        <Image 
                            src={country.flag} 
                            style={{ height: "2em", marginRight: "1em" }} 
                            thumbnail 
                        />
                        {country.name}
                        <Button 
                            variant="danger" 
                            className="float-right" 
                            size="sm" style={{marginRight: "1em"}} 
                            onClick={() => props.remove(country.name, props.countries)}
                        >
                            X
                        </Button>
                        {props.name === "want" ? 
                            <Button 
                                className="float-right" 
                                size="sm" 
                                style={{ marginRight: "1em" }}
                                onClick={() => props.moveList(country.name, props.countries)}
                            >
                                I went!
                            </Button> 
                        : null}
                    </ListGroupItem>
                ))}
            </ListGroup>
        </Card>
    )
}