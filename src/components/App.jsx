import React from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

import KegList from './KegList';
import PropTypes from 'prop-types';
import NewKegControl from './NewKegControl';
import Header from './Header';
import Footer from './Footer';
import taproom from '../assets/images/taproom.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [
        // {
        //   name: 'Hoppathon',
        //   brand: 'Brew Hop',
        //   price: 5,
        //   alcoholContent: 5.5,
        //   type: 'IPA',
        //   fill: 124
        // },
        // {
        //   name: 'Green Flash',
        //   brand: 'Brew Hop',
        //   price: 6,
        //   alcoholContent: 5.5,
        //   type: 'IPA',
        //   fill: 10
        // },
        // {
        //   name: 'Calm Bucha',
        //   brand: 'Bucha Brothers',
        //   price: 4,
        //   alcoholContent: 0.5,
        //   type: 'Kombucha',
        //   fill: 124
        // },
        // {
        //   name: 'Dark Soul',
        //   brand: 'West Coast Malt',
        //   price: 6,
        //   alcoholContent: 7.5,
        //   type: 'Stout',
        //   fill: 60
        // }
      ]
    };
    this.handleAddNewKeg = this.handleAddNewKeg.bind(this);
  }

  async getData() {
    try {
      const response = await axios.get('http://localhost:3000/keg');
      console.log(response.data);
      var newMasterKegList = this.state.masterKegList.slice();
      newMasterKegList = response.data;
      this.setState({masterKegList: newMasterKegList});
      console.log(this.state.masterKegList);
    } catch(error) {
      console.error(error);
    }
  }

  postNewKeg(newKeg) {
    console.log(newKeg);
    console.log(newKeg.name);
    console.log(newKeg.type);
    axios.post('http://localhost:3000/keg', {
      name: newKeg.name,
      brand: newKeg.brand,
      price: newKeg.price,
      alcoholContent: newKeg.alcoholContent,
      type: newKeg.type
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    })
  }



  handleAddNewKeg(newKeg){
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
    console.log(this.state.masterKegList);
  }

  componentWillMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><KegList kegList={this.state.masterKegList} />} />
          <Route path='/newKeg' render={()=><NewKegControl onAddNewKeg={this.postNewKeg} />} />
          <Route component={Error404} />
        </Switch>
        <Footer/>
        <style jsx global>{`
          * {
              margin: 0;
              padding: 0;
          }
          body {
              font-family: Arial;
              background-image: url(${taproom});
          }
                `}</style>
      </div>
    );
  }
}



export default App;