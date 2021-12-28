import React from "react";
import "./App.css";
import {  Navbar } from "./components";
import { Header } from "./containers";


function App() {
	return (
		<div className="App">
			<div className="gradient-bg">
				<Navbar />
				<Header />
			</div>
		</div>
	);
}

export default App;
