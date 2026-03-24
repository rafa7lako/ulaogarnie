import React from "react";

import { Header } from "../components/Header.jsx";
import { SectionOne } from "../components/SectionOne.jsx";
import { SectionTwo } from "../components/SectionTwo.jsx";

export const HomePage = () => {
	return (
		<>
			<Header />
			<main>
				<SectionOne />
				<SectionTwo />
			</main>
		</>
	);
};
