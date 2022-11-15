import { Container } from "react-bootstrap";
import GetUsersFollowers from "../getFunctions/GetUsersFollowers"
import Heading from "../layout/Heading";

export default function Following() {
    return (
        <Container className="main__container">
            <Heading size="1" content="Followers" />
            <GetUsersFollowers />
        </Container>

    );
};