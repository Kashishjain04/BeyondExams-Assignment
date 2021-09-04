const CourseCard = ({ course }) => {
  return (
    <div className="p-1 rounded-2xl shadow-xl bg-white">
      <img
        className="h-60 w-52 max-w-5xl rounded-t-2xl object-cover object-top"
        src={
          course?.image_url ||
          "https://api.beyondexams.org/images/be_logos/instgram%20profile.jpg"
        }
        alt="course"
      />
      <div className="px-2 pb-2">
        <p className="line-clamp-1 my-2">{course?.title}</p>
        <p className="text-xs text-gray-500 mt-5">
          {course?.video_count} Videos
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
