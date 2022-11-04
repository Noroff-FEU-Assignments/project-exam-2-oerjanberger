import { Container } from "react-bootstrap";
import Heading from "../layout/Heading";

export default function About() {
    return (
        <Container className="main__container pre__auth__container about__page">
            <Heading size="1" content="About us" />
        </Container>
    );
};