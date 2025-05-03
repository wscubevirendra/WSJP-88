import React, { useEffect, useState } from "react";
import Input from "./Input";
import Card from "./Card";

const MovieApp = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  async function getMovies() {
    let APIURL =
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";


    if (search !== "") {
      APIURL = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=" + search;

    }

    const response = await fetch(APIURL);
    const data = await response.json();
    console.log(data)
    setMovies(data.results);

  }

  useEffect(
    () => {
      getMovies()
    }, [search]  //render only once when the component is mounts
    //search value 
  )

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">🎬 Movie Search App</h1>
      <Input setSearch={setSearch} />
      <div className="row mt-5" >
        <Card movies={movies} />

      </div>



    </div>
  );
};

export default MovieApp;
