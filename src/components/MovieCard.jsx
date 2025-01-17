import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className="w-24 sm:w-36 md:w-40 lg:w-48">
      <img className="" src={IMG_CDN_URL + posterPath} alt="Movie Card" />
    </div>
  )
}

export default MovieCard;