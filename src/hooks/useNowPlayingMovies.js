import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

  const getNowPlayingMovies = async () => {

    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_OPTIONS);//removed language

    const json = await data.json();
    //console.log(json.results);// it will logs 2 times cause of react's strict mode if i remove it from index.js it will log once

    dispatch(addNowPlayingMovies(json.results));
    //have to call this function in useEffect
  }

  useEffect(()=>{
    if(!nowPlayingMovies){
      getNowPlayingMovies();
    }
  },[]);

}

export default useNowPlayingMovies;