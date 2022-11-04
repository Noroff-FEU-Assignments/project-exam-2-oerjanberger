import { Container } from "react-bootstrap";
import Heading from "../layout/Heading";

export default function MyProfile() {
    return (
        <Container className="main__container pre__auth__container myProfile__page">
            <Heading size="1" content="MyProfile" />
        </Container>
    );
};