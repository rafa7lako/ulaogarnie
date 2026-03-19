import { ServicePageSectionOne } from "./ServicePageSectionOne.jsx";
import { ServicePageSectionTwo } from "./ServicePageSectionTwo.jsx";
import { ServicePageSectionThree } from "./ServicePageSectionThree.jsx";
import React from "react";
import "./ServicePage.css";
import { ServicePageHeader } from "./ServicePageHeader.jsx";

export const ServicePage = ({ data }) => {
	return (
		<>
			<ServicePageHeader {...data.headerSection} />
			<main>
				<ServicePageSectionOne {...data.sectionOne} />
				<ServicePageSectionTwo {...data.sectionTwo} />
				<ServicePageSectionThree {...data.sectionThree} />
			</main>
		</>
	);
};
