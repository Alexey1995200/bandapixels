import './styles.scss'
import Returns from "./returns";

const Product = ({product, setProductID}) => {
  return <div className={'product'}>
    <button className="close-btn"
            onClick={() => setProductID(null)}
    >✖
    </button>
    {
      product !== null && <>
        <img src={product.image} alt="img" className={'product__img'}/>
        <div className="product__details">
          <div className="details__head">
            <div className="product__name">{product.title}</div>
            <div className="product__price">{`$${product.price}`}</div>
          </div>
          <div className="details__body">
            <div className="product__description">{product.description}</div>
            <Returns/>
            <div className="product__reviews">
              <p>Reviews</p>
              <h1>{product.rating.rate} Ratings</h1>
              <h6>{product.rating.count} Reviews</h6>
            </div>
          </div>
        </div>
      </>
    }
  </div>
}
export default Product