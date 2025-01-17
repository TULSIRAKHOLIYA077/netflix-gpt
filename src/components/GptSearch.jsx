import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import {BG_URL} from "../utils/constants";

const GptSearch = () =>{
  return (
    <div>
        <div className="fixed -z-10 w-full h-full">
          <div className="absolute w-full h-[100%] bg-gradient-to-r from-black to-black opacity-40"></div>
          <img
            className="w-full h-full object-cover"
            src={BG_URL}
            alt="Background"
          />
        </div>

      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch;