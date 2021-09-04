import logo from "../assets/images/logo.svg";
import { DownChevron, Notification, Search } from "./Icons";
import ScrolledHeader from "./ScrolledHeader";
const Navbar = ({ data, inViewport }) => {
  return (
    <div className="sticky top-0 bg-white z-20">
      <div className="w-screen shadow-md py-2 px-4 flex space-x-6 bg-white z-20">
        <img src={logo} alt="logo" className="h-14 mr-10" />
        <div className="relative flex-grow h-14 bg-purple-200 rounded-r-lg py-2 flex items-center pl-20 justify-evenly">
          <div className="absolute top-0 left-0 transform -translate-x-1/2 h-14 w-14 bg-purple-500 p-2 grid place-items-center rounded-full">
            <Search className="h-6 w-6 text-white" />
          </div>
          <p className="">Courses</p>
          <div className="bg-white rounded-t-2xl -mb-4 p-4 flex items-center justify-between w-64">
            <p>
              <span>😅</span>{" "}
              <span className="mx-4 text-purple-600">Beginner</span>
            </p>
            <DownChevron className="h-6 w-6 cursor-pointer" />
          </div>
          <ul className="nav__list">
            <li>Create a course</li>
            <li>My Dashboard</li>
            <li>
              <Notification className="h-6 w-6" />
            </li>
            <li>
              <div className="bg-purple-600 rounded-full p-0.5 relative">
                <div className="absolute bottom-0 left-0 p-0.5 grid place-items-center bg-purple-200 rounded-full">
                  <div className="w-4 h-4 grid place-items-center text-xs text-white bg-purple-600 font-semibold rounded-full">
                    s
                  </div>
                </div>
                <div className="bg-white rounded-full p-0.5">
                  <img
                    className="h-9 w-9 bg-transparent rounded-full"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                    alt="profile"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {!inViewport && <ScrolledHeader data={data} />}
    </div>
  );
};

export default Navbar;
