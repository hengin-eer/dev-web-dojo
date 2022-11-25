import React from 'react'
import { Link } from 'react-router-dom'
import catlist from '../cats.json'

const CoursePage = () => {

	return (
		<div className='course'>
			<div className="course__topview">
				<div className="topview__ttl">
					<div className="ttl__main">コース一覧</div>
					<div className="ttl__sub">Web道場の稽古一覧です</div>
				</div>
			</div>
			<div className='course__cats'>
				{catlist.length &&
					catlist.map((cat) => {
						return (
							<Link to={`/posts/${cat.slug}/`} className='course__cat' key={cat.id}>
								<img src={`${process.env.PUBLIC_URL}/media/${cat.slug}.svg`} alt="" />
								<div className="cat__ttl">{cat.title}</div>
								<div className="cat__desc">{cat.desc}</div>
							</Link>
						)
					})}
			</div>
		</div>
	)
}

export default CoursePage