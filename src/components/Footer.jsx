import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className='pb-4'>
      <div className='flex items-center justify-center py-4'>
        <hr className='h-px w-4/5 bg-gray-400 opa outline-none border-none'/>
      </div>
      <div className='flex items-center justify-around pt-4'>
        <div className='font-bold cursor-pointer'>
          STORE
          <hr className='border border-b-black w-10'/>
        </div>
        <div>
          <p className='text-black text-sm font-medium leading-none'>
            Copyright {year} page by Kenny Daramola
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer