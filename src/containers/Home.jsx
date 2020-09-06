import React, { useState, useEffect } from 'react';
import Carousel from '../components/Carousel';
import MovieItem from '../components/MovieItem';
import Search from '../components/Search';
import Main from '../components/Main';
const { config } = require('../../config');


const Home = () => {
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${config.ApiKey}`)
        .then(res => res.json())
        .then(setTrending)
    },[]);

    console.log(trending.results)
    return(
       
       <Main>
           
                <Search/>
                <Carousel>
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                    <MovieItem/>
                </Carousel>
        </Main>
     

    );
};

export default Home;


