import { useEffect, useState } from "react";
import CourseContent from "./components/CourseContent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { elementInViewport } from "./utils/commonFunctions";
import { API_URL } from "./utils/constants";

const Home = () => {
  const [inViewport, setInViewport] = useState(true),
    [data, setData] = useState({}),
    [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setInViewport(elementInViewport(document.getElementById("header")))
      );
    }
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  useEffect(() => {
    fetch(API_URL, { method: "GET" })
      .then((res) => res.json())
      .then(({ data }) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return loading ? (
    <h1 className="text-center text-3xl font-bold">Loading...</h1>
  ) : (
    <>
      <Navbar data={data} inViewport={inViewport} />
      <div className="mx-auto w-11/12 px-16 bg-gray-100">
        <Header data={data} />
        <div className="h-0.5 my-16 bg-gray-300" />
        <CourseContent data={data} />
        <div className="h-0.5 my-16 bg-gray-300" />
        <Footer data={data} />
      </div>
    </>
  );
};

export default Home;
