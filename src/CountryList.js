import React from 'react';
import {Card, ListGroup, ListGroupItem, Image, Button} from 'react-bootstrap'

export default function CountryList(props) {
    return(
        <Card border={props.border}>
            <Card.Body >
                <Card.Title >{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                {props.countries.map(country => (
                    <ListGroupItem
                        className="justify-content-between"
                        key={country.name}>
                        <Image 
                            src={country.flag} 
                            style={{ height: "2em", marginRight: "1em" }} 
                            thumbnail 
                        />
                        {country.name}
                        <Button 
                            variant="secondary" 
                            className="float-right" 
                            size="sm" style={{paddingRight: "1em"}} 
                            onClick={() => props.remove(country.name, props.countries)}
                        >
                            X
                        </Button>
                        {props.name === "want" ? 
                            <Button 
                                className="float-right" 
                                size="sm" 
                                style={{ paddingRight: "1em" }}
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