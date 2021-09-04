import Button from "./Button";
import { Mute } from "./Icons";

const ScrolledHeader = ({ data }) => {
  return (
    <div className="py-2 px-14 flex items-center border-b">
      <div className="w-14 h-14 p-2 mr-5 bg-white rounded-2xl shadow-xl grid place-items-center">
        <img
          className="object-contain"
          src={data?.course?.image_url}
          alt="course-icon"
        />
      </div>
      <h1 className="text-xl font-medium flex-grow">{data?.course?.title}</h1>
      <div className="flex space-x-4">
        <Button Icon={Mute} disabled />
        <Button text="Share" />
        <Button text="Enroll" isActive />
      </div>
    </div>
  );
};

export default ScrolledHeader;
