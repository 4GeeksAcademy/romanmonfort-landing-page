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
			<Topcontent title="A Warm Welcome!" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit, mauris bibendum ornare semper, leo velit interdum purus, ut ultrices mauris risus ac dolor. Ut ultrices leo ut luctus feugiat." btn="Call to Action!"/>	
			<Cards/>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
