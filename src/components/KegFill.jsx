import React from 'react';
import PropTypes from 'prop-types';
import FillButtons from './FillButtons';

function KegFill(props) {
  let color;
  let buttons;
  
  if (props.fill > 90) {
    color = 'green';
  } else if (props.fill > 55) {
    color = 'greenyellow';
  } else if (props.fill >= 15) {
    color = 'darkorange';
  } else {
    color = 'red';
  }

  if (props.routerPath === '/') {
    buttons = 
      <FillButtons onKegSelection={props.onKegSelection}
        onSellPint={props.onSellPint}
        onSellGrowler={props.onSellGrowler}
        id={props.id} />;
  } 

  return(
    <div className="main">
      <div className="kegFill">
        <div className="fill"></div>
      </div>
      {buttons}
      <style jsx>{`
                .main {
                    display: flex;
                    flex-direction: row;
                }
                
                .kegFill {
                    width: 30px;
                    height: 70px;
                    border: 2px solid #35454e;
                    border-radius: 5px;
                    position: relative;
                    background-color: #dae8ce;
                }
                .fill {
                    width: 100%;
                    height: ${(props.fill)*(100/124)}%;
                    background-color: ${color};
                    position: absolute;
                    bottom: 0;
                }
            `}</style>
    </div>
  );
}

KegFill.propTypes = {
  fill: PropTypes.number,
  id: PropTypes.string,
  onSellPint: PropTypes.func,
  onKegSelection: PropTypes.func,
  onSellGrowler: PropTypes.func
};

export default KegFill;