import React from "react"
import { Link } from "react-router-dom"
import { ReactComponent as BtnArrow } from '../media/btnArrow.svg'

export const PrimaryButton = ({inner, to}) => {
	return (
		<Link to={to} className='primary__button'>
			<div className='inner__txt'>{inner}</div>
			<BtnArrow className='btn__arrow' />
		</Link>
	)
}