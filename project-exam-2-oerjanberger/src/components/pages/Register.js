import { Container } from "react-bootstrap";
import Heading from "../layout/Heading";
import PreAuthBackground from "../layout/PreAuthBackground";
import RegisterForm from "../forms/RegisterForm";


export default function Register() {
    return (
        <>
            <PreAuthBackground image="/images/backgroundImages/registerPageImage.jpg" />
            <Container className="main__container" >
                <div className="form__background">
                    <Heading size="1" content="Register" />
                    <RegisterForm />
                </div>
            </Container>
        </>
    );
};