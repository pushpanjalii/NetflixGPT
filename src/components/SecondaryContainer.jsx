import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-52 pl-12 relative z-20">
          {/* this will move the secondary container up over the main container
          it is a child container of the Secondarycontainer */}
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Rating"} movies={movies.TopRatingMovies} />
          <MovieList title={"Popular"} movies={movies.PopularMovies} />
          <MovieList title={"Horror"} movies={movies.addHorrorMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
