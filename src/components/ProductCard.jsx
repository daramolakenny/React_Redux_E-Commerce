import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { singleProduct } from '../features/slicers/productslice';

const ProductCard = ({id, name, img, text, type, price, color, gender, size}) => {
  const dispatch = useDispatch();
  const { type: paramsType } = useParams();
  console.log('Param', paramsType);
  
  return (
    <Link to={`/filteredProducts/${paramsType}/` + id}>
      <div className='w-96 border flex flex-col gap-4' onClick={() => dispatch(singleProduct(id))}>
        <div className='bg-blue-400 border border-red-400'>
          <img 
            src={img} 
            alt="" 
            className='w-full'
          />
        </div> 
        <div className='w-full border text-center'>
          <div className='mb-2'>
              <h2 className='text-center items-center justify-center flex'>{name}</h2>
              <p className=''>{text}</p>
              <div className='flex justify-between px-6'>
                <p>{price}</p>
                <p>{color}</p>
              </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard