import { FaCaretRight } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
const VideoTitle = ({title, overview}) => {
  return (
    <div className="pt-[28%] px-8 sm:pt-[13%] sm:px-12 absolute z-30 w-[100%] h-[100%] bg-black bg-opacity-40 text-white">
      <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">{title}</h1>
      <p className="py-4 sm:w-1/3 lg:py-4 xl:py-6 text-sm w-1/2 2xl:w-1/4 xl:text-base">{overview}</p>
      <div className="my-3 sm:my-4 md:my-2 flex gap-2">
        <button className="bg-white flex items-center p-2 px-9 text-sm rounded-lg text-black hover:bg-opacity-70 sm:text-lg md:text-xl"><FaCaretRight/>Play</button>
        <button className="bg-gray-500 flex gap-1 items-center p-2 px-9 text-sm bg-opacity-50 hover:bg-opacity-80 rounded-lg text-white sm:text-lg md:text-xl">
           <FaInfoCircle/> More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle;