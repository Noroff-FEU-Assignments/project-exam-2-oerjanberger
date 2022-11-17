import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import useAxios from "../hooks/useAxios";
import PostCard from "../layout/PostCard";
import moment from 'moment'

export default function GetAllPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const http = useAxios();

    useEffect(() => {
        async function getPostData() {
            try {
                const response = await http.get("social/posts/?_author=true&_comments=true&_reactions=true");
                setPosts(response.data)
            } catch (error) {
                console.log(error);
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        getPostData()
    }, [])

    if (loading) {
        return <Spinner animation="border" variant="secondary" />
    }

    if (error) {
        <Alert variant="danger">Unfortunately an error has occurred: {error}</Alert>
    }
    return (
        <Container className="posts__container">
            {posts.map(function (post) {
                const { id, author, title, created, updated, media, body, _count, reactions } = post;
                return <PostCard key={id} id={id} avatar={author.avatar} name={author.name} title={title} created={moment(created).format('lll')} updated={moment(updated).calendar()} image={media} body={body} reactions={reactions.length === 0 ? [] : reactions} comments={_count.comments} />
            })}
        </Container>
    );
};
