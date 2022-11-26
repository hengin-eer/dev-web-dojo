import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import notFound__logo from '../media/notfound__logo.svg'
import {ReactComponent as NotfoundPic} from '../media/notfound.svg'

export const NotFound = () => {
    return (
        <div className='notfound'>
            <nav className="notfound__nav">
                <img src={notFound__logo} alt='' className="nav__logo"></img>
                <div className='nav__search'>
                    <FontAwesomeIcon className='search__ico' icon={faMagnifyingGlass} />
                    <div className="search__item">404 Page not found</div>
                </div>
            </nav>
            <p className='searchs__txts'>約 0,000,000 件 （0.00 秒）</p>
            <p className="maybe__txts"><span>もしかして:</span> <a href="https://nitacwpl.tech/">明石高専Web研究部</a></p>
            <div className="notfound__desc">
                <div className="descs">
                    <div className="desc__ttl">404 Page not found</div>
                    <p>お探しのページは見つかりませんでした</p>
                    <p>アクセスしようとしたページは削除又は移動された可能性があります</p>
                </div>
                <NotfoundPic className="desc__pic" />
            </div>
        </div>
    )
}
