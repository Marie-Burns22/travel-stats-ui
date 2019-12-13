import React, { Fragment } from 'react';
import {Toast} from 'react-bootstrap';

export default function Toasts(props) {
    return(
        <Fragment>
            <Toast show={props.showC} onClose={props.toggleShowC}>
                <Toast.Header>
                    <img
                        className="rounded mr-2"
                        alt=""
                    />
                    <strong className="mr-auto">{props.selectedCountry.name} added!</strong>
                </Toast.Header>
            </Toast>

                <Toast show={props.showA} onClose={props.toggleShowA}>
                    <Toast.Header>
                        <img
                            className="rounded mr-2"
                            alt=""
                        />
                        <strong className="mr-auto">{props.selectedCountry.name} is already on your list.</strong>
                    </Toast.Header>
                </Toast>

                <Toast show={props.showB} onClose={props.toggleShowB}>
                    <Toast.Header>
                        <img
                            className="rounded mr-2"
                            alt=""
                        />
                        <strong className="mr-auto">{props.selectedCountry.name} is already on your list.</strong>
                    </Toast.Header>
                </Toast>
        </Fragment>
    )
}