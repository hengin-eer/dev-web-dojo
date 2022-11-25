import React from 'react'
import { Link } from 'react-router-dom'
import backWave from '../media/section__backWave.svg'
import topview from '../media/topview.svg'
import about from '../media/about.png'
import a from '../media/a.png'
// import logo from './media/logo.png'

const Home = () => {
	return (
		<div className="home">
			<section className="home__topview">
				<div className="topview__inner">
					<div className="inner__desc">
						<div className="desc__ttls">
							<div className="ttl__main">ようこそ<wbr /><span className="colorLinear">Web道場</span>へ</div>
							<div className="ttl__sub">Web道を修める者たちが共に磨く場</div>
						</div>
						<img className='desc__pic' src={topview} alt="" />
					</div>
					<div className="inner__buttons">
						<Link className='inner__btn' to="/courses">コース一覧</Link>
						<Link className='inner__btn' to="/contact">お問い合わせ</Link>
					</div>
					<a href='#about' className="inner__scroll">
						<span className='scroll__txt'>scroll</span>
						<div className='scroll__arrow'>
							<span></span>
							<span></span>
						</div>
					</a>
				</div>
				<img className='backwave' src={backWave} alt="" />
			</section>
			<section className='home__about' id='about'>
				<div className="about__inner">
					<div className="about__ttl section__ttl">
						<div className="ttl__main">Web道場とは？</div>
						<div className="ttl__sub">What</div>
					</div>
					<div className="about__desc">
						<p>Web道場ではウェブページを作るための技術を学べます</p>
						<p>HTMLとCSSを使えればウェブサイトを作ることが出来ます</p>
						<p>とはいっても、世の中のサイトの多くは他の言語やツールを組み合わせて作られています</p>
						<p>しかし<span className='colorLinear'>「千里の道も一歩より」</span></p>
						<p>自分だけのウェブサイトを完成させるために</p>
						<p>コツコツと継続的にやっていきましょう</p>
					</div>
					<img className='about__pic' src={about} alt="" />
					<Link className='about__btn' to="/about">Web道場を覗く</Link>
				</div>
			</section>
			<section className="home__course">
				<img className='backwave rev__wave' src={backWave} alt="" />
				<div className="course__inner">
					<div className="course__ttl section__ttl">
						<div className="ttl__main">稽古の流れ</div>
						<div className="ttl__sub">Training</div>
					</div>
					<div className="course__desc">
						<img src={a} alt="" />
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