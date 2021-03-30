import React from "react";
import MovieList from "./MovieList";
import Nav from "./Nav";
import "./App.css";
import { MovieProvider } from "./MovieContext";
import AddMovie from "./AddMovie";

const App = () => {
	return (
		<MovieProvider>
			<Nav />
			<MovieList />
			<AddMovie />
		</MovieProvider>
	);
};

export default App;
