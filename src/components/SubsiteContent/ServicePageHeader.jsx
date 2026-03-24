import React from "react";
import "./ServicePageHeader.css";

export const ServicePageHeader = ({ bgImage, title, subText }) => {
	return (
		<header>
			<div
				className="hero__sub"
				style={{
					backgroundImage: `
		linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
		url(${bgImage})
	`,
				}}
			>
				<h1 className="headerOne">{title}</h1>
				<p>{subText}</p>
			</div>
		</header>
	);
};
