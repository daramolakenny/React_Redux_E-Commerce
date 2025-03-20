import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../features/slicers/cartslice';
import { useDispatch } from 'react-redux';

const SingleProducts = () => {
    const product = useSelector((state) => state.products.singleProduct);
    const dispatch = useDispatch();
    
    // const productSize = product(0).size ? product(0).size(0) : "";
    // const [size, setSize] = useState(productSize);

    
    
    const { id } = useParams();
    // Convert id to a number for comparison
    const productId = Number(id);
    
    // Check if product is an array or an object
    // If it's an array, filter it; if it's an object, just use it directly
    const selectedProduct = Array.isArray(product)
    ? product.find((prod) => prod.id === productId)
    : product;
    
    const productColor = selectedProduct && selectedProduct.color
    const [color, setColor] = useState(productColor);
    
    // Set the initial size based on the first product's size array
    const productSize = selectedProduct && selectedProduct.size && selectedProduct.size.length > 0 
    ? selectedProduct.size[0] 
    : ""; // Default to an empty string if no size is available
    const [size, setSize] = useState(productSize);
    console.log('size', size);
        
    console.log('SingleProduct', selectedProduct);

    const handleChange = (e) => {
        setSize(e.target.value);
    }
    
    const handleColorChange = (e) => {
        setColor(e.target.value);
    }

    return (
        <div>
            {selectedProduct ? (
                <div className='flex flex-wrap justify-center items-center py-10'>
                    <div className='pl-44 grow-[2]'>
                        <img 
                            className='h-[650px] w-96 rounded-lg' 
                            src={selectedProduct.img} 
                            alt={selectedProduct.name} 
                        />
                    </div>
                    <div className='grow-[10]'>
                        <div className='max-w-lg'>
                            <h5 className='text-2xl font-bold tracking-normal leading-none pb-4'>{selectedProduct.name}</h5>
                            <p className='text-orange-700 text-xl font-bold tracking-normal leading-none pb-4'>15% OFF</p>
                            <p className='text-gray-500 text-xl font-bold tracking-normal leading-none pb-4'>{selectedProduct.text}</p>
                            {/* <p className='font-bold tracking-normal leading-none pb-4'>Price: ${selectedProduct.price}</p> */}
                        </div>
                        <div className='pb-2 flex w-[25%] '>
                            <div className='w-[35%]'>
                                {selectedProduct.size ? ( 
                                    <div>
                                          <label
                                            htmlFor="size"
                                            className='black mb-2 text-lg font-medium text-gray-500 dark:text-white'
                                        >
                                            Size
                                        </label>
                                        <div>
                                            <select
                                                id='size'
                                                name='size'
                                                value={size}
                                                onChange={handleChange}
                                                className='bg-gray-50 border outline-none border-gray-100 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 black w-full p-2.5'>
                                                {/* mapping through the size of the product */}
                                                {selectedProduct.size.map((item, index) => (
                                                    <option key={index} value={item}>
                                                        {item}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div> 
                                    ) : (
                                    <div>
                                        <label
                                            htmlFor="size"
                                            className='black mb-2 text-lg font-medium text-gray-500 dark:text-white'
                                        >
                                            Size
                                        </label>
                                        <div>
                                            <select
                                                id='size'
                                                disabled={true}
                                                name='size'
                                                value={size}
                                                onChange={handleChange}
                                                className='bg-gray-50 border border-gray-100 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 black w-[10%] p-2.5'>
                                                {/* mapping through the size of the product */}
                                                {selectedProduct.size.map((item, index) => (
                                                    <option key={index} value={item}>
                                                        {item}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div> )
                                }
                            </div>

                            <div className='w-[45%] ml-4'>
                                <label
                                    htmlFor="color"
                                    className='black mb-2 text-lg font-medium text-gray-500 dark:text-white'
                                >
                                    Color
                                </label>
                                <div>
                                    <select
                                        id='color'
                                        // disabled={true}
                                        name='color'
                                        value={color}
                                        onChange={handleColorChange}
                                        className='bg-gray-50 border border-gray-100 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 black w-full p-2.5'>
                                        {/* mapping through the size of the product */}
                                        {selectedProduct.color.map((item, index) => (
                                            <option key={index} value={item}>
                                                {item}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div>
                        </div>
                        <div className=''>
                            <button
                                className='border border-gray-400 py-2 px-8 rounded-lg text-gray-500 cursor-pointer hover:bg-gray-500 hover:text-gray-50'
                                onClick={() => dispatch(addToCart({
                                    id: selectedProduct.id,
                                    name: selectedProduct.name,
                                    size: size,
                                    color: color,
                                    price: selectedProduct.price,
                                    amount: 1,
                                    totalPrice: selectedProduct.price,
                                }))}
                            >
                                Add To Cart
                            </button>
                        </div>
                    
                    </div>
                </div>
            ) : (
                <p>Product not found</p>
            )}
        </div>
    )
};

export default SingleProducts;








// import React from 'react'
// import { useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom'
// import { singleProduct } from '../features/slicers/productslice'

// const SingleProducts = () => {
//     const product = useSelector((state) => state.products.singleProduct);
//     const { id } = useParams();
//     console.log('SingleProduct', product);

//   return (
//     <div>
//         {product.filter((product) => product.id === id)
//         .map((products, index) => (
//             <div key={index} className='flex justify-center items-center py-18'>
//                 <div className='pl-44 grow-[2]'>
//                     <img 
//                         className='h-[850px] w-96 rounded-lg' 
//                         src={products.img}
//                         alt={products.name}
//                     />
//                 </div>
//             </div>
//         ))}
//     </div>
//   )
// }

// export default SingleProducts