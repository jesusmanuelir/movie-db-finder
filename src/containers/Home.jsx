import React, { useState, useEffect } from 'react';
import Carousel from '../components/Carousel';
import MovieItem from '../components/MovieItem';
import Main from '../components/Main';
const { config } = require('../../config');


const Home = () => {
    const [trendings, setTrendings] = useState([]);
    const [query, setQuery] = useState('');
    const [searchs, setSearch] = useState([]);
    
    const submit = e => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${config.ApiKey}&query=${query}&language=en-US&page=1&include_adult=false`)
    .then(res => res.json())
    .then(data => setSearch(data.results))
    }

    console.log(searchs);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${config.ApiKey}`)
        .then(res => res.json())
        .then(data => setTrendings(data.results))
    },[]);

    return (  
       <Main>
               
    <section ClassName="py-5 text-center container">
      <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
          <form onSubmit={submit}>
              <div className="input-group">
                  <input 
                    type="text" 
                    name="query" 
                    className="form-control input-search_style" 
                    placeholder="Search movies or tv show" 
                    aria-label="Search movies or tv show" 
                    aria-describedby="button-addon"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    required
                    />
                <div className="input-group-append">
                  <button className="btn btn-secondary button-search_style" type="submit" id="button-addon">Search</button>
                </div>
              </div>
            </form>
          </div>
      </div>
    </section>

    {searchs.length != 0 ?

        <Carousel title="Results">
         {searchs.map((search) =>{
            return(
             <MovieItem
             poster = {search.poster_path}
             vote_average = {search.vote_average}
             />
            );
        }
        )}

      </Carousel>
    :
      ''
    }

                
      <Carousel title="Trending of week">
        {trendings.map((trending) => {
          return trendings.length === 0 ? <h4>Loading...</h4> :(
            <MovieItem
              poster = {trending.poster_path}
              vote_average = {trending.vote_average}
              />
              );       
          })
        }
      </Carousel>
    </Main>
    );
};

export default Home;



