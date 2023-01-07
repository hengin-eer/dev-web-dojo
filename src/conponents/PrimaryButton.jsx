import React from "react"
import { Link } from "react-router-dom"
import { ReactComponent as BtnArrow } from '../media/btnArrow.svg'

export const PrimaryButton = ({ inner, to, className, isLink=true, target='_self' }) => {
	if (isLink) {
		return (
			<Link to={to} className={`primary__button ${className}`}>
				<div className='inner__txt'>{inner}</div>
				<BtnArrow className='btn__arrow' />
			</Link>
		)
	} else {
		return (
			<a href={to} className={`primary__button ${className}`} target={target} rel='noreferrer'>
				<div className='inner__txt'>{inner}</div>
				<BtnArrow className='btn__arrow' />
			</a>
		)
	}
}