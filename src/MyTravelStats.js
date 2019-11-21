import React, {Fragment} from 'react';


export default function MyTravelStats(props){
    // const [languages, setLanguages] = useState([]);

    // useEffect(() => {
    //     function addLanguages(languages) {
    //         props.myCountries.map(country => (
    //         country.languages.map(language => (
    //             setLanguages(languages => [...languages, language.name])
    //             ))
    //         ))
    //     }
    // }, [props.myCountries])

    return(
        <Fragment>
            <h1>My Travel Stats</h1>
            <h3>Total Countries Visited: {props.myCountries.length}</h3>
            <h3>Total Languages Spoken in All Countries Visited: {props.languages.length}</h3>
            <h3>Countries I want to visit: {props.wantCount}</h3>

        </Fragment>
    )
}