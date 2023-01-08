import React from 'react'
import backWave from '../media/section__backWave.svg'
import topview from '../media/topview.svg'
import about from '../media/about.png'
import nitacwpl from '../media/logoNobg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PrimaryButton } from './PrimaryButton'
import traininglist from '../training.json'
import { ReactComponent as BtnArrow } from '../media/btnArrow.svg'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

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
						<PrimaryButton inner="コース一覧" to="/courses" />
						<PrimaryButton inner="お問い合わせ" to="/#contact" isLink={false} />
					</div>
					<div className="inner__scroll">
						<span className='scroll__txt'>scroll</span>
						<BtnArrow className='scroll__arrow' />
					</div>
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
						<p>Web道場はウェブページを作る技術を学べるサイトです</p>
						<p>自分だけのウェブサイトを完成させるためにコツコツとやっていきましょう</p>
					</div>
					<img className='about__pic' src={about} alt="" />
					<PrimaryButton inner="Web道場を覗く" to="/about" className='about__btn' />
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
						<div className="map__wrapper">
							{traininglist.length &&
								traininglist.map((train) => {
									return (
										<div className="map__item">
											<div className="item__box">
												<img src={`${process.env.PUBLIC_URL}/media/training${train.id}.svg`} className="box__pic" alt={`training${train.id}`} />
												<div className="box__txts">
													<p>{train.desc1}</p>
													<p>{train.desc2}</p>
												</div>
											</div>
											<div className="item__num">{`0${train.id}`}</div>
										</div>
									)
								})}
						</div>
						<div className="course__start">
							<p className="start__txts">さっそく稽古をはじめよう</p>
							<PrimaryButton inner="コース一覧" to="/courses" />
						</div>
					</div>
				</div>
			</section>
			<section className="home__contact" id='contact'>
				<div className="contact__inner">
					<div className="contact__ttl section__ttl">
						<div className="ttl__main">お問い合わせ</div>
						<div className="ttl__sub">Contact</div>
					</div>
					<div className="contact__desc">
						<div className="desc__txts">記事の修正・明石高専ウェブ研究部へのご連絡・運営者へのご連絡などお気軽にご連絡ください</div>
						<div className="contacts__wrapper">
							<div className="contacts__item">
								<div className="contacts__ttl">明石高専ウェブ研究部</div>
								<div className="contacts__links">
									<div className="contacts__link">
										<FontAwesomeIcon icon={faTwitter} className="link__ico" />
										<a href="https://twitter.com/nitacwpl" className="link__txt" target="_blank" rel="noreferrer">@nitacwpl</a>
									</div>
									<div className="contacts__link">
										<img src={nitacwpl} alt="nitacwpl" className='link__ico' />
										<a href="https://nitacwpl.tech" className="link__txt" target="_blank" rel="noreferrer">nitacwpl.tech</a>
									</div>
								</div>
							</div>
							<div className="contacts__item">
								<div className="contacts__ttl">運営者</div>
								<div className="contacts__links">
									<div className="contacts__link">
										<FontAwesomeIcon icon={faTwitter} className="link__ico" />
										<a href="https://twitter.com/tim_daik" className="link__txt" target="_blank" rel="noreferrer">@tim_daik</a>
									</div>
									<div className="contacts__link">
										<img src={nitacwpl} alt="nitacwpl" className='link__ico' />
										<a href="https://github.com/hengin-eer" className="link__txt" target="_blank" rel="noreferrer">@hengin-eer</a>
									</div>
								</div>
							</div>
						</div>
						<PrimaryButton inner="お問い合わせフォーム" to="https://docs.google.com/forms/d/e/1FAIpQLSerzLp6he7eKAoQkf-Whf8yIiYErMEfk-DFXxAi2NBrDF-ewA/viewform" className="contacts__btn" isLink={false} target='_blank' />
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home