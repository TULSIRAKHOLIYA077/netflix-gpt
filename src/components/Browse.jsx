import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePoluparMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const showGptSearch = useSelector(store =>store.gpt.showGptSearch);
  useNowPlayingMovies(); 
  usePopularMovies();
  return (
    <div className="">
      <Header/>
      {
      showGptSearch ? (
        <GptSearch/>
      ) : (
        <>
          <MainContainer/>
          <SecondaryContainer/>
        </>
      )
      }
    </div>
  )
}

export default Browse;