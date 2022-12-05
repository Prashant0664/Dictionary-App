import React from 'react'
import Dictlogo from "../assets/dictlogo.png"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Navbar = () => {
  return (
    <>
      <header className=' z-50 fixed top-0 left-0 right-0 opacity-100 bg-blue-700 shadow-black shadow-sm'>
        <nav className='flex items-center justify-between w-[100%] m-auto '>
          <div className='flex items-center'>
            <img src={Dictlogo} className='sm:m-2 w-14 m-2 mx-6' alt='dictionary-logo'></img>
          </div>
          <div className={` m-2 sm:text-[20px] text-sky-100 text-[30px] font-bold logo-text xsm:text-sm xsm:ml-2 `}>
              YOUR DICTIONARY
          </div>
          <div className='text-slate-200 m-2 mx-6 w-[10%]'>
            <div className='flex flex-row '>
              <a href="https://github.com/Prashant0664/Dictionary-App"><GitHubIcon className="transition-all duration-1000 mr-2 hover:text-slate-100 hover:scale-125"/></a>
              <a href="https://www.linkedin.com/in/prashant-693591228"><LinkedInIcon className='transition-all duration-1000 mr-2 hover:text-slate-100 hover:scale-125'/></a>
            </div>
          </div>
        </nav>
      </header>
    </>
  ) 
}

export default Navbar