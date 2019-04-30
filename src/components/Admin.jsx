import React from 'react';
import PropTypes from 'prop-types';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import EditForm from './EditForm'

function Admin(props) {
  let form;

  if (props.editForm) {
      form = <EditForm name={props.name}
        brand={props.brand}
        price={props.price}
        alcoholContent={props.alcoholContent}
        type={props.type}
        fill={props.fill}
        id={props.id} 
        onEditKeg={props.onEditKeg}
        onKegSelection={props.onKegSelection} />;
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
          onShowEditForm={props.onShowEditForm}
          editForm = {props.editForm}/>
      </div>
      <style jsx>{`
          .main {
            text-align: center;
            width: 100%;
          }
          .form {
            background-color: rgba(182,197,170,0.9);
            width: 80%;
            max-width: 1200px;
            margin: auto;
            padding-bottom: 50px;
            text-align: center;
          }
          .edit {
            background-color: rgba(182,197,170,0.9);
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
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func,
  onDeleteKeg: PropTypes.func,
  onEditeKeg: PropTypes.func,
  onAddNewKeg: PropTypes.func,
  routerPath: PropTypes.string
};

export default Admin;