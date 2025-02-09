import './styles.scss'

const productItem = ({image, title, price, onClick, key}) => {
  return (<div className="item" onClick={() => onClick(key)}>
    <img src={image} alt="img"/>
    <div className="item__details">
      <div className="item__name">{title}</div>
      <div className="item__price">{`$${price}`}</div>
    </div>
  </div>)
}
export default productItem