import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value = 0}) => {

    const handleAdd = () => {
        // setCounter( counter + 1 );
        setCounter( (c) => c + 1 );
    };

    const handleReset = () => {
        setCounter( value );
    };

    const handleSubtract = () => {
        setCounter( counter - 1 );
    };

    const [ counter, setCounter ] = useState( value );

    return (
        <>
            <h1> CounterApp </h1>
            <h2>{ counter }</h2>
            <button id="hAdd" onClick={ handleAdd }> +1 </button>
            <button id="hReset" onClick={ handleReset }> Reset </button>
            <button id="hSubtract" onClick={ handleSubtract }> -1 </button>
        </>
    );
};

CounterApp.propTypes = {
    // value : PropTypes.number.isRequired
    value : PropTypes.number
};

export default CounterApp;
