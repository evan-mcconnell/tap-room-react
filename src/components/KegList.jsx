import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';


function KegList(props) {
  console.log(props.kegList);
  return(
    <div className="main">
      
      <div className="list">
        {Object.keys(props.kegList).map(function(kegID){
          let keg = props.kegList[kegID];
          return <Keg name={keg.name}
            brand={keg.brand}
            price={keg.price}
            alcoholContent={keg.alcoholContent}
            type={keg.type}
            fill={keg.fill}
            key={keg.id} 
            onKegSelection={onKegSelection}
            onSellPint={onSellPint}
            onSellGrowler={onSellGrowler} />
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
                }
                .list {
                    display: flex;
                    flex-direction: rows;
                    flex-wrap: wrap;
                }
            `}</style>
    </div>
  );
}

// KegList.propTypes = {
//   kegList: PropTypes.Object
// };

export default KegList;