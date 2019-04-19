import React from 'react';
import KegList from './KegList';
import PropTypes from 'prop-types';
import NewKegControl from './NewKegControl';
import Header from './Header';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import taproom from '../assets/images/taproom.jpg';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            masterKegList: [
            //     {
            //         name: 'Hoppathon',
            //         brand: 'Brew Hop',
            //         price: 5,
            //         alcoholContent: 5.5,
            //         type: 'IPA',
            //         fill: 124
            //     },
            //     {
            //         name: 'Green Flash',
            //         brand: 'Brew Hop',
            //         price: 6,
            //         alcoholContent: 5.5,
            //         type: 'IPA',
            //         fill: 10
            //     },
            //     {
            //         name: 'Calm Bucha',
            //         brand: 'Bucha Brothers',
            //         price: 4,
            //         alcoholContent: 0.5,
            //         type: 'Kombucha',
            //         fill: 124
            //     },
            //     {
            //         name: 'Dark Soul',
            //         brand: 'West Coast Malt',
            //         price: 6,
            //         alcoholContent: 7.5,
            //         type: 'Stout',
            //         fill: 60
            //     }
            ]
        };
        this.handleAddNewKeg = this.handleAddNewKeg.bind(this);
    }

    handleAddNewKeg(newKeg){
        var newMasterKegList = this.state.masterKegList.slice;
        newMasterKegList.push(newTicket);
        this.setState({masterKegList: newMasterKegList});
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={KegList} />
                    <Route path='/newKeg' render={()=><NewKegControl onAddNewKeg={this.handleAddNewKeg} />} />
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