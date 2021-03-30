import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = e => {
    setName(e.target.value);
  };
  
  const updatePrice = e => {
    setPrice(e.target.value);
  };

  const addMovie = e => {
    e.preventDefault();
    MovieContext(previousMovies => [...previousMovies, {name, price}]);
  };

  return (
		<div>
      <form>
        <input type="text" name="name" value={name} onChange={updateName} />
        <input type="text" name="price" value={price} onChange={updatePrice} />
        <button onClick={addMovie}>Submit</button>
      </form>
		</div>
	);
};

export default AddMovie;
