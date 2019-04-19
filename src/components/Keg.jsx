import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
    var fill;
    if (props.fill > 80) {
        fill = "full";
    } else if (props.fill > 45) {
        fill = "half";
    } else if (props.fill >= 10) {
        fill = "dregs";
    } else {
        fill = "empty";
    }

    return (
        <div className="main">
            <div className="sub-main">
                <img src={require(`../assets/images/${props.type}.jpg`)} alt="drink type"/>
                <div>
                    <h2>{props.name}</h2>
                    <h5>{props.brand}</h5>
                </div>
            </div>
            <div>
                <h3>${props.price}</h3>
                <h5>{props.alcoholContent}%</h5>
            </div>
            <div className="kegFill">
                <div className={fill}></div>
            </div>
            <style jsx>{`
                .main {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    width: 80%;
                    max-width: 500px;
                    margin: 30px auto 0 auto;
                    align-items: center;
                    color: #35454e;
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
                }
                .kegFill {
                    width: 40px;
                    height: 70px;
                    border: 2px solid #35454e;
                    border-radius: 4px;
                    position: relative;
                }
                .full {
                    width: 100%;
                    height: 100%;
                    background-color: green;
                }
                .half {
                    width: 100%;
                    height: 60%;
                    background-color: yellow;
                    position: absolute;
                    bottom: 0;
                }
                .dregs {
                    width: 100%;
                    height: 20%;
                    background-color: red;
                    position: absolute;
                    bottom: 0;
                }
                .empty {
                    width: 100%;
                    height: 1%;
                    background-color: green;
                    position: absolute;
                    bottom: 0;
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

