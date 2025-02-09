import './styles.scss'
import {Spinner} from "../../assets/spinner";
import {back} from "../../assets/img";

const Product = ({product, setProductID, productID}) => {
  return <div className={'product'}>
    <button className="close-btn"
            onClick={() => setProductID(null)}
    ><img src={back} alt="back"/>
    </button>
    {
      (product !== null && product.id === productID) ? <>
        <img src={product.image} alt="" className={'product__img'}/>
        <div className="product__details">
          <div className="details__head">
            <div className="product__name">{product.title}</div>
            <div className="product__price">{`$${product.price}`}</div>
          </div>
          <div className="details__body">
            <div className="product__description">{product.description}</div>
            <div className="returns">
              <h2>Shipping & Returns</h2>
              <p>Free standard shipping and free 60-day returns</p>
            </div>
            <div className="product__reviews">
              <p>Reviews</p>
              <h1>{product.rating.rate} Ratings</h1>
              <h6>{product.rating.count} Reviews</h6>
            </div>
          </div>
        </div>
      </> : <Spinner width={48} height={48} margin={0}/>
    }
  </div>
}
export default Product