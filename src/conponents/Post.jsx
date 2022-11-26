import React from 'react'
import { Link, useParams } from 'react-router-dom'
import postlist from '../posts.json'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { NotFound } from './NotFound'

const Post = () => {
    const { id } = useParams()
    let fetchedPost = {
        title: ""
    }
    console.log(id)
    postlist.forEach(post => {
        if (id === post.slug) {
            fetchedPost.title = post.title ? post.title : "No title"
            fetchedPost.author = post.author ? post.author : "No author"
            fetchedPost.date = post.date ? post.date : "No date"
            fetchedPost.category = post.category ? post.category : "No category"
            fetchedPost.content = post.content ? post.content : "No content"
            console.log("success!")
        }
    })
    if (fetchedPost.title === "") {
        return (
            <NotFound />
        )
    }

    const Toclist = ({ ...props }) => {
        return (
            <li>
                <a href={'#' + props.children.toString()}>{props.children.toString()}</a>
            </li>
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

    return (
        <div className='post'>
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
                <div className="toc__ttl">INDEX</div>
                <div className="toc">
                    <ReactMarkdown components={{ h1: Toclist, h2: Toclist }} allowedElements={["h1", "h2"]} rehypePlugins={[rehypeRaw]} >{fetchedPost.content}</ReactMarkdown>
                </div>
                <ReactMarkdown components={{ h1: H1, h2: H2 }} rehypePlugins={[rehypeRaw]} >{fetchedPost.content}</ReactMarkdown>
            </div>
            <hr />
        </div>
    )
}

export default Post