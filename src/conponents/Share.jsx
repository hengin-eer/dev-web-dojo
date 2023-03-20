import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLine, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { ReactComponent as HatenaBookmark } from '../media/hatenabookmark.svg'
import React, { useState } from 'react'
import { faCheck, faPaperclip } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router-dom'

const Share = () => {
    const [isCopied, setIsCopied] = useState(false)
    let currentPath = useLocation().pathname;
    const url = `https://web-dojo.nitacwpl.tech${currentPath}`
    const text = encodeURIComponent(document.title);
    const twitterUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    const lineUrl = `https://social-plugins.line.me/lineit/share?url=${url}`;
    const hatenaUrl = `http://b.hatena.ne.jp/add?mode=confirm&url=${url}`;
    const instagramUrl = `https://www.instagram.com/create/broadcast/?source_url=${url}`
    const tiktokUrl = `https://www.tiktok.com/upload/?refer=${url}`

    const handleCopy = () => {
        navigator.clipboard.writeText(url)
        setIsCopied(true)
        setTimeout(() => {
            setIsCopied(false)
        }, 1000);
    }

    return (
        <div className='share'>
            <div className="share__ttl">Share</div>
            <div className="share__links">
                <div className="share__links__btn" onClick={() => handleCopy()}>
                    <FontAwesomeIcon icon={isCopied ? faCheck : faPaperclip} color={isCopied ? "#aaa" : "#2869ff"} />
                </div>
                <a className='share__links__btn' href={twitterUrl} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} color='#1da1f2' />
                </a>
                <a className='share__links__btn' href={lineUrl} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLine} height="50px" color='#00c300' />
                </a>
                <a className='share__links__btn' href={hatenaUrl} target="_blank" rel="noopener noreferrer">
                    <HatenaBookmark fill='#00A4DE' />
                </a>
                <a className='share__links__btn' href={instagramUrl} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} color='#E4405F' />
                </a>
                <a className='share__links__btn' href={tiktokUrl} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTiktok} color='#000000' />
                </a>
            </div>
        </div>
    );
}

export default Share