import { Container } from "react-bootstrap";
import Heading from "../layout/Heading";
import GetAllPosts from "../getFunctions/GetAllPosts";

export default function PostList() {
    return (
        <Container className="main__container postList__page">
            <Heading size="1" content="Posts" />
            <GetAllPosts />
        </Container>
    );
};