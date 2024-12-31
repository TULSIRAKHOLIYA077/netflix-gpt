import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const VideoBackground = ({movieId}) => {

  const getMovieVideos = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/1156593/videos?language=en-US', API_OPTIONS);//put id

    const json = await data.json();
    console.log(json);

    const filterData = json.results.filter(video => video.type === "Trailer");
    console.log(filterData);
    

    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer);
    
    //call function inside useEffect
  }

  useEffect(()=> {
    getMovieVideos();
  },[])

  return (
    <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/m_TWESxP_DE?si=MsnID3Mw03eoDWhz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground;