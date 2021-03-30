import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
	
  return (
		<div className="nav">
			{movies.map(movie => (
        <h1>{movie.name}</h1>
      ))}
		</div>
	);
};

export default Nav;
