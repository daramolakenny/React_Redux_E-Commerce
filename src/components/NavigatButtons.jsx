import React from 'react';
import clothes from '../assets/clothes.webp';
import { filteredProducts } from '../features/slicers/productslice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const NavigateButtons = () => {
    const buttons = [
        "Roundneck",
        "T-shirt",
        "Shoes",
        "Bags",
        "Jeans",
        "Hat",
        "Jackets",
        "Suits",
    ];

    const dispatch = useDispatch();

    return (
        <div>
            <div className="flex items-center justify-center py-5">
                {buttons.map((button, index) => (
                    <div key={index} className='mr-4'>
                        <Link to={`/filteredProducts/${button}`}>
                            <div className='bg-transparent text-gray-800 border border-gray-500 rounded px-4 py-2 hover:bg-green-200 cursor-pointer ease-in-out'
                            onClick={() => dispatch(filteredProducts(button))}
                            >
                                {button}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="bg-green-300 p-2 mx-auto w-[555px] rounded-md">
              <div className='text-center uppercase text-orange-600 font-bold leading-none'>
                Sales Up to 50%
              </div>
            </div>

            <div className='flex justify-center py-4'>
              <img src={clothes} className='h-[500px] w-[70%] shadow-gray-600' alt="" />
            </div>
        </div>
    );
};

export default NavigateButtons;