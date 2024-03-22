import React from 'react';
import homeLogo from '../../assets/home.png'
import './Home.css';

import { Link } from 'react-router-dom';

function Home() {
    return (
    <>
    <header className='grid gap-4 grid-cols-2 font-bold content-center w-auto m-64'>
      <div className='text-left w-auto text-balance mt-5'>
          <div className='mt-20 ml-40'>
            <h1 className=' text-slate-400 text-7x1'>Hello Friend I'm</h1>
            <h2 className='text-white text-9xl mb-10'>Jorge Felipe,</h2>
            <p className='text-slate-400 text-balance w-79 text-7x1 '>A passionate fullstack developer focused in create front end apps in react and backend with java spring.</p>
           
            <button  className='border rounded-lg px-6 bg-blue-700  hover:text-blue-900 py-3 mr-2  mt-4'>
                <Link to='/postagens' className='hover:underline text-white'>See my work</Link>
              </button>
              <button  className='border rounded-lg px-6 hover:text-blue-900 border-blue-700 py-3 ml-6 mt-2'>
                <Link to='/postagens' className='hover:underline text-white'>View Resume</Link>
              </button>
          </div>
       </div>
       <div className='w-auto mr-40 mt-11'>
            <img src="https://raw.githubusercontent.com/livehass/blog-pessoal-react/main/src/assets/proglogo.png" alt="" />
       </div>
    </header>
    </>
    );
}

export default Home;