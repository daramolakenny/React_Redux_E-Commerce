import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
// import { useDispatch } from 'react-redux';

const FilteredProducts = () => {
  const products = useSelector((state) => state.products.filteredProducts);
  // console.log('Products', products);

  const { type } = useParams();
  // console.log('Params', type);

  return (
    <div>
      <div className="pt-16">
        <div className="pl-14">
          <h1 className='text-4xl font-bold text-gray-600 tracking-normal leading-none'>
            {type}
          </h1>
        </div>
        <div className="flex justify-center py-8 gap-12">
          {products.filter((products) => products.type === type).map((products, index) => (
            <div key={index}>
              <ProductCard
                id={products.id}
                name={products.name}
                text={products.text}
                img={products.img}
                price={products.price}
                color={products.color}
              ></ProductCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FilteredProducts