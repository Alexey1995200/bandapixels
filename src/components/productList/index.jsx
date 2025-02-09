import './styles.scss'
import ProductItem from "./productItem";
import {useEffect, useState} from "react";
import Product from "../product";
import {Spinner} from "../../assets/spinner";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [productID, setProductID] = useState(null);
  const [product, setProduct] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
  }, [])

  useEffect(() => {
    !!productID && fetch(`https://fakestoreapi.com/products/${productID}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error(error))
  }, [productID])

  const handleScroll = () => {
    !productID &&
    setScrollPosition(window.scrollY)

  }
  useEffect(() => {
    !productID && window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [window.scrollY, productID]);
  useEffect(() => {
    !productID &&
    window.scrollTo(0, scrollPosition)
  }, [productID]);
  const onClick = (id) => setProductID(id)

  return (!!products ?

    (productID !== null) ?
      <Product
        product={product}
        setProductID={setProductID}
        productID={productID}
        scrollPosition={scrollPosition}
      /> :

      <div className="productList">
        {products.map(product => (
          <ProductItem
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            onClick={() => onClick(product.id)}
          />))}
      </div>
    : <Spinner/>)
}


export default ProductList