import {  useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {

  const movies = useSelector(store =>store.movies);


  return (
    movies.nowPlayingMovies && (
    <div className="bg-black bg-opacity-90 w-[100%]">
      <div className="-mt-44 xl:-mt-36 relative z-40 px-4">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
      </div>
    </div>
    )
  )
}

export default SecondaryContainer;