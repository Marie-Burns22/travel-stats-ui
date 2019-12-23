import React from 'react';
import { Jumbotron, Container} from 'react-bootstrap';
import './Jumbo.css';

export default function Jumbo(){
    return (
        <Jumbotron id="jumbo">
            <Container>
                <h1>Oh the places I've been!</h1>
                <p className="lead">
                    So many places to visit in the world. Where have you been? Where do you want to go?
                </p>
            </Container>
        </Jumbotron>
    )
}