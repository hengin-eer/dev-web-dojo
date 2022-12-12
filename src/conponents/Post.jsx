import React from 'react'
import { Link, useParams } from 'react-router-dom'
import postlist from '../posts.json'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag, faClockRotateLeft, faList } from '@fortawesome/free-solid-svg-icons'
import { NotFound } from './NotFound'
import { useState } from 'react'
import Highlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Post = () => {
    const [toclists, toggleToclists] = useState(false)
    const { id } = useParams()
    let fetchedPost = {
        title: ""
    }
    postlist.forEach(post => {
        if (id === post.slug) {
            fetchedPost.title = post.title ? post.title : "No title"
            fetchedPost.author = post.author ? post.author : "No author"
            fetchedPost.date = post.date ? post.date : "No date"
            fetchedPost.category = post.category ? post.category : "No category"
            fetchedPost.content = post.content ? post.content : "No content"
        }
    })
    if (fetchedPost.title === "") {
        return (
            <NotFound />
        )
    }

    const Toclist1 = ({ ...props }) => {
        return (
            <li>
                <a href={'#' + props.children.toString()} onClick={() => toggleToclists(false)}>{props.children.toString()}</a>
            </li>
        )
    }

    const Toclist2 = ({ ...props }) => {
        return (
            <ul>
                <li>
                    <a href={'#' + props.children.toString()} onClick={() => toggleToclists(false)}>{props.children.toString()}</a>
                </li>
            </ul>
        )
    }

    const H1 = ({ ...props }) => {
        return (
            <h1 id={props.children.toString()} className='tocList'>{props.children}</h1>
        )
    }
    const H2 = ({ ...props }) => {
        return (
            <h2 id={props.children.toString()} className='tocList'>{props.children}</h2>
        )
    }

    const CopyCode = ({ ...props }) => {
        const [btnText, setBtnText] = useState('Copy')

        const codeContents = props.children[0].props
        const filename = codeContents.className.split(":")[1]
        const copyCode = (codes) => {
            navigator.clipboard.writeText(codes)
            setBtnText('Copied!')
            setTimeout(() => {
                setBtnText('Copy')
            }, 750);
        }
        return (
            <div className='codes__wrapper'>
                <div className="codes__header">
                    <div className="file__name">{filename}</div>
                    <button className='copy__codes' onClick={() => copyCode(codeContents.children.toString())}>{btnText}</button>
                </div>
                <Highlighter style={monokai}>
                    {codeContents.children}
                </Highlighter>
            </div>
        )
    }

    return (
        <div className='post' id='postTop'>
            <div className={toclists ? "post__toc active" : "post__toc"}>
                <div className="toc">
                    <ReactMarkdown components={{ h1: Toclist1, h2: Toclist2 }} allowedElements={["h1", "h2"]} rehypePlugins={[rehypeRaw]} >{fetchedPost.content}</ReactMarkdown>
                </div>
            </div>
            <div className={toclists ? "toggle__toclists active" : "toggle__toclists"} onClick={() => toggleToclists(!toclists)}>
                <FontAwesomeIcon className='toclists__ico' icon={faList} />
            </div>
            <div className="post__article" onClick={() => toggleToclists(false)}>
                <div className="post__back">
                    <Link to={`/posts/${fetchedPost.category}`}>記事一覧に戻る</Link>
                </div>
                <div className="post__date"><FontAwesomeIcon className='date__ico' icon={faClockRotateLeft} />{fetchedPost.date}</div>
                <div className="post__ttl">{fetchedPost.title}</div>
                <div className="post__cat"><FontAwesomeIcon className='cat__ico' icon={faHashtag} />{fetchedPost.category}</div>
                <div className="post__author">
                    <img className='author__ico' src={`${process.env.PUBLIC_URL}/media/${fetchedPost.author}.png`} alt="" />
                    <div className="author__name">{fetchedPost.author}</div>
                </div>
                <div className="post__contents">
                    <ReactMarkdown components={{ h1: H1, h2: H2, pre: CopyCode }} rehypePlugins={[rehypeRaw]} >{fetchedPost.content}</ReactMarkdown>
                </div>
            </div>
        </div>
    )
}

export default Post