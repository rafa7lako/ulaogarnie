import { SectionHeader } from '../SectionHeader';
import './ServicePageSectionTwo.css'

export const ServicePageSectionTwo = ({ title, text, images, alts = [] }) => {
    return (
        <section className="sectionTwo">
            <SectionHeader title={title} theme='light' />
            <div>
                <p className="subSectionTwoText">{text}</p>
                <div className="subSectionTwoImgGrid">
                    {images.map((img, i) => (
                        <img key={i} className="subSectionTwoImg" src={img}  alt={alts[i] ?? ""} />
                    ))}
                </div>
            </div>
        </section>
    );
};