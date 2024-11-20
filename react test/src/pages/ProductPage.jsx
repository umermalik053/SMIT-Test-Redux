import React, { useEffect } from 'react'
import ProductCard from '../Components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../Components/Navbar'

const ProductPage = () => {

  const dispatch = useDispatch()
  // Use the useSelector hook to access the Redux state.

  const selector = useSelector((state)=> state?.Product)
  
  // Placeholder for product data
  const ProductData = async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    console.log(data)
    // Dispatch the data to the Redux store. This will update the Redux state.

    dispatch({type: "ADD_ITEM", payload: data})
    
  }
  useEffect(()=>{
    ProductData()
  },[])

  return (
    <>
    <Navbar/>
      <div className='flex flex-wrap gap-4 max-w-[1200px] mx-auto mt-7'>
       {
        selector.slice(0,30).map(( item , index)=>{
          return <ProductCard key={index} data={item}/>
        })
       }
    </div>
    </>
  
  )
}

export default ProductPage
