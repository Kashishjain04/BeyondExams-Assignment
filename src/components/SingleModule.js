import { useState } from "react";
import { formatTime } from "../utils/commonFunctions";
import { DownChevron, Likes, Slides, Time, Views } from "./Icons";

const SingleModule = ({ data }) => {
  const [open, setOpen] = useState(true);
  const toggleHandler = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="-ml-16">
      <div
        onClick={toggleHandler}
        className="relative sm:bg-gray-200 my-6 p-4 rounded-xl flex cursor-pointer transform transition-all delay-150"
      >
        <p className="absolute left-12 h-7 w-7 grid place-items-center bg-gray-300 font-semibold rounded-full">
          {data?.ordering}
        </p>
        <h1 className="ml-28 mr-5 font-semibold">Module {data?.ordering} :</h1>
        <div className="grid grid-rows-2 space-y-3 mx-5 flex-grow">
          <h1 className="font-medium">{data?.title}</h1>
          <div className="flex space-x-4 text-xs text-gray-400">
            <p>
              <Slides className="h-4 w-4 inline mr-2" />
              <span>{data?.num_videos} Videos</span>
            </p>
            <p>
              <Time className="h-4 w-4 inline mr-2" />
              <span>{formatTime(data?.duration)}</span>
            </p>
          </div>
        </div>
        <DownChevron
          className={`h-6 w-6 mx-5 transform transition-transform delay-150 ${
            open && "rotate-180"
          }`}
        />
      </div>
      {open &&
        data?.videos?.map((video, index) => (
          <div key={index} className="relative my-4 p-4 flex cursor-pointer">
            <p className="absolute left-11 h-9 w-9 grid place-items-center bg-gray-300 rounded-full self-center">
              {data?.ordering}.{index + 1}
            </p>
            <img
              src={video?.thumbnails}
              alt="thumbnail"
              className="ml-28 mr-5 w-52 rounded-xl shadow-lg"
            />
            <div className="flex flex-col justify-evenly py-4">
              <p>{video?.title}</p>
              <p className="text-light mt-1 mb-3">{video?.channelTitle}</p>
              <div className="flex items-center space-x-4">
                <p className="text-gray-400 flex items-center space-x-1">
                  <Views className="h-4 w-4" />
                  <span>{video?.youtube_view_count} Views</span>
                </p>
                <p className="text-gray-400 flex items-center space-x-1">
                  <Likes className="h-4 w-4" />
                  <span>{video?.likes_count} Likes</span>
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SingleModule;
