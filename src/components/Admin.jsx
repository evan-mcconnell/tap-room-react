import React from 'react';
import PropTypes from 'prop-types';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import EditForm from './EditForm';

function Admin(props) {
  let form;

  if (props.editForm) {
    form = <EditForm kegList={props.kegList}
      onEditKeg={props.onEditKeg}
      onShowEditForm={props.onShowEditForm}
      onKegSelection={props.onKegSelection}
      selectedKeg={props.selectedKeg} />;
  } 

  return(
    <div className='main'>
      <div className='form'>
        <NewKegForm onAddNewKeg={props.onAddNewKeg}
          onKegSelection={props.onKegSelection} />
      </div>
      <div className='edit'>
        {form}
      </div>
      <div className='list'>
        <KegList kegList={props.kegList}
          routerPath={props.routerPath}
          onKegSelection={props.onKegSelection} 
          onSellPint={props.onSellPint} 
          onSellGrowler={props.onSellGrowler} 
          onDeleteKeg={props.onDeleteKeg}
          onEditKeg={props.onEditKeg}
          onShowEditForm={props.onShowEditForm} />
      </div>
      <style jsx>{`
          .main {
            text-align: center;
            width: 100%;
          }
          .form {
            background-color: rgba(67,70,75,0.6);
            width: 80%;
            max-width: 1200px;
            margin: auto;
            padding-bottom: 50px;
            text-align: center;
          }
          .edit {
            background-color: rgba(67,70,75,0.6);
            width: 80%;
            max-width: 1200px;
            margin: auto;
          }
          .list {
            width: 100%;
          }
        
        `}</style>
    </div>
  );
}


Admin.propTypes = {
  editForm: PropTypes.bool,
  kegList: PropTypes.object,
  selectedKeg: PropTypes.string,
  onKegSelection: PropTypes.func,
  onDeleteKeg: PropTypes.func,
  onEditKeg: PropTypes.func,
  onAddNewKeg: PropTypes.func,
  routerPath: PropTypes.string,
  onSellPint: PropTypes.func,
  onSellGrowler: PropTypes.func,
  onShowEditForm: PropTypes.func,
};

export default Admin;