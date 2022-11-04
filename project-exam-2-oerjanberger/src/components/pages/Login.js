import { Container } from "react-bootstrap";
import Heading from "../layout/Heading";
import PreAuthBackground from "../layout/PreAuthBackground";
import LoginForm from "../forms/LoginForm";

export default function Login() {
    return (
        <>
            <PreAuthBackground image="/images/backgroundImages/loginPageImage.jpg" />
            <Container className="main__container" >
                <div className="form__background">
                    <Heading size="1" content="Login" />
                    <LoginForm />
                </div>
            </Container>
        </>
    );
};