import React from 'react'

const ProductPlaceholders = () => {
  return (
    <div className='product__placeholders'>
      {Array(5).fill(null).map((_, index) => (
        <div key={index}>
          Hey
        </div>
      ))}
    </div>
  )
}

export default ProductPlaceholders