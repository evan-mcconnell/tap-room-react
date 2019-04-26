import React from 'react';
import PropTypes from 'prop-types';
import NewKegForm from './NewKegForm';
import Keg from './Keg';

function Admin(props) {
  return(
    <div className='main'>
      <NewKegForm onAddNewKeg={props.onAddNewKeg}
        onKegSelection={props.onKegSelection} />
      <div className="list">
        {Object.keys(props.kegList).map(function(kegID){
          let keg = props.kegList[kegID];
          return <Keg name={keg.name}
            brand={keg.brand}
            price={keg.price}
            alcoholContent={keg.alcoholContent}
            type={keg.type}
            fill={keg.fill}
            id={keg.id} 
            key={keg.id} 
            routerPath={props.routerPath}
            onKegSelection={props.onKegSelection}
            onDeleteKeg={props.onDeleteKeg}
            onEditKeg={props.onEditKeg}
            onShowEditForm={props.onShowEditForm}
          />;
        }
        )}
      </div>
      <style jsx>{`
          .main {
            background-color: rgba(182,197,170,0.9);
            width: 80%;
            max-width: 1200px;
            margin: auto;
            padding-bottom: 200px;
            text-align: center;
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