import React from "react";


import Topcontent from "./Topcontent";
import Navbar from "./Navbar";
import Cards from "./Cards";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="">
			<Navbar/>	
			<div className="container">
			<Topcontent/>	
			<Cards/>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
