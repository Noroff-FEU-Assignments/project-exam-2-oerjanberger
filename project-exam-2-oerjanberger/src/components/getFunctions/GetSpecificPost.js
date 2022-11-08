import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import useAxios from "../hooks/useAxios";
import moment from "moment";
import Heading from "../layout/Heading";
import { BsHandThumbsUpFill } from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import CreateComment from "../forms/CreateComment";
import CommentCard from "../layout/CommentCard";

export default function GetSpecificPost() {
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    let { id } = useParams();
    const postUrl = `social/posts/${id}?_author=true&_comments=true&_reactions=true`

    const http = useAxios();

    useEffect(() => {
        async function getSpecificPostData() {
            try {
                const response = await http.get(postUrl);
                setPost(response.data)
                setComments(response.data.comments)
            } catch (error) {
                console.log(error);
                setError("There seems to be a problem with showing the post")
            } finally {
                setLoading(false)
            }
        }
        getSpecificPostData()
    }, [])

    if (loading) {
        return <Spinner animation="border" variant="secondary" />
    }

    if (error) {
        <Alert variant="danger">Unfortunately an error has occurred: {error}</Alert>
    }
    const avatarAltText = `This is the avatar image for ${post.author.avatar}`;
    return (
        <>
            <Heading size="1" content={post.title} />
            <img src={post.media} className="specificPost__img" alt="" />
            <div className="specificPost__profileContainer">
                <div className="avatar__img__border profileCard__avatar__border">
                    <img src={post.author.avatar === null ? "/images/defaultImages/default_avatar_img.jpg" : post.author.avatar} className="nav__icon avatar__img__small" alt={avatarAltText} />
                </div>
                <h2>{post.author.name}</h2>
            </div>
            <div className="specificPost__dateContainer">
                <p>Created: {moment(post.created).format('lll')}</p>
                <p>Updated: {moment(post.updated).calendar()}</p>
            </div>
            <p>{post.body}</p>
            <div className="specificPost__interactionInfoContainer">
                <div className="specificPost__numberReactionsContainer">
                    <p className="number">{post._count.reactions}</p>
                    <p>Reactions</p>
                </div>
                <div className="specificPost__numberCommentsContainer">
                    <p className="number">{post._count.comments}</p>
                    <p>Comments</p>
                </div>
            </div>
            <hr></hr>
            <div className="specificPost__interactionBtnContainer">
                <button type="button" className="specificPost__interactBtn"><img src="/images/logo/Logo_main.svg" alt="react logo, react to the post" className="logo__btn" /><BsHandThumbsUpFill className="icon__thumbsUp" /></button>
                <button type="button" className="specificPost__interactBtn comment__btn">Comment<BiComment className="icon__comment" /></button>
            </div>
            <hr></hr>
            <CreateComment />
            <h3>Comments</h3>
            <Container className="specificPost__commentsContainer">
                {comments.map(function (comment) {
                    const { id, body, owner, created } = comment;
                    return <CommentCard key={id} id={id} body={body} owner={owner} created={moment(created).calendar()} />
                })}
            </Container>
        </>
    );
};