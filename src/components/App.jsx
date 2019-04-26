import React from 'react';
import KegList from './KegList';
import PropTypes from 'prop-types';
import Admin from './Admin';
import Header from './Header';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import taproom from '../assets/images/taproom.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: {
        keg1: {
          name: 'Hoppathon',
          brand: 'Brew Hop',
          price: 5,
          alcoholContent: 5.5,
          type: 'IPA',
          fill: 124
        },
        keg2: {
          name: 'Green Flash',
          brand: 'Brew Hop',
          price: 6,
          alcoholContent: 5.5,
          type: 'IPA',
          fill: 10
        },
        keg2: {
          name: 'Calm Bucha',
          brand: 'Bucha Brothers',
          price: 4,
          alcoholContent: 0.5,
          type: 'Kombucha',
          fill: 124
        },
        keg2: {
          name: 'Dark Soul',
          brand: 'West Coast Malt',
          price: 6,
          alcoholContent: 7.5,
          type: 'Stout',
          fill: 60
        }
      }
    };
    this.handleAddNewKeg = this.handleAddNewKeg.bind(this);
  }

  handleAddNewKeg(newKeg){
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
    console.log(this.state.masterKegList);
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

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><KegList kegList={this.state.masterKegList} />} />
          <Route path='/newKeg' render={()=><Admin onAddNewKeg={this.handleAddNewKeg} />} />
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