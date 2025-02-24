import React from 'react';

const Cart = () => {
  const text = "You don't have any product in cart. Go for shopping";

  return (
    <div className='w-full'>
      <div className="flex container py-10 justify-center mx-auto font-semibold">
        <span className='text-red-400'>You don't have any product in cart. </span> Go for shopping
      </div>
    </div>
  )
}

export default Cart