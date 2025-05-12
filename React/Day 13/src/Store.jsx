import React, { createContext, useEffect, useState } from 'react'
const context = createContext()
import axios from 'axios'

function Store(props) {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])




  function getproducts() {
    axios.get("https://dummyjson.com/products").then(
      (response) => {
        setProducts(response.data.products)
      }

    ).catch(
      (error) => {
        setProducts([])
      }

    )
  }

  useEffect(
    () => {
      getproducts()
    },
    []
  )



  function addtoCart(id) {
    const product = products.find(item => item.id === id);   //object bt id
    if (!product) return;  //data nhi mila to yehi se return hona hai

    const exists = cart.find(item => item.id === id);   //cart me check krna hai
    if (exists) {

      ///qty increase
      const updatedCart = cart.map(item =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      );
      setCart(updatedCart);
    } else {
      ///new product insert cart
      setCart([...cart, { ...product, qty: 1 }]);
    }
  }


  function qtyHandler(id, flag) {
    const exists = cart.find(item => item.id === id);   //cart me check krna hai
    let updatedCart;
    if (flag == 1) {
      if (exists) {
        ///qty increase
        updatedCart = cart.map(item =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        );
        setCart(updatedCart);
      }
    } else {
      if (exists) {
        ///qty increase
        updatedCart = cart.map(item =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        );

      }

    }

    setCart(updatedCart);


  }




  return (
    <context.Provider value={{ addtoCart, cart, qtyHandler }}>
      {props.children}
    </context.Provider>
  )
}


export default Store;
export { context }