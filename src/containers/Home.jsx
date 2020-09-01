import React from 'react';
import Carousel from '../components/Carousel';
import MovieItem from '../components/MovieItem';
import Search from '../components/Search';


const Home = () => {
    return(
       
       <>
                <Search/>
                <Carousel>
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                </Carousel>
        </>
     

    );
};

export default Home;


