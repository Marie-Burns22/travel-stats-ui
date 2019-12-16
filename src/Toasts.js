import React, { Fragment } from 'react';
import {Toast} from 'react-bootstrap';

export default function Toasts(props) {
    return(
        <Fragment>
            <Toast show={props.showAddError} onClose={props.toggleShowAddError}>
                <Toast.Header>
                    <strong className="mr-auto">{props.selectedCountry.name} is already on your list.</strong>
                </Toast.Header>
            </Toast>

            <Toast show={props.showAdded} onClose={props.toggleShowAdded}>
                <Toast.Header>
                    <strong className="mr-auto">{props.selectedCountry.name} added!</strong>
                </Toast.Header>
            </Toast>
        </Fragment>
    )
}