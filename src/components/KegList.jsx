import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';


function KegList(props) {
  return(
    <div className="main">
            
      <div className="list">
        {props.kegList.map((keg, index) => 
          <Keg name={keg.name}
            brand={keg.brand}
            price={keg.price}
            alcoholContent={keg.alcoholContent}
            type={keg.type}
            fill={keg.fill}
            key={index} />
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
  kegList: PropTypes.array
};

export default KegList;