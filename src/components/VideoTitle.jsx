import { FaCaretRight } from "react-icons/fa";
const VideoTitle = ({title, overview}) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4 flex gap-2">
        <button className="bg-gray-500 flex items-center p-2 px-9 text-xl bg-opacity-50 rounded-lg text-white"><FaCaretRight/>Play</button>
        <button className="bg-gray-500 flex items-center p-2 px-9 text-xl bg-opacity-50 rounded-lg text-white">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;