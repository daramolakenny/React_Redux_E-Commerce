import React from 'react'
import parallax from '../assets/parallax.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='w-ful'>
      <img src={parallax} alt="" className='h-dvh w-full relative' />

      <div className='absolute md:mx-25 flex flex-col top-140 ml-[10px] md:top-45 text-black-800 pt-20'>
        <h2 className='uppercase font-semibold '>New Arrival</h2>
        <h1 className='text-4xl text-red-700 font-bold py-2'>Best Price <span className='text-black'>This Year</span></h1>
        <p>Shoomatic offers your very comfortable time <br />
        on working and exercises</p>

        <div className='flex pt-4'>
          <Link to="/product">
            <button className='bg-black rounded text-slate-300 text-center py-4 px-6 cursor-pointer hover:bg-slate-400 hover:text-red-800 hover:font-bold'>SHOP NOW</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero;