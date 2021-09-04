import { useRef } from "react";
import CourseCard from "./CourseCard";
import { LeftChevron, RightChevron } from "./Icons";
import RequestCourse from "./RequestCourse";

const Footer = ({ data }) => {
  const coursesRef = useRef(null);
  const scrollLeft = () => {
    coursesRef?.current?.scrollLeft && (coursesRef.current.scrollLeft = 0);
  };
  const scrollRight = () => {
    coursesRef?.current?.scrollLeft &&
      (coursesRef.current.scrollLeft = coursesRef.current.scrollWidth);
  };
  const ScrollButton = ({ direction, Icon, ...props }) => (
    <div
      className={`cursor-pointer hover:shadow-2xl hover:scale-110 transition-all duration-150 absolute top-1/2 transform -translate-y-1/2 grid place-items-center bg-white p-2 rounded-full ${
        direction === "left" ? "-left-12" : "-right-12"
      }`}
      {...props}
    >
      {Icon}
    </div>
  );

  return (
    <div className="pb-10">
      <h1 className="ml-16 text-2xl font-semibold">
        More Courses from "
        <span className="text-purple-600">{data?.course?.creator?.name}</span>"
      </h1>
      {data?.course?.creator?.user_courses.length > 0 ? (
        <div className="relative">
          <ScrollButton
            direction="left"
            Icon={<LeftChevron className="h-6 w-6" />}
            onClick={scrollLeft}
          />
          <div
            ref={coursesRef}
            className="flex overflow-x-scroll space-x-5 py-10 px-2"
          >
            {data?.course?.creator?.user_courses.map((course) => (
              <CourseCard key={course?.id} course={course} />
            ))}
          </div>
          <ScrollButton
            direction="right"
            Icon={<RightChevron className="h-6 w-6" />}
            onClick={scrollRight}
          />
        </div>
      ) : (
        <RequestCourse name={data?.course?.creator?.name} />
      )}
    </div>
  );
};

export default Footer;
