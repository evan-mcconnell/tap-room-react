import React from 'react';
import PropTypes from 'prop-types';
import KegFill from './KegFill';


class KegFillControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            kegFill: this.props.fill
        }
    }

    render(){
        return (
            <div>
                <KegFill fill={this.state.kegFill} />
            </div>
        )
    }

}

// KegFillControl.prototype = {
//     fill: PropTypes.number
// }

export default KegFillControl;