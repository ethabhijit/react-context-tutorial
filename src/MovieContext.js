import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
	const [movies, setMovies] = useState([
		{
			name: "Harry Potter",
			price: "$10",
			id: 435544,
		},
		{
			name: "Game of Throns",
			price: "$10",
			id: 2234455,
		},
		{
			name: "Inception",
			price: "$10",
			id: 5435355,
		},
	]);

	return <MovieContext.Provider value={[movies, setMovies]}>{children}</MovieContext.Provider>;
};
