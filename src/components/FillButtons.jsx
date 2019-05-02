import React from 'react';
import PropTypes from 'prop-types';

function FillButtons(props) {

  async function onSellClick() {
    await props.onKegSelection(props.id);
    props.onSellPint();
  }

  async function onSellGrowlerClick() {
    await props.onKegSelection(props.id);
    props.onSellGrowler();
  }

  return(
    <div className="buttons">
      <button onClick={onSellClick}>Sell Pint</button>
      <br/>
      <button onClick={onSellGrowlerClick}>Sell a Growler</button>
      <style jsx>{`
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
      `}</style>
    </div>
  );
}

FillButtons.propTypes = {
  id: PropTypes.string,
  onSellPint: PropTypes.func,
  onKegSelection: PropTypes.func,
  onSellGrowler: PropTypes.func
};

export default FillButtons;