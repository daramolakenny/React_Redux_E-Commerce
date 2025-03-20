import React from 'react'
import { storeData } from '../constant'
import ProductSelectedItems from './ProductSelectedItems'

const Productsection = () => {
  return (
    <div>
        <div className='bg-black p-2 w-[50%] mx-auto rounded-md'>
            <h2 className='text-red-400 text-center text-lg font-bold tracking-normal leading-none'>
                Summer T-Shirt SALE 30% 
            </h2>
        </div>

        <div className='grid grid-cols-3 justify-items-center py-8 gap-4 mx-auto max-w-7xl'>
            {storeData.slice(0,9).map((product, index) => (
                <div key={index} className='border border-slate-100 rounded-md'>
                    <ProductSelectedItems
                        id={product.id}
                        img={product.img}
                        name={product.name} 
                        text={product.text}
                        size={product.size}
                        price={product.price}
                        color={product.color}
                        totalPrice={product.totalPrice}
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Productsection