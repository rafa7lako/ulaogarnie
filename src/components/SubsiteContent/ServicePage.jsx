import { ServicePageSectionOne } from "./ServicePageSectionOne.jsx";
import { ServicePageSectionTwo } from "./ServicePageSectionTwo.jsx";
import { ServicePageSectionThree } from "./ServicePageSectionThree.jsx";
import React from "react";
import "./ServicePage.css";
import { ServicePageHeader } from "./ServicePageHeader.jsx";
import { ServicePageAboutSection } from "./ServicePageAboutSection.jsx";

const SECTION_MAP = {
    one: ServicePageSectionOne,
    two: ServicePageSectionTwo,
    three: ServicePageSectionThree,
    about: ServicePageAboutSection
};

export const ServicePage = ({ data, visibleSections }) => {
    const sections = visibleSections
        ? data.sections.filter((section) => visibleSections.includes(section.type))
        : data.sections;

    return (
        <>
            <ServicePageHeader {...data.headerSection} />
            <main>
                {sections.map((section) => {
                    const SectionComponent = SECTION_MAP[section.type];
                    return SectionComponent
                        ? <SectionComponent key={section.id} {...section} />
                        : null;
                })}
            </main>
        </>
    );
};