import React from 'react';
import PropTypes from 'prop-types';

function AdminButtons(props) {

  async function handleDeleteClick() {
    await props.onKegSelection(props.id);
    props.onDeleteKeg();
  }

  async function handleEditClick() {
    await props.onKegSelection(props.id);
    props.onShowEditForm();
  }

  return(
    <div className="buttons">
      <button onClick={handleEditClick}>EDIT</button><br/>
      <button onClick={handleDeleteClick}>DELETE</button>
      <style jsx>{`
        .buttons {
          padding: 5px;
      }
      button {
          font-size: 14px;
          font-weight: bold;
          background-color: indianred;
          color: darkred;
          border: 1px solid darkred;
          border-radius: 5px;
          width: 65px;
          height: 35px;
          margin: 2px;
      }
      `}</style>
    </div>
  )
}

AdminButtons.propTypes = {
  id: PropTypes.string,
  handleDeleteClick: PropTypes.func,
  handleEditClick: PropTypes.func
}

export default AdminButtons;