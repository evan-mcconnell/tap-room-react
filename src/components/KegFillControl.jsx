import React from 'react';
import PropTypes from 'prop-types';
import KegFill from './KegFill';


class KegFillControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kegFill: this.props.fill
    };
    this.handleSellPint = this.handleSellPint.bind(this);
    this.handleSellGrowler = this.handleSellGrowler.bind(this);
  }

  handleSellPint(){
    if (this.state.kegFill > 0) {
      var fill = this.state.kegFill - 1;
      this.setState({kegFill: fill});
    } else {
      alert('This keg is empty!');
    }
    console.log(this.state.kegFill);
  }
  handleSellGrowler(){
    if (this.state.kegFill > 4) {
      var fill = this.state.kegFill - 4;
      this.setState({kegFill: fill});
    } else {
      alert('This keg is empty or near-empty!');
    }
    console.log(this.state.kegFill);
  }

  render(){
    return (
      <div>
        <KegFill fill={this.state.kegFill} 
          onSellClick={this.handleSellPint}
          onSellGrowlerClick={this.handleSellGrowler}/>
      </div>
    );
  }
}

KegFillControl.propTypes = {
  fill: PropTypes.number
};


export default KegFillControl;