import { getTimeAgo } from "../utils/commonFunctions";
import Button from "./Button";
import { Info, Mute, RightArrow, Star, StarOutline } from "./Icons";

const Header = ({ data }) => {
  const Dot = () => <div className="h-2 w-2 bg-black rounded-full"></div>;

  return (
    <div id="header" className="py-10">
      <div className="flex mt-14">
        {/* left (image) */}
        <div className="w-14 h-14 p-2 mr-5 bg-white rounded-2xl shadow-xl grid place-items-center">
          <img
            className="object-contain"
            src={data?.course?.image_url}
            alt="course-icon"
          />
        </div>

        {/* middle details */}
        <div className="relative w-1/2 ml-5">
          <div className="flex items-center justify-evenly w-72 absolute -top-12 text-gray-500">
            <span>Explore by topics</span> <RightArrow className="h-6 w-6" />{" "}
            <span>Engineering</span>
          </div>
          <h1 className="text-2xl font-medium">{data?.course?.title}</h1>
          <p className="my-4 font-light">{data?.course?.description}</p>
          <div className="my-8 flex items-center justify-start space-x-5 font-light">
            <div className="flex items-center space-x-1">
              <Star className="text-yellow-500 h-6 w-6" />
              <span>{data?.course?.rating_sum}</span>{" "}
              <span className="text-gray-500">
                ({data?.course?.rated_user})
              </span>
            </div>
            <Dot />
            <p>{data?.course?.total_views} Views</p>
            <Dot />
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">last updated</span>
              <span>{getTimeAgo(new Date(data?.course?.updated_at))}</span>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-start space-x-4">
            <Button text={"Enroll"} isActive />
            <Button text={"Start Course"} />
            <Button text={"Rate"} Icon={StarOutline} />
            <Button Icon={Mute} disabled />
          </div>
          <div className="flex items-center justify-start space-x-2 text-sm absolute -bottom-10">
            <Info className="h-5 w-5" />
            <span className="underline cursor-pointer">
              Benifits of enrollment
            </span>
          </div>
        </div>

        {/* right (author & share) */}
        <div className="flex flex-col w-min ml-auto">
          <div className="flex-grow text-right">
            <div className="w-14 h-14 bg-gray-300 p-1 rounded-full ml-auto mb-2">
              <div className="bg-white p-1 rounded-full">
                <img
                  className="rounded-full"
                  src={data?.course?.creator?.avatar}
                  alt="creator-avatar"
                />
              </div>
            </div>
            <p className="font-light">Created by</p>
            <p className="font-medium">{data?.course?.creator?.name}</p>
          </div>
          <div className="ml-auto">
            <Button text={"Share"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
