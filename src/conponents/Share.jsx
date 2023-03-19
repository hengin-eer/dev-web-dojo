import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLine, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { ReactComponent as HatenaBookmark } from '../media/hatenabookmark.svg'
import React from 'react'

const Share = () => {
    const url = window.location.href;
    const text = 'Reactでシェアボタンを作成する';
    const twitterUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    const lineUrl = `https://social-plugins.line.me/lineit/share?url=${url}`;
    const hatenaUrl = `http://b.hatena.ne.jp/add?mode=confirm&url=${url}`;
    const pinterestUrl = `https://www.pinterest.com/pin/create/button/?url=${url}`;

    return (
        <div className='share'>
            <div className="share__ttl">Share</div>
            <div className="share__links">
                <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} color='#1da1f2' />
                </a>
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} color='#1877f2' />
                </a>
                <a href={lineUrl} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLine} height="50px" color='#00c300' />
                </a>
                <a href={hatenaUrl} target="_blank" rel="noopener noreferrer">
                    <HatenaBookmark fill='#00A4DE' />
                </a>
                <a href={pinterestUrl} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faPinterest} color='#e60023' />
                </a>
            </div>
        </div>
    );
}

export default Share