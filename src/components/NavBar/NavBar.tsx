import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

    return (
        <nav className="bg-white dark:bg-transparent fixed w-full z-20 top-0 start-0 shadow-lg shadow-slate-950 ">
   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a
      href="https://github.com/livehass"
      className="flex items-center space-x-3 rtl:space-x-reverse"
    >
      <img
        src="https://raw.githubusercontent.com/livehass/blog-pessoal-react/main/src/assets/react.svg"
        className="h-8"
        alt="logo react"
      />
      <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white hover:text-blue-700">
        JF
      </span>
    </a>
    <div
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-sticky"
    >
      <ul className="flex flex-col text-x3 p-4 md:p-1 mt-4 font-medium border border-gray-100 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
        <li>
          <a
            href="#"
            className="block text-x3 py-2 px-4 text-white  hover:text-blue-700 "
            aria-current="page"
          >
            <Link to='/Home' className='hover:underline'>HOME</Link>
          </a>
        </li>
        <li>
           
          <a
            href="/"
            className="block py-2 px-4 text-white hover:text-blue-700"
          >
            <Link to='/Temas' className='hover:underline'>ABOUT ME</Link>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-4  md:hover:bg-transparent  md:p-2 text-white hover:text-blue-700"
          >
            <Link to='/CadastroTema' className='hover:underline'>PROJECTS</Link>
          </a>
        </li>  
      </ul>
    </div>
  </div>
</nav>


      )
    }


export default Navbar