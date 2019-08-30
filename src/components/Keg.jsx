import React from 'react';
import PropTypes from 'prop-types';
import KegFill from './KegFill';
import AdminButtons from './AdminButtons';

function Keg(props){
  
  let buttons;
  
  
  if (props.routerPath === '/admin'){
    buttons = <AdminButtons onKegSelection={props.onKegSelection}
      onDeleteKeg={props.onDeleteKeg}
      onShowEditForm={props.onShowEditForm}
      id={props.id} />;
  } 

  return (
    <div className="container">
      <div className="main">
        <div className="main-info">
          <img src={require(`../assets/images/${props.type}.jpg`)} alt="drink type"/>
                  
          <div>
            <h2>{props.name}</h2>
            <h4>{props.brand}</h4>
          </div>

        </div>
        <div>
          <h3>${props.price}</h3>
          <h5>{props.alcoholContent}%</h5>
        </div>
        
        <KegFill fill={props.fill}
          id={props.id}
          routerPath={props.routerPath}
          onKegSelection={props.onKegSelection}
          onSellPint={props.onSellPint}
          onSellGrowler={props.onSellGrowler} />

        {buttons}
      </div>
      <style jsx>{`
                .main {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    width: 85%;
                    max-width: 500px;
                    margin: 30px auto 0 auto;
                    padding: 10px 26px;
                    align-items: center;
                    color: black;
                    background-color: maroon;
                    border: 5px solid rgb(10, 8, 5);
                }
                .main-info {
                    display: flex;
                    flex-direction: row;
                    min-width: 280px;
                }
                h2 {
                    margin-top: 10px;
                    font-family: 'Nova Round', sans-serif;
                    color: transparent;
                    text-shadow: 0 0 2px rgba(255,255,255,0.95);
                    font-size: 28px;
                }
                img {
                    width: 80px;
                    height: 80px;
                    margin-right: 30px;
                    opacity: 0.8;
                    border: 2px solid #35454e;
                    border-radius: 20px;
                }
            `}</style>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  type: PropTypes.string,
  fill: PropTypes.number,
  id: PropTypes.string,
  onSellPint: PropTypes.func,
  onSellGrowler: PropTypes.func,
  onShowEditForm: PropTypes.func,
  onDeleteKeg: PropTypes.func,
  onKegSelection: PropTypes.func,
  routerPath: PropTypes.string,
};

export default Keg;

