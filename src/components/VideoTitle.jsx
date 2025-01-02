import { FaCaretRight } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
const VideoTitle = ({title, overview}) => {
  return (
    <div className="pt-[13%] px-12 absolute z-30 text-white">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-sm w-1/4">{overview}</p>
      <div className="my-4 flex gap-2">
        <button className="bg-white flex items-center p-2 px-9 text-xl rounded-lg text-black hover:bg-opacity-70"><FaCaretRight/>Play</button>
        <button className="bg-gray-500 flex gap-1 items-center p-2 px-9 text-xl bg-opacity-50 hover:bg-opacity-80 rounded-lg text-white">
           <FaInfoCircle/> More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle;