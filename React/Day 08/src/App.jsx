import React, { useEffect } from 'react'

export default function App() {
  const [products, setProducts] = React.useState([])

  async function getProducts() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    setProducts(data.products)
    console.log("hello")

  }

  //state change component re-render

  useEffect(
    () => {
      getProducts()
    },
    []  // [] means run only once when the component mounts
  )

  return (
    <div className='container-fluid p-2'>
      <div className="row gy-4">
        {
          products.map((product) => {
            console.log(product)
            return (
              <div className='col-3' key={product.id}>
                <div className="card">
                  <img height="200" src={product.thumbnail} className="card-img-top" alt={product.name} />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                  
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>
    </div>
  )
}
