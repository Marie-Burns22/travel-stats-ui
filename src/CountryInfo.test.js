import React from 'react'
import { shallow } from 'enzyme'
import CountryInfo from './CountryInfo'

describe('Country', () => {
    const country = {
        name: "Mexico",
        topLevelDomain: [
            ".mx"
        ],
        alpha2Code: "MX",
        alpha3Code: "MEX",
        callingCodes: [
            "52"
        ],
        capital: "Mexico City",
        altSpellings: [
            "MX",
            "Mexicanos",
            "United Mexican States",
            "Estados Unidos Mexicanos"
        ],
        region: "Americas",
        subregion: "Central America",
        population: 122273473,
        latlng: [
            23,
            -102
        ],
        demonym: "Mexican",
        area: 1964375,
        gini: 47,
        timezones: [
            "UTC-08:00",
            "UTC-07:00",
            "UTC-06:00"
        ],
        borders: [
            "BLZ",
            "GTM",
            "USA"
        ],
        nativeName: "México",
        numericCode: "484",
        currencies: [
            {
                code: "MXN",
                name: "Mexican peso",
                symbol: "$"
            }
        ],
        languages: [
            {
                iso639_1: "es",
                iso639_2: "spa",
                name: "Spanish",
                nativeName: "Español"
            }
        ],
        translations: {
            de: "Mexiko",
            es: "México",
            fr: "Mexique",
            ja: "メキシコ",
            it: "Messico",
            br: "México",
            pt: "México",
            nl: "Mexico",
            hr: "Meksiko",
            fa: "مکزیک"
        },
        flag: "https://restcountries.eu/data/mex.svg",
        regionalBlocs: [
            {
                acronym: "PA",
                name: "Pacific Alliance",
                otherAcronyms: [],
                otherNames: [
                    "Alianza del Pacífico"
                ]
            },
            {
                acronym: "NAFTA",
                name: "North American Free Trade Agreement",
                otherAcronyms: [],
                otherNames: [
                    "Tratado de Libre Comercio de América del Norte",
                    "Accord de Libre-échange Nord-Américain"
                ]
            }
        ],
        cioc: "MEX"
    }

    it('displays the name', () => {
        const wrapper = shallow(<CountryInfo country={country} />)
        expect(wrapper.find('#countryName').text()).toEqual('Mexico')
    });

})