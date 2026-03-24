import { SectionHeader } from '../SectionHeader.jsx';
import './ServicePageSectionOne.css'

export const ServicePageSectionOne = ({ title, img, heading, list }) => {
	return (
		<section className="sectionOne__sub">
			<SectionHeader title={title} theme='dark' />

			<div className="flex gardenSubsection">
				<img className="sectionOneImg" src={img} alt="" />

				<div className="flex gardenSubsection__text">
					<h3 className="gardenSubHeadingTwo">{heading}</h3>

					<ul className="gardenSubList">
						{list.map((item, i) => (
							<li key={i}>✔ {item}</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};