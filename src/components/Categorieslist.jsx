import React, { useEffect, useState } from 'react';
import { Categorylist} from '../constant/index';

// import Ratings from 'react-ratings-declarative';

const Categorieslist = () => {
   const [products, setProducts] = useState([]);
//    const [rating, setRating] = useState(0);


   const truncateTitle = (title, maxLength) => {
     if (title.length > maxLength) {
        return title.slice(0, maxLength) + '...';
     }
        return title;
   };

    // const changeRating = (newRating, name) => {
    //     setRating(newRating);
    // };
    
    useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
    }, []);

  return (
    <div className='w-full '>
        <div className='max-w-screen-lg m-auto py-3'>
            <div className='flex justify-center py-4 font-semibold'>Browse Categories</div>
        <div className='flex flex-wrap gap-6 md:gap-8 mb-10 items-center container md:m-auto justify-around md:justify-between max-lg:py-4'>
            {Categorylist.map((item) => (
                <div 
                    key={item.id}
                    href={item.url}
                    className='block relative w-40 min-h-12 p-[.6rem] text-center ml-6 bg-slate-50 shadow-lg rounded-sm font-semibold' 
                >
                    <a className='relative z-2 flex flex-col cursor-pointer' href={item.url}>{item.title}</a>
                </div>
            ))}
        </div>

        <div className='flex justify-center py-4 font-semibold pt-10'>Latest Products</div>
        <div className='flex flex-row flex-wrap gap-2 container items-center md:gap-2'>
            {products.map((items) => (
                <div 
                    key={items.id}
                    className='block relative w-43 h-80 p-4 text-center ml-6 bg-slate-50 shadow-lg rounded-sm font-semibold'
                >
                    <img src={items.image} alt={items.image} className='w-full h-32 object-cover' />
                    <h2 className='text-black'>{truncateTitle(items.title, 30)}</h2>
                    <p className='py-2'>{items.category}</p>
                    <p>${items.price}</p>
                    {/* <p>
                        <Ratings
            rating={this.state.rating}
            widgetRatedColors="blue"
            changeRating={this.changeRating}
          >
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget
              widgetDimension="60px"
              svgIconViewBox="0 0 5 5"
              svgIconPath="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z"
            />
            <Ratings.Widget widgetHoverColor="black" />
            <Ratings.Widget />
          </Ratings>
                    </p> */}
                </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default Categorieslist