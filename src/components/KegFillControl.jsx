import React from 'react';
import PropTypes from 'prop-types';
import KegFill from './KegFill';


class KegFillControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            kegFill: this.props.fill
        }
        this.handleSellPint = this.handleSellPint.bind(this);
        this.handleSellGrowler = this.handleSellGrowler.bind(this);
    }

    handleSellPint(){
        this.state.kegFill --;
        console.log(this.state.kegFill);
    }
    handleSellGrowler(){
        this.state.kegFill -= 32;
        console.log(this.state.kegFill);
    }

    render(){
        return (
            <div>
                <KegFill fill={this.state.kegFill} 
                        onSellClick={this.handleSellPint}
                        onSellGrowlerClick={this.handleSellGrowler}/>
            </div>
        )
    }
}


export default KegFillControl;