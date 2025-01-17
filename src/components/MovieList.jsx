import MovieCard from "./MovieCard";

const MovieList = ({title,movies}) => {
  //console.log(movies,"movies");
  
  return (
    <div className="py-2 px-6">
      <h1 className="text-lg sm:text-2xl md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-2">
          {        
            movies?.map(movie =><MovieCard key={movie.id} posterPath={movie.poster_path}/>)
          }      
        </div>
      </div>
    </div>
  )
}

export default MovieList;