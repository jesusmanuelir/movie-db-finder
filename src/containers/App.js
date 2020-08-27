import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Banner from '../components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style/App.scss';


const App = () => {
    return(
    <div className="app">
        <Header/>
            <Main>
                <Banner/>
            </Main>
        <Footer/>
    </div>

    );
};

export default App;