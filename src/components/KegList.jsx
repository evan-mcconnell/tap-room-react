import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';


function KegList(props) {
  
  return(
    <div className="main">
      
      <div className="list">
        {Object.keys(props.kegList).map(function(kegID, index){
          let keg = props.kegList[kegID];
          return <Keg name={keg.name}
            brand={keg.brand}
            price={keg.price}
            alcoholContent={keg.alcoholContent}
            type={keg.type}
            fill={keg.fill}
            id={keg.id} 
            key={index}
            routerPath={props.routerPath}
            onKegSelection={props.onKegSelection}
            onSellPint={props.onSellPint}
            onSellGrowler={props.onSellGrowler} 
            onDeleteKeg={props.onDeleteKeg}
            onEditKeg={props.onEditKeg}
            onShowEditForm={props.onShowEditForm}  />;
        }
        )}
      </div>
      <style jsx>{`
                .main {
                    background-color: rgba(67,70,75,0.6);
                    width: 80%;
                    max-width: 1200px;
                    min-height: 55vh;
                    margin: auto;
                    padding-bottom: 200px;
                }
                .list {
                    display: flex;
                    justify-content: space-around;
                    flex-direction: rows;
                    flex-wrap: wrap;
                }
            `}</style>
    </div>
  );
}

KegList.propTypes = {
  routerPath: PropTypes.string,
  kegList: PropTypes.object,
  onSellPint: PropTypes.func,
  onKegSelection: PropTypes.func,
  onSellGrowler: PropTypes.func,
  onShowEditForm: PropTypes.func,
  onDeleteKeg: PropTypes.func,
  onEditKeg: PropTypes.func,
};

export default KegList;