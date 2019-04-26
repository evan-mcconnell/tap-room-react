import React from 'react';
import PropTypes from 'prop-types';

function AdminButtons(props) {

  async function handleDeleteClick() {
    await props.onKegSelection(props.id);
    props.onDeleteKeg();
  }

  return(
    <div className="buttons">
    <button onClick={handleDeleteClick}>EDIT</button>
    <button onClick={handleDeleteClick}>DELETE</button>
  </div>
  )
}

export default AdminButtons;