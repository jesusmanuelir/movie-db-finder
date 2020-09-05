import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import Home from '../containers/Home';
import Favorites from '../containers/Favorites';
import Movie from '../containers/Movie';
import NoFound from '../containers/NoFound';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/src/collapse';
import '../assets/style/App.scss';

const App = () => {
    return(
        
        <Router>
        <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/favorites" component={Favorites}/>
                <Route exact path="/movie" component={Movie}/>
                <Route component={NoFound} />
            </Switch>
        <Footer/>
        </Router>
            

    
    );
 
};


export default App;