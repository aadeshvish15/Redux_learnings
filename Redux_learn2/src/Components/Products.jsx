import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { asyncgetproducts } from '../actions/ProductActions';


const Products = () => {
    const { products } = useSelector((state) => state.ProductReducer);
    // console.log(products);
    
    const dispatch = useDispatch();
    useEffect(() => {
        // dispatch(getProducts());
        dispatch(asyncgetproducts());
    },[]);
     
  return (
           <div className='m-auto container p-10 mt-5 bg-red-200'>
      <h1 className='text-2xl font-bold text-red-900'>Product List</h1>
      <ul>
              {products &&
                  products.map((product, index) => {
          return (
            <li key={product.id}>
              <h1>{product.title}{"   "}
                <span className='text-red-600 font-black cursor-pointer'
                onClick={()=>DeleteHandler(index)}>  X</span>
              </h1>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default Products