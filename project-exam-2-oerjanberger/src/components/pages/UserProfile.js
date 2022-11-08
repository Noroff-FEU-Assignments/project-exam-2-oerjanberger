import { Container } from "react-bootstrap";
import Heading from "../layout/Heading";

export default function UserProfile() {
    return (
        <Container className="main__container myProfile__page">
            <Heading size="1" content="Hello" />
        </Container>
    );
};