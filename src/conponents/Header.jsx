import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import nitacwpl from '../media/logoNobg.png'
import { Link } from 'react-router-dom'


const Header = ({ active, setActive }) => {
    return (
        <div className="header__wrapper">
            <header>
                <div className="header__inner">
                    <div className='header__ttl colorLinear'><Link to="/">Web道場</Link></div>
                    <nav className={`${active ? 'header__menu active' : 'header__menu'}`}>
                        <div className="menu__ttl colorLinear"><Link to="/" onClick={() => setActive(!active)}>Web道場</Link></div>
                        <ul>
                            <li><Link to="/courses/" onClick={() => setActive(false)}>
                                <span className='is__bigger'>Courses</span>
                                <span>コース</span></Link>
                            </li>
                            <li>
                                <Link to="/about/" onClick={() => setActive(false)}>
                                    <span className='is__bigger'>About</span>
                                    <span>詳しく</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact/" onClick={() => setActive(false)}>
                                    <span className='is__bigger'>Contact</span>
                                    <span>お問い合わせ</span>
                                </Link>
                            </li>
                        </ul>
                        <div className="sns">
                            <a href="https://twitter.com" className='twitter' target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="https://nitacwpl.tech" className='nitacwpl' target="_blank" rel="noreferrer"><img src={nitacwpl} alt="nitacwpl" /></a>
                        </div>
                    </nav>
                </div>
            </header>
            <div className={`${active ? 'hum active' : 'hum'}`} onClick={() => setActive(!active)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Header