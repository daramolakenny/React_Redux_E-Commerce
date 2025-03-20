import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full'>
        <div className='flex justify-center bg-black text-white  font-bold w-full py-2'>Welcome Users
        </div>

        <div>
            <div className='flex max-w-[1024px] justify-around m-auto py-8'>
                <div className='font-bold cursor-pointer'>
                    STORE
                    <hr className='border border-b-black w-10'/>
                </div>

                <div>
                    <ul className='flex font-bold'>
                        <li className='pl-4 cursor-pointer'>Logout</li>
                        <li className='pl-4 cursor-pointer' >Whish List</li>
                        <li className='pl-4 cursor-pointer'>Shopping bag</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className='flex justify-around bg-black text-white  font-semibold w-full py-1'>
            <div className='cursor-pointer'>50% off</div>
            <div className='cursor-pointer'>Free Shipping and return</div>
            <div className='cursor-pointer'>Different Payment Method</div>
        </div>
    </div>
  )
}

export default Navbar