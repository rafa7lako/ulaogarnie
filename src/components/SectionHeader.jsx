import React from "react";
import "./SectionHeader.css";

export const SectionHeader = ({ title, theme = "light" }) => {
	// klasy dla linii w zależności od theme
	const leftLineClass =
		theme === "dark" ? "fadeLineLeftDark" : "fadeLineLeft";
	const rightLineClass =
		theme === "dark" ? "fadeLineRightDark" : "fadeLineRight";

	return (
		<div className="flexRowSectionHeader">
			<div className={`fadeLine ${leftLineClass}`}></div>
			<h2 className="headingTwo">{title}</h2>
			<div className={`fadeLine ${rightLineClass}`}></div>
		</div>
	);
};