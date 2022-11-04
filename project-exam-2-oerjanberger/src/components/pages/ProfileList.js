import { Container } from "react-bootstrap";
import Heading from "../layout/Heading";

export default function ProfileList() {
    return (
        <Container className="main__container profileList__page">
            <Heading size="1" content="Profiles" />
        </Container>
    );
};