import React from 'react'
import './Header.css'

export const Header = () => {
  return (
    <header>
				<div className="hero">
					<h1 className="headerOne">
						Potrzebujesz pomocy? <br />{" "}
						<span style={{ color: "#F7CB6C" }}>Ula ogarnie.</span>
					</h1>
					<p>Kompleksowa pomoc w ogrodzie, przy miejscach pamięci i w domu.</p>
					<a className="buttonCta" href="#">
						kontakt
					</a>
				</div>
			</header>
  )
}
