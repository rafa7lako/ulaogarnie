import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import './UnderConstruction.css';
import ulaogarnieLogo from "../assets/ulaogarnieLogo.svg";
import cennik from '../assets/cennik.jpeg'

export const UnderConstruction = () => {
  return (
    <div className='ucMain'>
        <img className='navElementLogo' src={ulaogarnieLogo} alt="logo ulaogarnia.pl" />
        <div className='ucWindow'>
            <h1>PRACE TECHNICZNE!</h1>
        <p className='ucParagraph'>Ula ogarnia sobie stronę. W razie pytań prosimy o kontakt.</p>
        <div className='ucIcons'>
            <div className="flex ucIcon">
							<FontAwesomeIcon className="iconGeneral contactIcon" icon={faPhone} />
							<p>+48 725 116 511</p>
						</div>
						<div className="flex ucIcon">
							<FontAwesomeIcon className="iconGeneral contactIcon" icon={faEnvelope} />
							<p>u.jendral@gmail.com</p>
						</div>
        </div>
        </div>
        <img className='cennik' src={cennik} alt="cennik ulaogarnie.pl" />
        
    </div>
  )
}
