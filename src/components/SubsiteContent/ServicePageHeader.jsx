import React from 'react'
import './ServicePageHeader.css'

export const ServicePageHeader = ({title, subText}) => {
  return (
    <header>
				<div className="hero__sub">
					<h1 className="headerOne">{title}</h1>
					<p>
						{subText}
					</p>
				</div>
			</header>
  )
}
