import './styles.scss'
import ProductItem from "./productItem";
import {useEffect, useState} from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log(products)
  }, [products]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
  }, []);
  return (
    <div className="productList">
      {products.map(product => (
        <ProductItem
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default ProductList