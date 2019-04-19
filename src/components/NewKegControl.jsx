import React from 'react';
import PropTypes from 'prop-types';
import NewKegForm from './NewKegForm';

class NewKegControl extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <NewKegForm />
        )
    }
}



NewKegForm.propTypes = {
    onAddNewKeg: PropTypes.func
}

export default NewKegControl;