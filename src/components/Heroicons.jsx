import React from 'react';
import smile from '../assets/heroicons/smile.webp';
import natural  from '../assets/heroicons/natural.webp';
import iconic from '../assets/heroicons/iconic.webp';
import cinderela from '../assets/heroicons/cinderela.png';
import comedy  from '../assets/heroicons/comedy.png';
import right from '../assets/heroicons/right.png';

const iconsMapping = {
    smile, natural, iconic, cinderela, comedy, right
};

export const Icons = [
  { id: 0, Image: 'right'},
  { id: 1, Image: 'natural'},
  { id: 2, Image: 'iconic'},
  { id: 3, Image: 'comedy'},
  { id: 4, Image: 'smile'},
  { id: 5, Image: 'cinderela'},
];

const Heroicons = () => {
  return (
    <div className='w-full  bg-slate-100 flex'>
      <div className='flex flex-wrap gap-4'>
        {Icons.map((items, id) => (
            <div key={items.id} className=''><img src={iconsMapping[items.Image]} alt={items.Image} 
            className='pt-2' /></div>
        ))}
      </div>
    </div>
  )
}

export default Heroicons