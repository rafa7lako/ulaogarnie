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
				{data.sections.map((section, i) => {
					switch (section.type) {
						case "one":
							return <ServicePageSectionOne key={section.id} {...section} />;

						case "two":
							return <ServicePageSectionTwo key={section.id} {...section} />;

						case "three":
							return <ServicePageSectionThree key={section.id} {...section} />;

						default:
							return null;
					}
				})}
			</main>
		</>
	);
};
