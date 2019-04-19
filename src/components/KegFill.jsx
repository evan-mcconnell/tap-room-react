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
        <div>
            <div className="kegFill">
                <div className={fill}></div>
            </div>
            <button onClick={props.onSellClick}>Sell a Pint</button>
            <style jsx>{`
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
    onSellClick: PropTypes.func
}

export default KegFill;