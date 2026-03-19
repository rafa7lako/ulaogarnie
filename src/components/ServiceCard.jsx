import React from "react";
import './ServiceCard.css'

export const ServiceCard = ({ cardClass, href, text, img, imgAlt }) => {
	return (
		<div className={`card ${cardClass}`}>
            <img className="cardBg" src={img} alt={`${imgAlt}`} />
			<a className="cardBtn" href={href}>
				{text}
			</a>
		</div>
	);
};