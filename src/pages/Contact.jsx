import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col gap-5 justify-center items-center  bg-green-300">
      <div className=" text-5xl font-extrabold">Contact</div>
      <Link to="/">Go back</Link>
    </div>
  );
};

export default Contact;
