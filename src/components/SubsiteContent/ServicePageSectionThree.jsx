import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import './ServicePageSectionThree.css'
import { SectionHeader } from "../SectionHeader";

export const ServicePageSectionThree = ({ title, text, phone, email, img }) => {
	return (
		<section className="sectionThree">
			<SectionHeader title={title} theme="dark" />

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