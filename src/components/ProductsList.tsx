import Product from './Product'
import { ProductsListType } from '../types';
import './ProductsList.scss'

const ProductsList = ({ products } : ProductsListType) => {
  return (
    <>
      <p className='productslist__count'>{products.length} Items</p>
      <ul className='productslist__items'>
        {products.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </ul>
    </>
  )
}

export default ProductsList