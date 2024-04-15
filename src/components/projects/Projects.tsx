import { Link } from "react-router-dom";
import { useRef } from 'react';

function Projects() {
    const projectsRef = useRef<HTMLDivElement | null>(null);
    return (
        <>
            <div ref={projectsRef} id="projects" className="bg-slate-800 w-auto font-bold">                                           
                <div className="text-center py-10">
                    <h2 className="text-4xl text-white font-bold text-center  uppercase">Pr<a className="underline decoration-4 underline-offset-8 uppercase decoration-blue-600 ">ojec</a>ts</h2>
                    <p className="text-slate-400 font-bold text-2xl mt-2 w-auto text-wrap">You will find a little intro about me and the skills and technologies I use daily.</p>
                </div>
                <div id="cards" className="grid grid-cols-2 mx-60 gap-5 place-content-center mb-">
                    <div id="card " className="w-auto  rounded-3xl bg-slate-950  ">
                        <img className="w-auto rounded-3xl " src="/public/projects/travelbackpack.png" alt="logo project" />
                        <p className="w-auto text-left mx-5 mt-3 text-white text-3xl font-bold text-wrap">Oshere - All about movies, tv-series, and communities.</p>
                        <p className="w-auto text-left mx-5 text-slate-400 font-bold text-2xl mt-2 text-wrap">Oshere is a media project that lists many movies and television series. Every form of media has a community (chat forum) that any authenticated user may start.</p>
                        <p className="w-auto text-center text-slate-400 font-bold text-2xl mt-2 text-wrap">In addition, users can conduct media searches.</p>
                        <ul className="flex flex-wrap gap-1 w-auto mt-5 ml-5 text-left">
                            <li>
                                <p className="bg-slate-500 rounded-lg w-auto p-2 text-center">Node.js</p>
                            </li>
                            <li>
                                <p className="bg-slate-500 rounded-lg w-auto p-2 text-center">Express.js</p>
                            </li>
                            <li>
                                <p className="bg-slate-500 rounded-lg w-auto p-2 text-center">Elixir</p>
                            </li>
                            <li>
                                <p className="bg-slate-500 rounded-lg w-auto p-2 text-center">Phoenix Framework</p>
                            </li>
                            <li>
                                <p className="bg-slate-500 rounded-lg w-auto p-2 text-center">Clojure</p>
                            </li>
                            <li>
                                <p className="bg-slate-500 rounded-lg w-auto p-2 text-center">ClojureScript</p>
                            </li>
                        </ul>
                        <div className="w-auto mb-5">
                            <button  className='border font-bold rounded-lg mx-5 px-4 hover:bg-blue-900 text-x2  bg-blue-700 py-3 mt-3'>
                            <Link to='/postagens' className='text-white'>View Resume</Link>
                            </button>
                            <button  className='border font-bold rounded-lg px-4  hover:text-blue-900 border-blue-700 hover:underline py-3 mt-3'>
                            <Link to='/postagens' className='text-white'>View Resume</Link>
                            </button>
                        </div>
                    </div>
                    <div id="card " className="w-auto  rounded-3xl bg-slate-950  ">
                        <img className="w-auto rounded-3xl " src="/public/projects/ecofamily.png" alt="logo project" />
                        <p className="w-auto text-left mx-5 mt-3 text-white text-3xl font-bold text-wrap">Oshere - All about movies, tv-series, and communities.</p>
                        <p className="w-auto text-left mx-5 text-slate-400 font-bold text-2xl mt-2 text-wrap">Oshere is a media project that lists many movies and television series. Every form of media has a community (chat forum) that any authenticated user may start.</p>
                        <p className="w-auto text-center text-slate-400 font-bold text-2xl mt-2 text-wrap">In addition, users can conduct media searches.</p>
                        <ul className="flex flex-wrap gap-1 w-auto mt-5 ml-5 text-left">
                            <li>
                                <p className="bg-slate-500 rounded-lg w-auto p-2 text-center">Node.js</p>
                            </li>
                            <li>
                                <p className="bg-slate-500 rounded-lg w-auto p-2 text-center">Express.js</p>
                            </li>
                            <li>
                                <p className="bg-slate-500 rounded-lg w-auto p-2 text-center">Elixir</p>
                            </li>
                            <li>
                                <p className="bg-slate-500 rounded-lg w-auto p-2 text-center">Phoenix Framework</p>
                            </li>
                            <li>
                                <p className="bg-slate-500 rounded-lg w-auto p-2 text-center">Clojure</p>
                            </li>
                            <li>
                                <p className="bg-slate-500 rounded-lg w-auto p-2 text-center">ClojureScript</p>
                            </li>
                        </ul>
                        <div className="w-auto mb-5">
                            <button  className='border font-bold rounded-lg mx-5 px-4 hover:bg-blue-900 text-x2  bg-blue-700 py-3 mt-3'>
                            <Link to='/postagens' className='text-white'>View Resume</Link>
                            </button>
                            <button  className='border font-bold rounded-lg px-4  hover:text-blue-900 border-blue-700 hover:underline py-3 mt-3'>
                            <Link to='/postagens' className='text-white'>View Resume</Link>
                            </button>
                        </div>
                    </div>
                    <div id="card " className="w-auto  rounded-3xl bg-slate-950 mt-10 mb-10 ">
                        <img className="w-auto rounded-3xl " src="/public/projects/blogpessoal.png" alt="logo project" />
                        <p className="w-auto text-left mx-5 mt-3 text-white text-3xl font-bold text-wrap">Oshere - All about movies, tv-series, and communities.</p>
                        <p className="w-auto text-left mx-5 text-slate-400 font-bold text-2xl mt-2 text-wrap">Oshere is a media project that lists many movies and television series. Every form of media has a community (chat forum) that any authenticated user may start.</p>
                        <p className="w-auto text-center text-slate-400 font-bold text-2xl mt-2 text-wrap">In addition, users can conduct media searches.</p>
                        <ul className="flex flex-wrap gap-1 w-auto mt-5 ml-5 text-left">
                            <li>
                                <p className="bg-slate-500 rounded-lg w-auto p-2 text-center">Node.js</p>
                            </li>
                            <li>
                                <p className="bg-slate-500 rounded-lg w-auto p-2 text-center">Express.js</p>
                            </li>
                            <li>
                                <p className="bg-slate-500 rounded-lg w-auto p-2 text-center">Elixir</p>
                            </li>
                            <li>
                                <p className="bg-slate-500 rounded-lg w-auto p-2 text-center">Phoenix Framework</p>
                            </li>
                            <li>
                                <p className="bg-slate-500 rounded-lg w-auto p-2 text-center">Clojure</p>
                            </li>
                            <li>
                                <p className="bg-slate-500 rounded-lg w-auto p-2 text-center">ClojureScript</p>
                            </li>
                        </ul>
                        <div className="w-auto mb-5">
                            <button  className='border font-bold rounded-lg mx-5 px-4 hover:bg-blue-900 text-x2  bg-blue-700 py-3 mt-3'>
                            <Link to='/postagens' className='text-white'>View Resume</Link>
                            </button>
                            <button  className='border font-bold rounded-lg px-4  hover:text-blue-900 border-blue-700 hover:underline py-3 mt-3'>
                            <Link to='/postagens' className='text-white'>View Resume</Link>
                            </button>
                        </div>
                    </div>
                    <div id="card " className="w-auto  rounded-3xl bg-slate-950 mt-10 mb-10 ">
                        <img className="w-auto rounded-3xl " src="/public/projects/travelbackpack.png" alt="logo project" />
                        <p className="w-auto text-left mx-5 mt-3 text-white text-3xl font-bold text-wrap">Oshere - All about movies, tv-series, and communities.</p>
                        <p className="w-auto text-left mx-5 text-slate-400 font-bold text-2xl mt-2 text-wrap">Oshere is a media project that lists many movies and television series. Every form of media has a community (chat forum) that any authenticated user may start.</p>
                        <p className="w-auto text-center text-slate-400 font-bold text-2xl mt-2 text-wrap">In addition, users can conduct media searches.</p>
                        <ul className="flex flex-wrap gap-1 w-auto mt-5 ml-5 text-left">
                            <li>
                                <p className="bg-slate-500 rounded-lg w-auto p-2 text-center">Node.js</p>
                            </li>
                            <li>
                                <p className="bg-slate-500 rounded-lg w-auto p-2 text-center">Express.js</p>
                            </li>
                            <li>
                                <p className="bg-slate-500 rounded-lg w-auto p-2 text-center">Elixir</p>
                            </li>
                            <li>
                                <p className="bg-slate-500 rounded-lg w-auto p-2 text-center">Phoenix Framework</p>
                            </li>
                            <li>
                                <p className="bg-slate-500 rounded-lg w-auto p-2 text-center">Clojure</p>
                            </li>
                            <li>
                                <p className="bg-slate-500 rounded-lg w-auto p-2 text-center">ClojureScript</p>
                            </li>
                        </ul>
                        <div className="w-auto mb-5">
                            <button  className='border font-bold rounded-lg mx-5 px-4 hover:bg-blue-900 text-x2  bg-blue-700 py-3 mt-3'>
                            <Link to='/postagens' className='text-white'>View Resume</Link>
                            </button>
                            <button  className='border font-bold rounded-lg px-4  hover:text-blue-900 border-blue-700 hover:underline py-3 mt-3'>
                            <Link to='/postagens' className='text-white'>View Resume</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects