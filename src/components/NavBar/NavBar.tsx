import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

    return (
        <nav className="bg-white dark:bg-transparent fixed w-full z-20 top-0 start-0 shadow-lg">
   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a
      href="/"
      className="flex items-center space-x-3 rtl:space-x-reverse"
    >
      <img
        src="https://raw.githubusercontent.com/livehass/blog-pessoal-react/main/src/assets/react.svg"
        className="h-8"
        alt="logo react"
      />
      <span className="shadow-lg self-center text-3xl font-semibold whitespace-nowrap dark:text-white hover:text-blue-700">
        JF
      </span>
    </a>
    <div
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-sticky"
    >
      <ul className="flex shadow-lg flex-col text-x4 p-4 md:p-1 mt-4 font-medium border border-gray-100 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
        <li>
          <a
            className="block text-x4 py-2 px-4 text-white  hover:text-blue-700 "
            aria-current="page"
            onClick={() => {
              const element = document.getElementById('home')
              element.scrollIntoView({
                behavior: 'smooth'
              })
            }}
          >
            <button className='hover:underline'>HOME</button>
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              const element = document.getElementById('about');
              element.scrollIntoView({
              behavior: 'smooth'

              })
            }}
            className="block py-2 px-4 text-white hover:text-blue-700"
          >
            <Link to='' className='hover:underline'>ABOUT ME</Link>
          </a>
        </li>
        <li>
          <a
            
            className="block py-2 px-4 text-x4  md:hover:bg-transparent  md:p-2 text-white hover:text-blue-700"
          >
            <button 
             onClick={() => {
              const element = document.getElementById('projects');
              element.scrollIntoView({
              behavior: 'smooth'

              })
            }}
            className='hover:underline'>PROJECTS</button>
          </a>
        </li>
      </ul>     
    </div>
  </div>
</nav>


      )
    }


export default Navbar