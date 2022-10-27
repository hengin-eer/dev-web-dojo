import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import postlist from '../posts.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag, faClockRotateLeft, faTags } from '@fortawesome/free-solid-svg-icons'

function Postlist() {
    const [data, setData] = useState(postlist)

    const filterCat = (catItem) => {
        const result = postlist.filter((curData) => {
            return curData.category === catItem
        })
        setData(result)
    }
    console.log(data)

    return (
        <div className='postlist header__support'>
            <nav className="postlist__nav">
                <ul className='postlist__cats'>
                    <FontAwesomeIcon className='cats__tags' icon={faTags} />
                    <li className='postlist__cat' onClick={() => setData(postlist)}>All</li>
                    <li className='postlist__cat' onClick={() => filterCat('HTML')}>HTML</li>
                    <li className='postlist__cat' onClick={() => filterCat('CSS')}>CSS</li>
                    <li className='postlist__cat' onClick={() => filterCat('JavaScript')}>JavaScript</li>
                </ul>
            </nav>
            <div className="postCards">
                {data.length &&
                    data.map((post) => {
                        console.log(post.category)
                        return (
                            <div className="postCard" key={post.id}>
                                <div className="post__date"><FontAwesomeIcon className='date__ico' icon={faClockRotateLeft} />{post.date}</div>
                                <h2 className="post__ttl"><Link to={`/posts/${post.slug}`}>{post.title}</Link></h2>
                                <div className="post__cat"><FontAwesomeIcon className='cat__ico' icon={faHashtag} />{post.category}</div>
                                <Link className='post__more' to={`/posts/${post.slug}`}>詳しく見る</Link>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Postlist