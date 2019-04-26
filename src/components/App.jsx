import React from 'react';
import KegList from './KegList';
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
          fill: 124,
          id: 'keg1'
        },
        keg2: {
          name: 'Green Flash',
          brand: 'Brew Hop',
          price: 6,
          alcoholContent: 5.5,
          type: 'IPA',
          fill: 10,
          id: 'keg2'
        },
        keg3: {
          name: 'Calm Bucha',
          brand: 'Bucha Brothers',
          price: 4,
          alcoholContent: 0.5,
          type: 'Kombucha',
          fill: 124,
          id: 'keg3'
        },
        keg4: {
          name: 'Dark Soul',
          brand: 'West Coast Malt',
          price: 6,
          alcoholContent: 7.5,
          type: 'Stout',
          fill: 60,
          id: 'keg4'
        }
      },
      selectedKeg: null
    };
    this.handleAddNewKeg = this.handleAddNewKeg.bind(this);
    this.handleDeleteKeg = this.handleDeleteKeg.bind(this);
    this.handleEditKeg = this.handleEditKeg.bind(this);
    this.handleKegSelection = this.handleKegSelection.bind(this);
    this.handleSellPint = this.handleSellPint.bind(this);
    this.handleSellGrowler = this.handleSellGrowler.bind(this);
  }

  handleKegSelection(keg) {
    this.setState({selectedKeg: keg});
    console.log('new Select', this.state.selectedKeg);
  }

  handleAddNewKeg(newKeg){
    console.log(newKeg);
    var newMasterKegList = Object.assign({}, this.state.masterKegList, {[newKeg.id]: newKeg});
    this.setState({masterKegList: newMasterKegList});
    console.log(this.state.masterKegList);
  }

  handleDeleteKeg(keg) {
    var newMasterKegList = Object.assign({}, this.state.masterKegList);
    delete newMasterKegList[keg];
    this.setState({masterKegList: newMasterKegList});
  }

  handleEditKeg() {
    var newMasterKegList = Object.assign({}, this.state.masterKegList);
    delete newMasterKegList[this.state.selectedKeg];
    this.setState({masterKegList: newMasterKegList});
  }

  handleSellPint(){
    if (this.state.masterKegList[this.state.selectedKeg].fill > 0) {
      var newMasterKegList = Object.assign({}, this.state.masterKegList);
      newMasterKegList[this.state.selectedKeg].fill -= 1;
      this.setState({masterKegList: newMasterKegList});
    } else {
      alert('This keg is empty!');
    }
    console.log(this.state.masterKegList[this.state.selectedKeg].fill);
  }

  handleSellGrowler(){
    if (this.state.masterKegList[this.state.selectedKeg].fill > 0) {
      var newMasterKegList = Object.assign({}, this.state.masterKegList);
      newMasterKegList[this.state.selectedKeg].fill -= 4;
      this.setState({masterKegList: newMasterKegList});
    } else {
      alert('This keg is empty!');
    }
    console.log(this.state.masterKegList[this.state.selectedKeg].fill);
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><KegList kegList={this.state.masterKegList}
            onKegSelection={this.handleKegSelection} 
            onSellPint={this.handleSellPint} 
            onSellGrowler={this.handleSellGrowler} 
            onDeleteKeg={this.handleDeleteKeg} />} />
          <Route path='/admin' render={(props)=><Admin kegList={this.state.masterKegList}
            onAddNewKeg={this.handleAddNewKeg} 
            onKegSelection={this.handleKegSelection}
            routerPath={props.location.pathname} 
            onDeleteKeg={this.handleDeleteKeg} />} />
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