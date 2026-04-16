import React from "react";


import sectionOneImg from "../assets/ulaogarnieLogo.svg";
import { ServicePage } from "../components/SubsiteContent/ServicePage.jsx";
import heroImage from "../assets/aboutSectionBG.jpg";

const aboutMeData = {
    headerSection: {
        bgImage: heroImage,
        title: "Jak powstało Ula Ogarnie?",
        subText:
            "Z codziennych sytuacji i potrzeb ludzi wokół mnie.",
    },
    sections: [
        {
            id: "section-about",
            type: "about",         // 👈 new type
            img: sectionOneImg,
            heading: "O mnie",
        },
        
    ],
};

export const AboutMePage = () => {
	return (
		    <ServicePage data={aboutMeData} visibleSections={["about"]} />
	);
};
