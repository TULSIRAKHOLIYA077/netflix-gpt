import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies);//20 movies

  if(!movies) return;// or     if(movies === null) return;


  const mainMovie = movies[0];//1 movie

  
  const {original_title, overview, id} = mainMovie;

  return (
    <div className="">
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer;