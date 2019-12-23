import React from 'react';
import {Card, ListGroup} from 'react-bootstrap';


export default function MyTravelStats(props){
    let languageNames = props.languages.map(l => (
        l.name)
    );
    
    let europe = props.myCountries
        .filter(c => c.region === "Europe")
        .map(country => country.name)
    
    let asia = props.myCountries
        .filter(c => c.region === "Asia")
        .map(country => country.name)
    
    let africa = props.myCountries
        .filter(c => c.region === "Africa")
        .map(country => country.name)
    
    let americas = props.myCountries
        .filter(c => c.region === "Americas")
        .map(country => country.name)

    let oceania = props.myCountries
        .filter(c => c.region === "Oceania")
        .map(country => country.name)
    

    return(
        <Card bg="success" style={{ marginTop: "1em", marginBotton: "2em", paddingBotton: "2em" }}>
            <Card.Header bg="info" as="h4">My Travel Stats</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item><strong>Total Countries Visited:</strong> {props.myCountries.length}
                {(africa.length) ? <ListGroup.Item><strong>Africa ({africa.length}):</strong> {africa.join(", ")}</ListGroup.Item> : null}
                {(americas.length) ? <ListGroup.Item><strong>Americas ({americas.length}):</strong> {americas.join(", ")}</ListGroup.Item> : null}
                {(asia.length) ? <ListGroup.Item><strong>Asia ({asia.length}):</strong> {asia.join(", ")}</ListGroup.Item> : null}
                {(europe.length) ? <ListGroup.Item><strong>Europe ({europe.length}):</strong> {europe.join(", ")}</ListGroup.Item> : null}
                {(oceania.length) ? <ListGroup.Item><strong>Oceania ({oceania.length}):</strong> {oceania.join(", ")}</ListGroup.Item> : null}
                
                </ListGroup.Item>
                    {(props.languages.length) ?<ListGroup.Item>
                    <strong>Total Languages Spoken in All Countries Visited:</strong>  {props.languages.length}<br />
                    <strong>Languages:</strong> {languageNames.join(", ")}
                </ListGroup.Item> : null }
                <ListGroup.Item><strong>Countries I want to visit:</strong> {props.wantCount}</ListGroup.Item>
            </ListGroup>
        </Card>
    )
}