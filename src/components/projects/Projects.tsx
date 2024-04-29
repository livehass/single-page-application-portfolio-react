import { Link } from "react-router-dom";
import { useRef } from 'react';

function Projects() {
    const projectsRef = useRef<HTMLDivElement | null>(null);
    return (
        <>
            <div ref={projectsRef} id="projects" className="bg-slate-800 w-auto font-bold pb-10">                                           
                <div className="text-center py-10">
                    <h2 className="text-4xl text-white font-bold text-center  uppercase">Pr
                        <a className="underline decoration-4 underline-offset-8 uppercase decoration-blue-600 ">
                            ojec
                        </a>ts
                    </h2>
                    <p className="text-slate-400 font-bold text-2xl mt-2 w-auto text-wrap">
                        You will find a little intro about me and the skills and technologies I use daily.
                    </p>
                </div>
                <div id="cards" className="flex flex-wrap items-center justify-center gap-3">
                    <div id="card " className="max-w-lg  rounded-3xl bg-slate-950  ">
                        <img className="object-fill max-w-lg rounded-3xl " src="/public/projects/travelbackpack.png" alt="logo project" />
                        <p className="max-w-md text-left m-4  text-white text-3xl font-bold text-wrap">
                            Travel backpack with localStorage
                        </p>
                        <p className="max-w-md text-left mx-3 text-white font-bold text-2xl mt-2 text-wrap">
                            JavaScript for the application logic HTML/CSS for structure and styling, localStorage for storing data 
                            locally in the browser, and JSON Fetch for loading new items from an external source..
                        </p>
                        <p className="max-w-md text-left text-slate-400 font-bold text-1xl mt-2 mx-3 text-wrap">
                                Add new tasks, 
                                Mark tasks as completed, 
                                Remove tasks from the list, 
                                Data persistence using localStorage to retain tasks even after the browser is closed.
                        </p>
                        <ul className="flex flex-wrap gap-1 w-auto mt-5 ml-5 text-left">
                            <li>
                                <p className="bg-slate-500 rounded-lg w-auto p-2 text-center">Javascript</p>
                            </li>
                            <li>
                                <p className="bg-slate-500 rounded-lg w-auto p-2 text-center">Css</p>
                            </li>
                            <li>
                                <p className="bg-slate-500 rounded-lg w-auto p-2 text-center">Html</p>
                            </li>
                        </ul>
                        <div className="w-auto mb-5">
                            <button  className='border font-bold rounded-lg mx-5 px-4 hover:bg-blue-900 text-x2  bg-blue-700 py-3 mt-3'>
                            <Link to='https://travel-backpack-with-local-storage.vercel.app/' className='text-white'>View Live</Link>
                            </button>
                            <button  className='border font-bold rounded-lg px-4  hover:text-blue-900 border-blue-700 hover:underline py-3 mt-3'>
                            <Link to='https://github.com/livehass/Travel-backpack-with-localStorage/tree/main' className='text-white'>View Repository</Link>
                            </button>
                        </div>
                    </div>
                    <div id="card " className="max-w-lg  rounded-3xl bg-slate-950  ">
                        <img className="object-fill max-w-lg rounded-3xl " src="/public/projects/ecofamily.png" alt="logo project" />
                        <p className="max-w-md text-left m-4  text-white text-3xl font-bold text-wrap">
                            Ecofamily is an e-commerce specializing in green-certified products.
                        </p>
                        <p className="max-w-md text-left mx-3 text-white font-bold text-2xl mt-2 text-wrap">
                            Developed during the Java Fullstack Generation bootcamp, this project is part of the final 
                            course project, to create a digital e-commerce platform
                        </p>
                        <p className="max-w-md text-left text-slate-400 font-bold text-1xl mt-2 mx-3 text-wrap">
                            The project is complete, ranging from the Java backend development, including creation and 
                            deployment using a PostgreSQL database in a Docker container, 
                            and frontend built with React and TypeScript
                        </p>
                        <ul className="flex flex-wrap gap-1 w-auto mt-5 ml-5 text-left">
                            <li>
                                <p className="bg-slate-500 rounded-lg max-w-screen-sm p-2 text-center">Java</p>
                            </li>
                            <li>
                                <p className="bg-slate-500 rounded-lg max-w-screen-sm p-2 text-center">SprinBoot</p>
                            </li>
                            <li>
                                <p className="bg-slate-500 rounded-lg max-w-screen-sm p-2 text-center">PostgreSQL</p>
                            </li>
                            <li>
                                <p className="bg-slate-500 rounded-lg max-w-screen-sm p-2 text-center">Docker</p>
                            </li>
                            <li>
                                <p className="bg-slate-500 rounded-lg max-w-screen-sm p-2 text-center">React</p>
                            </li>
                            <li>
                                <p className="bg-slate-500 rounded-lg max-w-screen-sm p-2 text-center">Typescript</p>
                            </li>
                        </ul>
                        <div className="w-auto mb-5">
                            <button  className='border font-bold rounded-lg mx-5 px-4 hover:bg-blue-900 text-x2  bg-blue-700 py-3 mt-3'>
                            <Link to='https://ecofamily.vercel.app/' className='text-white'>View Live</Link>
                            </button>
                            <button  className='border font-bold rounded-lg px-4  hover:text-blue-900 border-blue-700 hover:underline py-3 mt-3'>
                            <Link to='https://github.com/Generation-ecoFamily/ecofamily-front' className='text-white'>View Repository</Link>
                            </button>
                        </div>
                    </div>   
                </div>
            </div>
        </>
    );
}

export default Projects