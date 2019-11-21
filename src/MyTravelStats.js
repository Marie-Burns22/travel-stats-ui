import React from 'react';

export default function MyTravelStats(props){
    return(
        <div>
            <h1>My Travel Stats</h1>
            <h3>Total Countries Visited: {props.myCountries.length}</h3>
        </div>
    )
}