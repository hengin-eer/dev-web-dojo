import React from 'react'
import { Link } from 'react-router-dom'
// import logo from './media/logo.png'

const Home = () => {
	return (
		<div className="home">
			<section className="home__topview">

				<div className="topview__inner">
					<div className="inner__ttl">ようこそ<wbr />Web道場へ</div>
					<div className="inner__buttons">
						<Link className='inner__btn' to="/cource">コース一覧</Link>
						<Link className='inner__btn' to="/contact">お問い合わせ</Link>
					</div>
				</div>
			</section>
			<section className='home__about'>
				<div className="about__inner">
					<div className="about__ttl section__ttl">
						<div className="ttl__main">What’s “Web Dojo”?</div>
						<div className="ttl__sub">Web道場とは？</div>
					</div>
					<div className="about__desc">
						<p>このサイトではウェブページを作るための技術を学べます</p>
						<p>Webサイトを作るために主にHTMLとCSSを学べます</p>
						<p>コツコツやっていきましょう</p>
					</div>
				</div>
			</section>
			<section className="home__cource">
				<div className="cource__inner">
					<div className="cource__ttl section__ttl">
						<div className="ttl__main">Cource</div>
						<div className="ttl__sub">Web道</div>
					</div>
				</div>
			</section>
			<section className="home__contact">
				<div className="contact__inner">
					<div className="contact__ttl section__ttl">
						<div className="ttl__main">Contact</div>
						<div className="ttl__sub">お問い合わせ</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home