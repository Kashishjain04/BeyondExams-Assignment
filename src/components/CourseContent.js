import { formatTime } from "../utils/commonFunctions";
import { Slides, Time } from "./Icons";
import SingleModule from "./SingleModule";

const CourseContent = ({ data }) => {
  return (
    <div>
      <h1 className="ml-16 text-2xl font-semibold">
        What's inside the course ?
      </h1>
      <div className="ml-16 flex my-6 items-center space-x-6 text-sm">
        <p className="flex items-center space-x-1">
          <Slides className="h-6 w-6" />
          <span>{data?.course?.video_count} Videos</span>
        </p>
        <p className="flex items-center space-x-1">
          <Time className="h-6 w-6" />
          <span>{formatTime(data?.course?.total_time)}</span>
        </p>
      </div>
      <div className="ml-16 border-l-2 border-dashed border-gray-400 ">
        {data?.course?.modules?.map((module) => (
          <SingleModule data={module} key={module.id} />
        ))}
      </div>
      <div className="mx-auto mt-10 p-4 grid grid-rows-2 space-y-1 bg-yellow-500 rounded-2xl text-center text-white">
        <div className="w-1/2 mx-auto">
          <h1 className="text-2xl font-medium my-3">Love the content ?</h1>
          <p>
            Appreciate the the content creator by making a small contribution
          </p>
        </div>
        <div>
          <button className="bg-white rounded-lg text-yellow-500 py-2 w-44 my-3">
            Klapz
          </button>
          <p>
            to
            <span className="font-semibold">
              {" "}
              {data?.course?.creator?.name}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
