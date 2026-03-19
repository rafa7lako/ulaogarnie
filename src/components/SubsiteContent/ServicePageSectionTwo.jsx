import './ServicePageSectionTwo.css'

export const ServicePageSectionTwo = ({ title, text, images }) => {
	return (
		<section className="sectionTwo">
			<div className="flexRow">
				<div className="fadeLine fadeLineLeft"></div>
				<h2 className="headingTwo">{title}</h2>
				<div className="fadeLine fadeLineRight"></div>
			</div>

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