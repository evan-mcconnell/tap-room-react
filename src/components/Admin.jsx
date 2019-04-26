import React from 'react';
import PropTypes from 'prop-types';
import NewKegForm from './NewKegForm';

function Admin() {
    return(
      <NewKegForm onAddNewKeg={this.props.onAddNewKeg}/>
    );
}



Admin.propTypes = {
  onAddNewKeg: PropTypes.func
};

export default NewKegControl;