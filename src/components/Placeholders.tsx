import Loader from '../assets/loader.svg'
import "./Placeholder.scss"

const ProductPlaceholders = () => {
  return (
    <div className='product__placeholders'>
      <img src={Loader} />
    </div>
  )
}

export default ProductPlaceholders