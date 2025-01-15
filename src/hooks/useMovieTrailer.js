
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  
  const trailerVideo = useSelector(store => store.movies.trailerVideo);


  const getMovieVideos = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);//put id

    const json = await data.json();

    const filterData = json.results.filter(video => video.type === "Trailer");
    

    const trailer = filterData.length ? filterData[0] : json.results[0];
    //const trailer = filterData[0];

    dispatch(addTrailerVideo(trailer));

    
    //call function inside useEffect
  }

  useEffect(()=> {
    if (!trailerVideo ) {
      getMovieVideos();
    }  
  },[])

}

export default useMovieTrailer;


