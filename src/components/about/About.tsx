import { Link } from "react-router-dom";
import { useRef } from "react";

function About() {
  const projectsRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      {" "}
      <div id="about" className="bg-slate-800 w-auto">
        <div className="text-center mt-10 py-10">
          <h1 className="text-4xl text-white font-bold text-center mt-10">
            Ab
            <a className="underline decoration-4 underline-offset-8 decoration-blue-600 ">
              out{" "}
            </a>
            Me
          </h1>
          <p className="text-slate-400 font-bold text-2xl mt-2 ">
            You will find a little intro about me and the skills and
            technologies I use daily.
          </p>
        </div>
        <div className="text-white text-left grid grid-cols-2 gap-5 mx-32 mt-10">
          <div className="w-auto">
            <h2 className="font-bold text-4xl ">Want to know me?</h2>
            <p className="text-slate-400 font-bold text-2xl text-wrap mb-3 mt-3">
              I'm a Fullstack Developer passionate about crafting interactive,
              accessible, and responsive websites. Check out my{" "}
              <button
                className="text-blue-700 hover:text-blue-600"
                onClick={() => {
                  const element = document.getElementById("projects");
                  element.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                projects section{" "}
              </button>
              for some of the beautiful websites I've built.
              <p className="text-slate-400 font-bold text-2xl text-wrap mt-6">
                I'm currently open to Job opportunities where I can contribute
                to your business and create delightful user experiences. Feel
                free to contact me if you find my skills useful.
              </p>
            </p>
            <button
              className="border font-bold rounded-lg px-4 hover:bg-blue-900 text-x2 
                         bg-blue-700 py-3 mt-3"
            >
              <Link to="/postagens" className="text-white">
                View Resume
              </Link>
            </button>
          </div>
          <div className=" w-auto font-bold mb-20">
            <h3 className="font-bold text-4xl ">Skills and Technologies</h3>
            <p className="text-slate-400 text-2xl mt-2">
              I'm actively using and familiar with the following:
            </p>
            <p className="font-bold text-3xl mt-10 ">Actively using</p>
            <ul className="flex flex-wrap gap-4 w-auto mt-5">
              <li>
                <p className="bg-slate-500 rounded-lg w-auto p-3 text-center">
                  Tailwindcss
                </p>
              </li>
              <li>
                <p className="bg-slate-500 rounded-lg w-auto p-3 text-center">
                  Styled-components
                </p>
              </li>
              <li>
                <p className="bg-slate-500 rounded-lg w-auto p-3 text-center">
                  Javascript
                </p>
              </li>
              <li>
                <p className="bg-slate-500 rounded-lg w-auto p-3 text-center">
                  Typescript
                </p>
              </li>
              <li>
                <p className="bg-slate-500 rounded-lg w-auto p-3 text-center">
                  React
                </p>
              </li>
              <li>
                <p className="bg-slate-500 rounded-lg w-auto p-3 text-center">
                  Next.js
                </p>
              </li>
              <li>
                <p className="bg-slate-500 rounded-lg w-auto p-3 text-center">
                  Cypress
                </p>
              </li>
              <li>
                <p className="bg-slate-500 rounded-lg w-auto p-3 text-center">
                  Jest
                </p>
              </li>
              <li>
                <p className="bg-slate-500 rounded-lg w-auto p-3 text-center">
                  Git
                </p>
              </li>
              <li>
                <p className="bg-slate-500 rounded-lg w-auto p-3 text-center">
                  Github
                </p>
              </li>
            </ul>
            <p className="font-bold text-3xl mt-5 ">Familiar with</p>
            <ul className="flex flex-wrap gap-4 w-auto mt-5">
              <li>
                <p className="bg-slate-500 rounded-lg w-auto p-3 text-center">
                  Node.js
                </p>
              </li>
              <li>
                <p className="bg-slate-500 rounded-lg w-auto p-3 text-center">
                  Express.js
                </p>
              </li>
              <li>
                <p className="bg-slate-500 rounded-lg w-auto p-3 text-center">
                  Elixir
                </p>
              </li>
              <li>
                <p className="bg-slate-500 rounded-lg w-auto p-3 text-center">
                  Phoenix Framework
                </p>
              </li>
              <li>
                <p className="bg-slate-500 rounded-lg w-auto p-3 text-center">
                  Clojure
                </p>
              </li>
              <li>
                <p className="bg-slate-500 rounded-lg w-auto p-3 text-center">
                  ClojureScript
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
