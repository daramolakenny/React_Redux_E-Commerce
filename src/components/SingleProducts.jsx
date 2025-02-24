import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const SingleProducts = () => {
    const product = useSelector((state) => state.products.singleProduct);
    
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
    
    // Set the initial size based on the first product's size array
    const productSize = selectedProduct && selectedProduct.size && selectedProduct.size.length > 0 
    ? selectedProduct.size[0] 
    : ""; // Default to an empty string if no size is available
    const [size, setSize] = useState(productSize);
    console.log('size', size);
        
    console.log('SingleProduct', selectedProduct);

    return (
        <div>
            {selectedProduct ? (
                <div className='flex justify-center items-center py-10'>
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
                        <div className='pb-4'>
                            {selectedProduct.size ? 
                                <div>
                                <label 
                                    id='size'
                                    name='size'
                                    value= {size}
                                    onChange={(e) => setSize(e.target.value)}
                                    htmlFor="countries"
                                    className='black mb-2 text-sm font-medium text-gray-500 dark:text-white'
                                >
                                    Pick a size
                                </label>
                                <div>
                                <select
                                    name='size'
                                    className='bg-gray-50 border border-gray-100 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 black w-[30%] p-2.5'>
                                    {/* mapping through the size of the product */}
                                    {selectedProduct.size.map((item, index) => (
                                        <option key={index} value={item}>
                                            {item}
                                        </option>
                                    ))}
                                </select>

                                </div>
                            </div> 
                                : 
                                <div>
                                    <label 
                                        htmlFor="countries"
                                        className='black mb-2 text-sm font-medium text-gray-500 dark:text-white'
                                    >
                                        Pick a size
                                    </label>
                                    <div>
                                    <select className='bg-gray-50 border border-gray-100 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 black w-[30%] p-2.5'>
                                        {/* mapping through the size of the product */}
                                        {selectedProduct.size.map((item, index) => (
                                            <option key={index} value={item}>
                                                {item}
                                            </option>
                                        ))}
                                    </select>

                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            ) : (
                <p>Product not found</p>
            )}
        </div>
    );
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