import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";
import ulaogarnieLogo from "../assets/ulaogarnieLogo.svg";

export const Footer = () => {
	return (
		<><footer className="footer">
			<div className="flexRow">
				<div className="footerSectionOne">
					<img
						className="uoLogoFooter"
						src={ulaogarnieLogo}
						alt="logo ulaogarnia.pl"
					/>
				</div>
				<div className="footerSectionTwo">
					<div className="flex">
						<div className="fadeLineFoot fadeLineLeftFoot"></div>
						<h3 className="headerThree">Kontakt</h3>
						<div className="fadeLineFoot fadeLineRightFoot"></div>
					</div>
					<div className="flex footerSectionTwoB">
						<div className="flex">
							<FontAwesomeIcon className="iconGeneral contactIcon" icon={faPhone} />
							<p>+48 725 116 511</p>
						</div>
						<div className="flex">
							<FontAwesomeIcon className="iconGeneral contactIcon" icon={faEnvelope} />
							<p>u.jendral@gmail.com</p>
						</div>
						<div>
							<FontAwesomeIcon className="iconGeneral smIcon" icon={faFacebook} />
							<FontAwesomeIcon className="iconGeneral smIcon" icon={faSquareInstagram} />
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
