import { Container } from "react-bootstrap";
import GetUsersFollowing from "../getFunctions/GetUsersFollowing"
import Heading from "../layout/Heading";

export default function Following() {
    return (
        <Container className="main__container">
            <Heading size="1" content="Following" />
            <GetUsersFollowing />
        </Container>

    );
};