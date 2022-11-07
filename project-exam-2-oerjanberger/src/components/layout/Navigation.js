import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import PropTypes from "prop-types";
import { NavLink, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { HiHome } from "react-icons/hi";
import { RiLogoutBoxLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";

export default function Navigation() {
    const [auth, setAuth] = useContext(AuthContext);
    const navigate = useNavigate();

    function logout() {
        setAuth(null);
        navigate("/", { replace: true });
    }

    return (
        <Navbar expand="lg" >
            <Container>
                <Nav className="me-auto navLinks">
                    {auth ? (
                        <>
                            <NavLink to="postList"><img src="/images/logo//Logo_main.svg" alt="React logo Home button" className="home__logo" /></NavLink>
                            <div className="nav__icons__container">
                                <NavLink to="postList"><HiHome className="nav__icon icon__home" /></NavLink>
                                <NavLink to="profileList"><FaUsers className="nav__icon icon__profiles" /></NavLink>
                                <NavLink to="postList">
                                    <div className="avatar__img__border">
                                        <img src={auth.avatar === null ? "/images/defaultImages/default_avatar_img.jpg" : auth.avatar} alt="my profile button" className="nav__icon avatar__img__small" />
                                    </div>
                                </NavLink>
                                <RiLogoutBoxLine onClick={logout} className="nav__icon icon__logoutBtn" />
                            </div>
                        </>
                    ) : (
                        <NavLink to="/" end><img src="/images/logo//Logo_main.svg" alt="React logo, Home button" className="home__logo" /></NavLink>
                    )}
                </Nav>
            </Container>
        </Navbar>
    );
};

Navigation.propTypes = {
    avatar: PropTypes.string,
};




