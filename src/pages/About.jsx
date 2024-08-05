import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col gap-5 justify-center items-center  bg-red-300">
      <div className=" text-5xl font-extrabold">About</div>
      <Link to="/">Go back</Link>
    </div>
  );
};

export default About;
