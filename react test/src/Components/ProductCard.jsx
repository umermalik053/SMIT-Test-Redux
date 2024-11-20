import React from 'react'

const ProductCard = ({data}) => {
  const {title , body  } = data;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title.slice(0,15)}</h2>
    <p className='text-justify'>{body.slice(0,70)}</p>
    <div className="card-actions">
      <button className="btn bg-[#B3E240] text-white">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default ProductCard
