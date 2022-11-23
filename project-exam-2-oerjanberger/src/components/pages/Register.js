import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import Heading from "../layout/Heading";
import PreAuthBackground from "../layout/PreAuthBackground";
import RegisterForm from "../forms/RegisterForm";


export default function Register() {
    return (
        <>
            <Helmet>
                <title>Register</title>
                <meta
                    name="description"
                    content="Come join us and your fellow students. Register with your noroff email account"
                />;
            </Helmet>
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