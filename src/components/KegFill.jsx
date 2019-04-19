import React from 'react';
import PropTypes from 'prop-types';

function KegFill(props) {
    var fill;
    if (props.fill > 90) {
        fill = 'full';
    } else if (props.fill > 55) {
        fill = 'half';
    } else if (props.fill >= 10) {
        fill = 'dregs';
    } else {
        fill = 'empty';
    }
    return(
        <div className="main">
            <div className="kegFill">
                <div className={fill}></div>
            </div>
            <div className="buttons">
                <button onClick={props.onSellClick}>Sell Pint</button>
                <br/>
                <button onClick={props.onSellGrowlerClick}>Sell a Growler</button>
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
    )
}

KegFill.prototype = {
    fill: PropTypes.number,
    onSellClick: PropTypes.func,
    onSellGrowlerClick: PropTypes.func
}

export default KegFill;