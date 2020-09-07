import React, { useState, useEffect } from 'react';
import Carousel from '../components/Carousel';
import MovieItem from '../components/MovieItem';
import Search from '../components/Search';
import Main from '../components/Main';
const { config } = require('../../config');


const Home = () => {
    const [trendings, setTrendings] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${config.ApiKey}`)
        .then(res => res.json())
        .then(data => setTrendings(data.results))
    },[]);

    return (  
       <Main>
                <Search/>
                <Carousel title="Trending">
                {trendings.map((trending) => {
                    return trendings.length === 0 ? <h4>Loading...</h4> :(
                        <MovieItem
                        poster = {trending.poster_path}
                        />
                    );
                    
                    })
                }
                </Carousel>
        </Main>
    );
};

export default Home;

