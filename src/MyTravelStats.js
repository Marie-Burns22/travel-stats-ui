import React from 'react';
import {Card, ListGroup} from 'react-bootstrap';


export default function MyTravelStats(props){
    let languageNames = props.languages.map(l => (
        l.name)
    );
    console.log(languageNames);

   
    return(
        <Card style={{ marginTop: "1em" }}>
            <Card.Header bg="info" as="h4">My Travel Stats</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>Total Countries Visited: {props.myCountries.length}</ListGroup.Item>
                <ListGroup.Item>
                    <h5>Total Languages Spoken in All Countries Visited:  {props.languages.length}</h5><br />
                    <h5>Languages: {languageNames.join(", ")} </h5> 
                </ListGroup.Item>
                <ListGroup.Item>Countries I want to visit: {props.wantCount}</ListGroup.Item>
            </ListGroup>
        </Card>
    )
}