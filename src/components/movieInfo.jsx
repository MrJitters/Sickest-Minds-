import React from "react";
import { apiKey } from "./secret/apiKey";
import { useEffect, useState } from "react";
import { Container, Image, Col } from "react-bootstrap";

export const SearchedMovieInfo = (props) => {

    const [movie, setMovie] = useState({})

    const path = movie.poster_path

    useEffect(() => {
        (async () => {
            const movieId = parseInt(props.match.params.movieId);
            const movieApikey = apiKey;
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${movieApikey}`);
                const movie = await response.json();
                console.log(movie)
                setMovie(movie)
            } catch (error) {
                console.error(error)
            }
        }) ()
    }, [])

    return (
        <Container className="text-center">
            <Col className='filteredImageContainer'>
                <Image className='filteredImage' fluid src={"https://image.tmdb.org/t/p/w500/" + path} />
            </Col>
            <h1 className='reviewText'>{movie.title}</h1>
            <h4 className='reviewText'>{movie.tagline}</h4>
            <h4 className='reviewText'> Release Date: {movie.release_date}</h4>
            <p className='reviewText'>{movie.overview}</p>
        </Container>
    );
}