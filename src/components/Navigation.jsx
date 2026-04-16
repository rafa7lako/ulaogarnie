import React, { useState } from "react";
import ulaogarnieLogo from "../assets/ulaogarnieLogo.svg";
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);
	const closeMenu = () => setIsOpen(false);

	return (
		<nav className="navigation">
			{/* TOP ROW (logo + burger on mobile) */}
			<div className="navTop">
				<div className="navElementLogo">
					<Link to="/home" onClick={closeMenu}>
						<img src={ulaogarnieLogo} alt="logo ulaogarnia.pl" />
					</Link>
				</div>

				<button className="burger" onClick={toggleMenu}>
					<span className={isOpen ? "open" : ""}></span>
					<span className={isOpen ? "open" : ""}></span>
					<span className={isOpen ? "open" : ""}></span>
				</button>
			</div>

			{/* MENU */}
			<div className={`navMenu ${isOpen ? "active" : ""}`}>
				<div className="navElement">
					<Link to="/garden" onClick={closeMenu} className="navElementItem">
						pielęgnacja ogrodu
					</Link>
					<Link to="/memorial" onClick={closeMenu} className="navElementItem">
						opieka nad pomnikami
					</Link>
					<Link to="/senior" onClick={closeMenu} className="navElementItem">
						pomoc seniorom
					</Link>
					<Link to={"/about"} onClick={closeMenu} className="navElementItem">
						o mnie
					</Link>
				</div>

				<div className="navCta">
					<Link
						to="/contact"
						onClick={closeMenu}
						className="navElementItem buttonCtaNav"
					>
						kontakt
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
