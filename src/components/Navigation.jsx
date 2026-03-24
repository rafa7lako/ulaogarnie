import React from "react";
import ulaogarnieLogo from "../assets/ulaogarnieLogo.svg";
import "./Navigation.css";
import { Link } from "react-router-dom";


const Navigation = () => {
	return (
		<nav className="navigation">
			<div className="navElement">
				<Link to="/garden">pielęgnacja ogrodu</Link>
				<Link to="/memorial">opieka nad miejscami pamięci</Link>
				<Link to="/senior">pomoc seniorom</Link>
			</div>
			<div className="navElementLogo">
				<Link to="/home"><img src={ulaogarnieLogo} alt="logo ulaogarnia.pl" /></Link>
				
			</div>
			<div className="navElement">
				<Link>o mnie</Link>
				<Link>cennik</Link>
				<Link>kontakt</Link>
			</div>
		</nav>
	);
};

export default Navigation;
