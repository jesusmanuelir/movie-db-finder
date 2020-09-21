import React, {useEffect, useState, Component} from 'react';
const { config } = require('../../config');
import Main from '../components/Main';
import styled from 'styled-components';
import NoFoundPoster from '../components/NoFoundPoster';

const Movie = props => {
    const { id } = props.match.params;
    const [dataMovie, setDataMovie] = useState('');
    const [dataMovieCast, setDataMovieCast] = useState([]);

    useEffect(() => {
        DataMovieById();
    }, []);

    useEffect(() => {
        DataMovieCastById();
    }, []);

    const DataMovieById = async () => {
        await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${config.ApiKey}`)
        .then(res => res.json())
        .then(data => setDataMovie(data))
    }

    const DataMovieCastById = async () => {
        await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${config.ApiKey}`)
        .then(res => res.json())
        .then(data => setDataMovieCast(data.cast))
    }

    console.log(dataMovieCast)

    const MovieHeader = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${dataMovie.backdrop_path}');
    `;

    const BackgroundBanner = styled.div`
    background-image: linear-gradient(to right, rgba(12.94%, 14.90%, 22.75%, 1.00) 150px, rgba(20.39%, 22.35%, 29.02%, 0.84) 100%);
    `;



    return(
        <>
        <MovieHeader>
            <BackgroundBanner className="contect-banner_movie background-poster_movie">
            <Main>
                <div className="row no-gutters background-poster_movie">
                    <div className="col-md-3">
                    <img src={`https://image.tmdb.org/t/p/original${dataMovie.poster_path}`} width="250px" height="350px" className="style-poster_movie"/>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                        <h5 className="card-title title-movie">{dataMovie.title}</h5>
                        <p className="card-text title-overview">Description</p>
                        <p className="card-text overview-movie">{dataMovie.overview}</p>
                        <p className="card-text"><small className="text-muted"></small></p>
                        </div>
                    </div>
                </div>
            </Main>
            </BackgroundBanner>
        </MovieHeader>
        <Main>
        <div className="py-5">
          <div className="container">
            <h2 className="mb-2">Actors</h2>
               <div className="row row-cols-2 row-cols-sm-4 row-cols-md-5 g-3">
                  {dataMovieCast.map((cast) => {
                    return(
                        <div className="col">
                            <div className="card shadow-sm">
                                {cast.profile_path ? 
                                    <img src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} width="100%" height="100%"/>
                                    : <NoFoundPoster/>
                                }
                                <div className="card-footer">
                                    <div className="d-flex justify-content-between align-items-center">
                                    {cast.name}
                                    </div>
                                </div>
                            </div>
                        </div>
                        );
                  })}
                </div>
            </div>
        </div>
        </Main>
        </>
    );
}

export default Movie;


