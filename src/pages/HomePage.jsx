import React from 'react';
import Navigation from "../components/Navigation.jsx";
import { Header } from "../components/Header.jsx";
import { SectionOne } from "../components/SectionOne.jsx";
import { SectionTwo } from "../components/SectionTwo.jsx";
import { Footer } from "../components/Footer.jsx";

export const HomePage = () => {
  return (
    <>
			<div className="container">
				<div className="topStripe"></div>
				<Navigation/>
			</div>
			<Header/>
			<main>
				<SectionOne />
				<SectionTwo />
			</main>
			<Footer/>
		</>
  )
}
