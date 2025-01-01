import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = () => {
  const dispatch = useDispatch();
  

  const getMovieVideos = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/1156593/videos?language=en-US', API_OPTIONS);//put id

    const json = await data.json();
    console.log(json);

    const filterData = json.results.filter(video => video.type === "Trailer");
    console.log(filterData);
    

    const trailer = filterData.length ? filterData[1] : json.results[0];
    //const trailer = filterData[1];
    console.log(trailer);

    dispatch(addTrailerVideo(trailer));

    
    //call function inside useEffect
  }

  useEffect(()=> {
    getMovieVideos();
  },[])

}

export default useMovieTrailer;