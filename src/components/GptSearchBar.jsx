
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useState } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

// import openai from "../utils/openai";

const  GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector(store => store.config.lang);
  const [searchText, setSearchText] = useState("");

  //for each movie search TMDB api
  const searchMovieTMDB = async (movie)=>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS);

    const json = await data.json();

    return json.results;
  }

  const handleGptSearchClick = async () => {
    console.log(searchText);

    //make an API call to GPT API and get mpvie
    const gptQuery = "Act as a movie Recommendation system and suggest some movies for the query :" + searchText + "only give me names of 5 movies, comma seperated like the example result given ahead. Example result: Gadar, Shole, Don...";    

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery}],
      model: 'gpt-3.5-turbo',
    });
    if(!gptResults.choices){}
    console.log(gptResults.choices?.[0]?.message?.content);

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");//will be array

    const promiseArray = gptMovies.map(movie =>searchMovieTMDB(movie)) ;//[p,p,p,p,p]

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}));

  }


  return (
    <div className="pt-[38%] px-14 flex justify-center sm:pt-[25%] md:pt-[10%]">
      <form onSubmit={(e)=>e.preventDefault()} className="bg-black w-full md:w-2/3  lg:w-1/2 grid grid-cols-12" action="">
        <input className="p-4 m-4 col-span-9 text-xs sm:text-base lg:text-lg" value={searchText} onChange={(e)=> setSearchText(e.target.value)} type="text" placeholder={lang[langKey].gptSearchPlaceholder}/>
        <button onClick={handleGptSearchClick} className="m-4 col-span-3 min-w-12 bg-red-700 text-white rounded-lg text-sm sm:text-base">
          {lang[langKey].search}
        </button>
      </form>  
    </div>
  )
}

export default GptSearchBar;


