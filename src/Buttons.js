import React from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';

export default function Buttons(props){
    return(
        <ButtonGroup className="mt-3">
            <Button
                variant='primary'
                disabled={!props.selectedCountry.name ? true : false}
                onClick={props.addToMyCountries}>Add <strong> {props.selectedCountry.name}</strong> to places I have been
            </Button>

            <Button
                variant='info'
                disabled={!props.selectedCountry.name ? true : false}
                onClick={props.addToWantToVisit}>Add <strong>{props.selectedCountry.name}</strong> to places I want to go
            </Button>
        </ButtonGroup>

    )
}