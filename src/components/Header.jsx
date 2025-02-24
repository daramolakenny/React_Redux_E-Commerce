import React from 'react'
import { Link } from 'react-router-dom'
import logo1 from '../assets/logo1.png';
import { navLinks } from '../constant';

const Header = () => {
  return (
    <div className='fixed top-0 left-0 z-10 bg-black w-full'>
      <div className='flex py-6 w-full text-slate-300 justify-around'>
        <div className='flex h-14'>
          <Link to='/'>
            <img src={logo1} alt="" className='text-white bg-slate-300 rounded p-1' />
          </Link>
        </div>
        <nav className='pt-4 flex'>
          {navLinks.map((item) => (
            <div key={item.id} className='hover:text-red-800'>
              <a 
                href={item.url}
                className='px-2 text-2xl'
              >
                {item.title}
              </a>
            </div>
          ))}
        </nav>

        <div className='pt-4 flex'>
          <form action="">
            <input type="text" placeholder='Search' className='border border-slate-300 rounded p-2' />
          </form>
          <Link to='/cart' className='text-2xl ml-4 hover:text-red-800'>Cart</Link>
        </div>

      </div>
    </div>
  )
}

export default Header
