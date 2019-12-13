import React from 'react';
import {Form, Card, Toast, Button} from 'react-bootstrap'

export default function Forms(props) {

    return (
        <Form>
            <Card.Header as="h4">Select a Region</Card.Header>
            {/* Radio buttons to select region which triggers API call (uses region name in the URL) */}
            <Card.Body>
                <Form.Group onChange={(event) => props.setRegion(event.target.id)}>
                    <Form.Check as="input"
                        type="radio"
                        id="africa"
                        label="Africa"
                        name='regionRadios'
                        defaultChecked
                    />

                    <Form.Check as="input"
                        type="radio"
                        id="americas"
                        label="Americas"
                        name='regionRadios'
                    />

                    <Form.Check as="input"
                        type="radio"
                        id="asia"
                        label="Asia"
                        name='regionRadios'
                    />

                    <Form.Check as="input"
                        type="radio"
                        id="europe"
                        label="Europe"
                        name='regionRadios'
                    />

                    <Form.Check as="input"
                        type="radio"
                        id="oceania"
                        label="Oceania"
                        name='regionRadios'
                    />
                </Form.Group>

                <Form.Group controlId="countrySelect">
                    <Form.Control as="select" onChange={props.handleChange} value={props.selectedCountry.name}>
                        <option>Select a Country</option>
                        {props.countries.map(country => (
                            <option key={country.name} name='country'>{country.name}</option>
                            ))}
                    </Form.Control>
                </Form.Group>

                <Toast show={props.showC} onClose={props.toggleShowC}>
                    <Toast.Header>
                        <img
                            className="rounded mr-2"
                            alt=""
                        />
                        <strong className="mr-auto">{props.selectedCountry.name} added!</strong>
                    </Toast.Header>
                </Toast>

                <Button
                    variant='info'
                    block
                    disabled={!props.selectedCountry.name ? true : false}
                    onClick={props.addToMyCountries}>Add {props.selectedCountry.name} to places I have been
                </Button>

                <Toast show={props.showA} onClose={props.toggleShowA}>
                    <Toast.Header>
                        <img
                            className="rounded mr-2"
                            alt=""
                        />
                        <strong className="mr-auto">{props.selectedCountry.name} is already on your list.</strong>
                    </Toast.Header>
                </Toast>

                <Button
                    variant='success'
                    block
                    disabled={!props.selectedCountry.name ? true : false}
                    onClick={props.addToWantToVisit}>Add {props.selectedCountry.name} to places I want to go
                </Button>
                <Toast show={props.showB} onClose={props.toggleShowB}>
                    <Toast.Header>
                        <img
                            className="rounded mr-2"
                            alt=""
                        />
                        <strong className="mr-auto">{props.selectedCountry.name} is already on your list.</strong>
                    </Toast.Header>
                </Toast>
            </Card.Body>
        </Form>
    )
}