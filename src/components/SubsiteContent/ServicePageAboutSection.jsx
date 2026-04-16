import React from "react";
import './ServicePageAboutSection.css'

export const ServicePageAboutSection = ({ img, heading }) => {
    return (
        <section className=" serviceAbout">
            <div className="serviceAbout__container">
                <img className="serviceAbout__image" src={img} alt="ulaogarnie logo" />

                <div className="serviceAbout__content">
                    <h3 className="serviceAbout__heading">{heading}</h3>

                    <p>
                        Zawsze byłam osobą, do której ktoś dzwonił, gdy trzeba było coś
                        zorganizować, uporządkować albo po prostu „ogarnąć”. Z czasem
                        zobaczyłam, jak wiele osób potrzebuje takiej zwykłej, konkretnej
                        pomocy – w domu, w ogrodzie czy przy opiece nad grobami bliskich.
                    </p>

                    <p>
                        Postanowiłam połączyć to z moim doświadczeniem i wykształceniem
                        pedagogicznym. Tak powstała firma, która nie jest tylko usługą – ale
                        realnym wsparciem w codziennym życiu.
                    </p>
                </div>
            </div>
        </section>
    );
};