import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
    
    return (
        <div>
            

        </div>
    );
}

Keg.propTypes = {
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
    alcoholContent: PropTypes.number,
    type: PropTypes.string
};

export default Keg;

