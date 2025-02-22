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
        <div className='relative bg-blue-400'>
          <img src={img} alt="" />
        </div> 
        <div className='grid grid-cols-2 text-center'>
          <div className='mb-2'>
              <h2>{name}</h2>
              <p>{text}</p>
              <p>{price}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard