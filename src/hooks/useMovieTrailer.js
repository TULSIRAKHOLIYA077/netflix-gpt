import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  

  const getMovieVideos = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);//put id

    const json = await data.json();

    const filterData = json.results.filter(video => video.type === "Trailer");
    

    const trailer = filterData.length ? filterData[1] : json.results[0];
    //const trailer = filterData[1];

    dispatch(addTrailerVideo(trailer));

    
    //call function inside useEffect
  }

  useEffect(()=> {
    getMovieVideos();
  },[])

}

export default useMovieTrailer;