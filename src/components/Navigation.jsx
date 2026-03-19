import React from "react";
import ulaogarnieLogo from "../assets/ulaogarnieLogo.svg";
import "./Navigation.css";

const Navigation = () => {
	return (
		<nav className="navigation">
			<div className="navElement">
				<a>pielęgnacja ogrodu</a>
				<a>opieka nad miejscami pamięci</a>
				<a>pomoc seniorom</a>
			</div>
			<div className="navElementLogo">
				<img src={ulaogarnieLogo} alt="logo ulaogarnia.pl" />
			</div>
			<div className="navElement">
				<a>o nas</a>
				<a>cennik</a>
				<a>kontakt</a>
			</div>
		</nav>
	);
};

export default Navigation;
