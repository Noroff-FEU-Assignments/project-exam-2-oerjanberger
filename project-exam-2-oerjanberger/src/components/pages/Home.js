import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Heading from "../layout/Heading";
import PreAuthBackground from "../layout/PreAuthBackground";

export default function Home() {
    return (
        <>
            <PreAuthBackground image="/images/backgroundImages/IndexPageImage.jpg" />
            <Container className="main__container" >
                <Heading size="1" content="Welcome to us" />
                <div className="homepage__buttons">
                    <Link to={"/register"}><button className="primary__btn">Register</button></Link>
                    <Link to={"/login"}><button className="primary__btn secondary__btn">Login</button></Link>
                </div>
            </Container>
        </>
    );
};