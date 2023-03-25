import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLine, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'
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
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    const lineUrl = `https://social-plugins.line.me/lineit/share?url=${url}`;
    const hatenaUrl = `http://b.hatena.ne.jp/add?mode=confirm&url=${url}`;
    const pinterestUrl = `https://www.pinterest.com/pin/create/button/?url=${url}`;

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
                <a className='share__links__btn' href={facebookUrl} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} color='#1877f2' />
                </a>
                <a className='share__links__btn' href={lineUrl} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLine} height="50px" color='#00c300' />
                </a>
                <a className='share__links__btn' href={hatenaUrl} target="_blank" rel="noopener noreferrer">
                    <HatenaBookmark fill='#00A4DE' />
                </a>
                <a className='share__links__btn' href={pinterestUrl} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faPinterest} color='#e60023' />
                </a>
            </div>
        </div>
    );
}

export default Share