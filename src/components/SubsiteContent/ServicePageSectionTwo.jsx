import { SectionHeader } from '../SectionHeader';
import './ServicePageSectionTwo.css'

export const ServicePageSectionTwo = ({ title, text, images }) => {
	return (
		<section className="sectionTwo">
			<SectionHeader title={title} theme='light' />

			<div>
				<p className="subSectionTwoText">{text}</p>

				<div className="flex flexGap2">
					{images.map((img, i) => (
						<img key={i} className="subSectionTwoImg" src={img} alt="" />
					))}
				</div>
			</div>
		</section>
	);
};