import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import Home from '../containers/Home';
import Favorites from '../containers/Favorites';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style/App.scss';

const App = () => {
    return(
        <div className="app">
        
        <Router>
        <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/favorites" component={Favorites}/>
            </Switch>
        <Footer/>
        </Router>
            
    </div>
    
    );
 
};


export default App;