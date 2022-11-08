import { Container } from "react-bootstrap";
import Heading from "../layout/Heading";
import GetAllProfiles from "../getFunctions/GetAllProfiles";

export default function ProfileList() {
    return (
        <Container className="main__container profileList__page">
            <Heading size="1" content="Profiles" />
            <GetAllProfiles />
        </Container>
    );
};