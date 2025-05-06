import Product from './Product'
import { ProductsListType } from '../types';
import './ProductsList.scss'

const ProductsList = ({ products, total } : ProductsListType) => {  
  return (
    <>
      <p className='productslist__count'>{products.length}/{total} Items</p>
      <ul className='productslist__items'>
        {products.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </ul>
    </>
  )
}

export default ProductsList