import React, { useState } from 'react'
import postlist from '../posts.json'
import catlist from '../cats.json'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { PrimaryButton } from './PrimaryButton'

function Postlist() {
    const category = useParams()
    const [data, setData] = useState(postlist)
    const [cat, setCat] = useState(catlist)

    useEffect(() => {
        const result = postlist.filter((curData) => {
            return curData.category === category.cat
        })
        setData(result)
        if (category.cat === 'master') {
            setData(postlist)
        }

        const filteredCat = catlist.filter((curData) => {
            return curData.slug === category.cat
        })
        setCat(filteredCat[0])
    }, [category])

    const datas = (data.length === 0)


    return (
        <div className='postlist'>
            <div className="postlist__topview">
                <div className="topview__ttl">
                    <div className="ttl__main">{cat.title}コース</div>
                    <div className="ttl__sub">{cat.desc}</div>
                </div>
            </div>
            {datas ? (
                <div className="postCards">
                    <h1>Coming soon...</h1>
                    <p>ごめんなさい、まだ記事がありません</p>
                    <p>Web道場の記事執筆に是非参加してください</p>
                    <p>お問い合わせからどうぞ</p>
                    <PrimaryButton inner="トップページへ" to="/" />
                </div>
            ) : (
                <div className="postCards">
                    {data.length &&
                        data.map((post) => {
                            return (
                                <div className="postCard" key={post.id}>
                                    <div className="card__desc">
                                        <div className="post__date"><FontAwesomeIcon className='date__ico' icon={faClockRotateLeft} />{post.date}</div>
                                        <h2 className="post__ttl"><Link to={`/posts/${post.category}/${post.slug}`}>{post.title}</Link></h2>
                                        <div className="post__cat"><FontAwesomeIcon className='cat__ico' icon={faHashtag} />{post.category}</div>
                                    </div>
                                    <Link className='post__more' to={`/posts/${post.category}/${post.slug}`}>詳しく見る</Link>
                                </div>
                            )
                        })
                    }
                </div>
            )}
            <PrimaryButton inner="稽古一覧へ" to="/courses" className="to__courses" />
        </div>
    )
}

export default Postlist