import React from 'react';
import PropTypes from 'prop-types';
import KegFillControl from './KegFillControl';

function Keg(props){
    return (
        <div className="main">
            <div className="sub-main">
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
            <KegFillControl fill={props.fill}/>
            <style jsx>{`
                .main {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    width: 80%;
                    max-width: 500px;
                    margin: 30px auto 0 auto;
                    padding: 0 20px;
                    align-items: center;
                    color: #35454e;
                    border-bottom: 1px solid #35454e;
                }
                .sub-main {
                    display: flex;
                    flex-direction: row;
                }
                h2 {
                    margin-top: 10px;

                }
                img {
                    width: 80px;
                    height: 80px;
                    margin-right: 30px;
                    opacity: 0.8;
                    border: 2px solid #35454e;
                    border-radius: 20px;
                    margin-bottom: 10px;
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
    fill: PropTypes.number
};

export default Keg;

