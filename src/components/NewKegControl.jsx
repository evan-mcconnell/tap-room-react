import React from 'react';
import PropTypes from 'prop-types';
import NewKegForm from './NewKegForm';
import axios from 'axios';

class NewKegControl extends React.Component {
  constructor(props){
    super(props);
  }
  
  async getData() {
    try {
      const response = await axios.get('http://localhost:3000/keg');
      console.log(response.data);
    } catch(error) {
      console.error(error);
    }
  }

  render(){
    return(
      <div>
        <NewKegForm onAddNewKeg={this.props.onAddNewKeg}/>
        <button onClick={this.sayHello}>make call</button>
      </div>
    );
  }
}


NewKegControl.propTypes = {
  onAddNewKeg: PropTypes.func
};

export default NewKegControl;