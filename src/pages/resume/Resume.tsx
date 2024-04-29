import React, { FC } from "react";
import Navbar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";

const Resume: FC = () => {
  return (
    <>
      <button className="border rounded-lg px-6 hover:text-blue-900 border-blue-700 py-3 ml-6 mt-2">
        <Link to="/" className="hover:underline text-white">
          Back to Home
        </Link>
      </button>
      <div className="max-h-screen min-h-screen items-center flex justify-center my-10 static overflow-hidden">
        <object
          className="max-h-screen min-h-screen fixed"
          data="/public/files/CV_Jorge_Felipe.pdf"
          type="application/pdf"
          width="900"
          height="400"
        ></object>
      </div>
      <div></div>
    </>
  );
};

export default Resume;
