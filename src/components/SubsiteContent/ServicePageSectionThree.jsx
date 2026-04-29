import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./ServicePageSectionThree.css";
import { SectionHeader } from "../SectionHeader";

export const ServicePageSectionThree = ({ title, text, phone, email, img }) => {
	return (
		<section className="sectionThree">
			<SectionHeader title={title} theme="dark" />

			<div className="contactSubsectionContaner">
				<div>
					<p className="subSectionFourText">{text}</p>
					<div className="contactDetails">
						<div className="contactDetailItem">
							<span className="contactIconWrap">
								<FontAwesomeIcon icon={faPhone} />
							</span>
							<span>{phone}</span>
						</div>
						<div className="contactDetailItem">
							<span className="contactIconWrap">
								<FontAwesomeIcon icon={faEnvelope} />
							</span>
							<span>{email}</span>
						</div>
					</div>
				</div>

				<img className="contactWomanImg" src={img} alt="Ilustracja kobiety w okularach rozmawiającej przez telefon, trzymającej schowek z dokumentami." />
			</div>
		</section>
	);
};
