import { PricingOption, ProductType } from '../types';
import './Product.scss'

const Product = ({ id, imagePath, title, creator, price, pricingOption }: ProductType) => {

  return (
    <li key={id} className='product__item-wrapper'>
      <a href='/'>
        <div className='product__image'>
          <img src={imagePath} alt={title} />
        </div>
        <div className='product__info'>
          <div className='product__info-left'>
            <h3>{title}</h3>
            <p className='product__creator'>{creator}</p>
          </div>
          <div className='product__info-right'>
            <p className='product__price'>
              {pricingOption === PricingOption.FREE && <span className='product__price-free'>Free</span>}
              {pricingOption === PricingOption.PAID && <span className='product__price-paid'>${price}</span>}
              {pricingOption === PricingOption.VIEW_ONLY && <span className='product__price-view-only'>View Only</span>}
            </p>
          </div>
        </div>
      </a>
    </li>
  )
}

export default Product