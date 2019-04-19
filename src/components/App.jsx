import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={KegList} />
                <Route path='/newKeg' component={NewKegForm} />
                <Route component={Error404} />
            </Switch>
        </div>
    );
}



export default App;