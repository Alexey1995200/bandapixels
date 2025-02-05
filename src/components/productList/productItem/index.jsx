import './styles.scss'

const productItem = ({image,title,price}) => {
  return (<div className={'item'}>
    <img src={image} alt={'img'}/>
    <div className="item__details">
      <div className="item__name">{title}</div>
      <div className="item__price">{`$${price}`}</div>
    </div>
  </div>)
}
export default productItem