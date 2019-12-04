import React from 'react';
import {Form, Card} from 'react-bootstrap'

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
                    <Form.Control as="select" onChange={props.handleChange} value={props.selectedCountry}>
                        <option>Select a Country</option>
                        {props.countries.map(country => (
                            <option key={country.name} name='country'>{country.name}</option>
                            ))}
                    </Form.Control>
                </Form.Group>
            </Card.Body>
        </Form>
    )
}