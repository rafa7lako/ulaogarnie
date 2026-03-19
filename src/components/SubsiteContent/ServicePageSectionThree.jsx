import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import './ServicePageSectionThree.css'

export const ServicePageSectionThree = ({ title, text, phone, email, img }) => {
	return (
		<section className="sectionThree">
			<div className="flexRow">
				<div className="fadeLine fadeLineLeftDark"></div>
				<h2 className="headingThree">{title}</h2>
				<div className="fadeLine fadeLineRightDark"></div>
			</div>

			<div className="contactSubsectionContaner">
				<div>
					<p className="subSectionFourText">{text}</p>

					<div className="flex footerSectionTwoB">
						<div className="flex">
							<FontAwesomeIcon className="iconGeneral contactIcon" icon={faPhone} />
							<p>{phone}</p>
						</div>

						<div className="flex">
							<FontAwesomeIcon className="iconGeneral contactIcon" icon={faEnvelope} />
							<p>{email}</p>
						</div>
					</div>
				</div>

				<img className="contactWomanImg" src={img} alt="" />
			</div>
		</section>
	);
};