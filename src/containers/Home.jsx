import React from 'react';
import Carousel from '../components/Carousel';
import MovieItem from '../components/MovieItem';
import Main from '../components/Main';
import Banner from '../components/Banner';


const Home = () => {
    return(
       
       <>
                <Banner/>
                <Carousel>
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                </Carousel>
        </>
     

    );
};

export default Home;


