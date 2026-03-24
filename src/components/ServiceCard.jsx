import React from "react";
import "./ServiceCard.css";
import { Link } from "react-router-dom";

export const ServiceCard = ({ cardClass, href, text, img, imgAlt }) => {
	return (
		<Link className={`card ${cardClass}`} to={href}>
			<img className="cardBg" src={img} alt={imgAlt} />
			<p className="cardText">{text}</p>
		</Link>
	);
};