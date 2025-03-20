import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/slicers/CartSlice';

const ProductSelectedItems = ({ id, img, name, text, size, price, color, totalPrice }) => {

    const dispatch = useDispatch();
    const defaultSize = size[0];
    const defaultColor = color[0];

  return (
    <div>
        <div className='w-[96]'>
            <div className='h-96'>
                <img src={img} alt={name} />
            </div>
            <div className='text-center'>
                <div className='font-bold mb-2'>
                   {name}
                </div>
                <div className='text-gray-400 mb-2'>
                   {text}
                </div>

                <div className='flex justify-between item-center pt-4 px-4'>
                    <div className='text-gray-400 font-medium'>
                        Size: {defaultSize}
                    </div>
                    <div className='text-gray-400 font-medium'>
                        Color: <span className='px-2 rounded-full mx-2' style={{backgroundColor: defaultColor }}></span>
                    </div>
                </div>
            </div>

            <div className='flex justify-center py-3'>
                <div className=''>
                    <button
                        type='submit'
                        className='text-gray-400 border border-slate-200 font-bold py-1 px-2 rounded-md cursor-pointer'
                        onClick={() => dispatch(addToCart({
                            id: id,
                            img: img,
                            name: name,
                            text: text,
                            amount: 1,
                            size: defaultSize,
                            price: price,
                            color: defaultColor,
                            totalPrice: totalPrice,
                        }))}
                    >
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductSelectedItems
