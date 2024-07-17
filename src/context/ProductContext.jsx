import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
export const ProductContext = createContext({
  product: {},
  products: [],
  setProduct: () => { },
  setProducts: () => { },
  addProduct: () => { },
  removeProduct: () => { },
  updateProduct: () => { },
});

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);

  //Definir la funcion addProduct
  const addProduct = (product) => {
    product.id = products.length + 1;
    setProducts(prev => [...prev, product]);
  }

  const removeProduct = (product) => {
    const copyProducts = [...products];
    const indexOf = copyProducts.findIndex((element) => element.id === product.id);
    copyProducts.splice(indexOf, 1);
    setProducts(copyProducts);
  }

  const updateProduct = (product) => {
    console.log('falta modificar el producto', product);
  }

  useEffect(() => {
    const products = [
      { id: 1, name: 'Product A', price: 30, category: 'Category 1' },
      { id: 2, name: 'Product B', price: 20, category: 'Category 2' },
      { id: 3, name: 'Product C', price: 50, category: 'Category 1' },
      { id: 4, name: 'Product D', price: 40, category: 'Category 3' },
    ];
    setProducts(products);
  }, []);

  return (
    <ProductContext.Provider value={{ product, products, setProduct, setProducts, addProduct: addProduct, removeProduct, updateProduct }}>
      {children}
    </ProductContext.Provider>
  )
}

ProductProvider.propTypes = {
  children: PropTypes.node
}