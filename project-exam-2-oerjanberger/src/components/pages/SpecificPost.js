import { Container } from "react-bootstrap";
import GetSpecificPost from "../getFunctions/GetSpecificPost";

export default function SpecificPost() {
    return (
        <Container className="main__container specificPost__page">
            <GetSpecificPost />
        </Container>
    );
};