import React from 'react'
import { ReactComponent as BgTriangle } from '../media/triangle.svg'
import { PrimaryButton } from './PrimaryButton'
import team from '../media/teamworking.webp'

const AboutPage = () => {
  return (
    <div className='about'>
      <div className="topview">
        <div className="topview__ttl">Web道場について</div>
        <div className="topview__desc">
          <img src={team} alt="Web道場について" className="topview__desc__img" />
          <div className="topview__desc__text">
            <p>Web道場はウェブページを作る技術を学べるサイトです</p>
            <p>1つのファイルで作る簡単なサイトから、モダンな技術を用いた高度なサイト作りを実践的に学ぶことが出来ます</p>
          </div>
        </div>
      </div>
      <BgTriangle className='back-triangle' />
      <section className="tech">
        <div className="tech__ttl">段階的に技術が学べる</div>
        <div className="tech__desc">
          <p>Web道場にはスキルレベルごとにコースが用意されています</p>
          <p>基本的には順序通りにやっていただくと効果的に学習が出来ます</p>
        </div>
        <ul className="tech__cards">

          {/* tech cards */}
          <li className="tech__card">
            <img src={`${process.env.PUBLIC_URL}/media/tutorial.svg`} alt="" className="tech__card__img" />
            <div className="tech__card__level">入門レベル</div>
            <div className="tech__card__ttl">Turorial</div>
            <div className="tech__card__desc">環境構築&初めてのサイト制作</div>
          </li>

          <li className="tech__card">
            <img src={`${process.env.PUBLIC_URL}/media/html-css.svg`} alt="" className="tech__card__img" />
            <div className="tech__card__level">初級レベル</div>
            <div className="tech__card__ttl">HTML/CSS</div>
            <div className="tech__card__desc">自分だけのウェブサイトを作ろう</div>
          </li>

          <li className="tech__card">
            <img src={`${process.env.PUBLIC_URL}/media/javascript.svg`} alt="" className="tech__card__img" />
            <div className="tech__card__level">中級レベル</div>
            <div className="tech__card__ttl">JavaScript</div>
            <div className="tech__card__desc">動的なサイトを作ってみよう</div>
          </li>

        </ul>
        <PrimaryButton inner="全ての稽古一覧" to="/courses" className="tech__foot__button" />
      </section>
    </div>
  )
}

export default AboutPage