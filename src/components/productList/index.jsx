import './styles.scss'
import ProductItem from "./productItem";
import {useEffect, useState} from "react";
import Product from "../product";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [productID, setProductID] = useState(null);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    console.log(products)
  }, [products]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
  }, []);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productID}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error(error));
  }, [productID]);

  return (
    productID !== null ?
      <Product
        product={product}
        setProductID={setProductID}
      /> :
      <div className="productList">
        {products.map(product => (
          <div
            onClick={() => setProductID(product.id)}>
            <ProductItem
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          </div>
        ))}
      </div>
  );
}

export default ProductList