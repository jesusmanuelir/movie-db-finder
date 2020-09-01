import React from 'react';
import Carousel from '../components/Carousel';
import MovieItem from '../components/MovieItem';
import Search from '../components/Search';
import Main from '../components/Main';


const Home = () => {
    return(
       
       <Main>
                <Search/>
                <Carousel>
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                </Carousel>
        </Main>
     

    );
};

export default Home;


