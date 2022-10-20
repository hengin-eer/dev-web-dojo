import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import nitacwpl from './media/logoNobg.png'
import { Link } from 'react-router-dom'


const Header = ({ active, setActive }) => {
    return (
        <header>
            <div className="header__wrapper">
                <div className='header__ttl'><Link to="/">Web道場</Link></div>
                <div className={`${active ? 'hum active' : 'hum'}`} onClick={() => setActive(!active)} >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className={`${active ? 'header__menu active' : 'header__menu'}`}>
                    <div className="menu__ttl"><Link to="/" onClick={() => setActive(!active)}>Web道場</Link></div>
                    <ul>
                        <li><Link to="/cource/" onClick={() => setActive(!active)}>Cource</Link></li>
                        <li><Link to="/posts/" onClick={() => setActive(!active)}>Posts</Link></li>
                        <li><Link to="/about/" onClick={() => setActive(!active)}>About</Link></li>
                        <li><Link to="/contact/" onClick={() => setActive(!active)}>Contact</Link></li>
                    </ul>
                    <div className="sns">
                        <a href="https://twitter.com" className='twitter' target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="https://nitacwpl.tech" className='nitacwpl' target="_blank" rel="noreferrer"><img src={nitacwpl} alt="nitacwpl" /></a>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header