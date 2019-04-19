import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import Header from './Header';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import taproom from '../assets/images/taproom.jpg';

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={KegList} />
                <Route path='/newKeg' component={NewKegForm} />
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



export default App;