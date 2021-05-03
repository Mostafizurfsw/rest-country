import React from 'react';

const Country = (props) => {
    // console.log(props)
    const {name, capital, flag, region, subregion, population, borders, nativeName, numericCode, currencies} = props.country;
    const handleAddCountry = props.handleAddCountry;

    const countryStyle = {
        border: '2px solid gray',
        margin: '10px',
        padding: '10px',
    }

    return (
        <div style={countryStyle}>
            <h1>This is {name}</h1>
            <img style={{height:"100px"}} src={flag} alt=""/>
            <h2>Capital City : {capital}</h2>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;