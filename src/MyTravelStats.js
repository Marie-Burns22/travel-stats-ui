import React, {Fragment} from 'react';
import {Card, ListGroup} from 'react-bootstrap';


export default function MyTravelStats(props){
   
    return(
        <Card>
            <Card.Header bg="info" as="h4">My Travel Stats</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>Total Countries Visited: {props.myCountries.length}</ListGroup.Item>
                <ListGroup.Item>Total Languages Spoken in All Countries Visited: {props.languages.length}</ListGroup.Item>
                <ListGroup.Item>Countries I want to visit: {props.wantCount}</ListGroup.Item>
            </ListGroup>
        </Card>
    )
}