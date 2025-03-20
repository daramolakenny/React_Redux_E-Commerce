import React from 'react';
import { nextSlide, prevSlider, dotSlider } from '../features/slicers/sliderslice';
import { useSelector, useDispatch } from 'react-redux';
import { sliderColections } from '../constant';

const Slider = () => {
  const sliderIndex = useSelector((state) => state.slider.value);
  console.log("sliderIndex", sliderIndex);
  const dispatch = useDispatch();

  return (
    <div className='pb-6 bg-black relative'>
      <div className=''>
        {sliderColections.map((items, id) => (
          <div key={items.id} className={parseInt(items.id) === sliderIndex ? 'opacity-100 duration-700 ease-in-out scale-100' : 'opacity-0 duration-700 ease-in-out scale-90'}>
            <div className='flex justify-center'>
              {parseInt(items.id) === sliderIndex && (
                <img src={items.img} alt="" 
                width={1024}
                height={300}
                className='h-[30rem]' />
              )}
            </div>
            <div className='absolute top-25 mx-auto inset-x-1/4'>
              <p className='text-black text-3xl font-bold'>
                {parseInt(items.id) === sliderIndex && items.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* dotslide */}
      <div className='flex absolute bottom-10 text-green-900 left-[30%] md:left-[42%]'>
        {sliderColections.map((dot, index) => (
          <div className='mr-4 key={index}'>
            <div className={index === sliderIndex ? 'bg-green-300 rounded-full p-4 cursor-pointer' : 'bg-slate-300 rounded-full p-4 cursor-pointer'} onClick={() => dispatch(dotSlider(index))}></div>
          </div>
        ))}
      </div>
        <button className='absolute top-[50%] right-4 md:right-12 rounded-full p-2 bg-green-400' onClick={() => dispatch(nextSlide(sliderIndex + 1))}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</button>
        <button className='absolute top-[50%] left-4 md:left-12 rounded-full p-2 bg-green-400' onClick={() => dispatch(prevSlider(sliderIndex - 1))}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
</button>
    </div>
  )
}

export default Slider