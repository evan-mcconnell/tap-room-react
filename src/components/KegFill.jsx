import React from 'react';
import PropTypes from 'prop-types';

function KegFill(props) {
  let color;
  
    if (props.fill > 90) {
      color = "green";
    } else if (props.fill > 55) {
      color = "greenyellow";
    } else if (props.fill >= 15) {
      color = "darkorange";
    } else {
      color = "red";
    }
  

  async function onSellClick() {
    await props.onKegSelection(props.id);
    props.onSellPint();
  }

  function onSellGrowlerClick() {
    props.onKegSelection(props.id);
    props.onSellGrowler();
  }

  return(
    <div className="main">
      <div className="kegFill">
        <div className="fill"></div>
      </div>
      <div className="buttons">
        <button onClick={onSellClick}>Sell Pint</button>
        <br/>
        <button onClick={onSellGrowlerClick}>Sell a Growler</button>
      </div>
      <style jsx>{`
                .main {
                    display: flex;
                    flex-direction: row;
                }
                .buttons {
                    padding: 5px;
                }
                button {
                    background-color: #dae8ce;
                    color: #35454e;
                    border: 1px solid #35454e;
                    border-radius: 5px;
                    width: 50px;
                    height: 30px;
                    margin: 2px;
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
  onSellPint: PropTypes.func,
  onKegSelection: PropTypes.func,
  onSellGrowler: PropTypes.func
};

export default KegFill;