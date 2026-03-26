import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";
import ulaogarnieLogo from "../assets/ulaogarnieLogo.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<>
			<footer className="footer">
				<div className="flexRowFooter">
					{/* Logo */}
					<div className="footerSectionOne">
						<Link to="/home" className="logoBbFooter">
							<img
								className="uoLogoFooter"
								src={ulaogarnieLogo}
								alt="logo ulaogarnia.pl"
							/>
						</Link>
					</div>

					{/* Contact */}
					<div className="footerSectionTwo">
						<div className="footerHeadingRow">
							<div className="fadeLineFoot fadeLineLeftFoot" />
							<h3 className="headerThree">Kontakt</h3>
							<div className="fadeLineFoot fadeLineRightFoot" />
						</div>

						<div className="footerSectionTwoB">
							<div className="footerContactRow">
								<FontAwesomeIcon
									className="iconGeneral contactIcon"
									icon={faPhone}
								/>
								<p>+48 725 116 511</p>
							</div>
							<div className="footerContactRow">
								<FontAwesomeIcon
									className="iconGeneral contactIcon"
									icon={faEnvelope}
								/>
								<p>u.jendral@gmail.com</p>
							</div>
							<div className="footerSocialRow">
								<FontAwesomeIcon
									className="iconGeneral smIcon"
									icon={faFacebook}
								/>
								<FontAwesomeIcon
									className="iconGeneral smIcon"
									icon={faSquareInstagram}
								/>
							</div>
						</div>
					</div>
				</div>
			</footer>

			<div className="footerStrip flex">
				<p>@2026</p>
			</div>
		</>
	);
};
