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

    function setNewUserUrl() {
        if (auth !== null) {
            navigate("userProfile/" + auth.name, { replace: true })

            function setAvatarActive() {
                const avatarBorder = document.querySelector(".avatar__img__border");
                const { pathname } = document.location;

                if (pathname === "/userProfile/" + auth.name) {
                    avatarBorder.classList.add("activeAvatar")
                } else {
                    avatarBorder.classList.remove("activeAvatar")
                }
            }
            setAvatarActive()
        }
    }

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
                            <NavLink to="postList"><img src="/images/logo/logo_main.png" alt="React logo Home button" className="home__logo" /></NavLink>
                            <div className="nav__icons__container">
                                <NavLink to="postList"><HiHome className="nav__icon icon__home" aria-label="post list" /></NavLink>
                                <NavLink to="profileList"><FaUsers className="nav__icon icon__profiles" aria-label="profile list" /></NavLink>
                                <div className="avatar__img__border" onClick={setNewUserUrl}>
                                    <img src={auth.avatar === null ? "/images/defaultImages/default_avatar_img.jpg" : auth.avatar} alt="my profile" className="nav__icon avatar__img__small" />
                                </div>
                                <RiLogoutBoxLine onClick={logout} className="nav__icon icon__logoutBtn" aria-label="logout" />
                            </div>
                        </>
                    ) : (
                        <NavLink to="/" end><img src="/images/logo/logo_main.png" alt="React logo, Home button" className="home__logo" /></NavLink>
                    )}
                </Nav>
            </Container>
        </Navbar >
    );
};

Navigation.propTypes = {
    avatar: PropTypes.string,
};