import Button from "./Button";

const RequestCourse = ({ name }) => {
  return (
    <div className="px-20 py-10 my-6 bg-white rounded-2xl grid grid-rows-2 place-items-center space-y-4">
      <div className="text-center">
        <p>It seems like “{name}” didn’t continue making more courses. 😕</p>
        <p className="font-semibold">Request a course.</p>
      </div>
      <div className="w-full flex items-center justify-center space-x-4">
        <input
          type="text"
          className="flex-grow bg-gray-100 p-2 rounded-md border border-black"
          placeholder="name of the course"
        />
        <Button text="Request" isActive />
      </div>
    </div>
  );
};

export default RequestCourse;
