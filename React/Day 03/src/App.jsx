import React, { useState } from "react";
import Card from "./Card";

function App() {
  const [state, setState] = useState([
    {
      rating: 3,
      title: "Pizza",
      source: "https://cdn.dummyjson.com/recipe-images/2.webp"
    },
    {
      rating: 5,
      title: "Pizza",
      source: "https://cdn.dummyjson.com/recipe-images/3.webp"
    },
    {
      rating: 4,
      title: "Pizza",
      source: "https://cdn.dummyjson.com/recipe-images/4.webp"
    },
    {
      rating: 2,
      title: "Pizza",
      source: "https://cdn.dummyjson.com/recipe-images/5.webp"
    },
    {
      rating: 2,
      title: "Pizza",
      source: "https://cdn.dummyjson.com/recipe-images/5.webp"
    },
    {
      rating: 2,
      title: "Pizza",
      source: "https://cdn.dummyjson.com/recipe-images/5.webp"
    }
  ])


  const ShowData = state.map(
    (data, index) => {
      return <Card rating={data.rating} title={data.title} source={data.source} />
    }
  )
}






return (
  <div className="container">
    <div className="row">
      {ShowData}

    </div>
  </div>
)


export default App;