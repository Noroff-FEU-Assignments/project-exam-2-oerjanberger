import PropTypes from "prop-types";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Modal from 'react-bootstrap/Modal';
import { AiOutlineClose } from "react-icons/ai";

export default function ConfirmLogout(props) {
    const [auth, setAuth] = useContext(AuthContext);
    const navigate = useNavigate();

    function logout() {
        console.log(props.show);
        setAuth(null);
        navigate("/", { replace: true });
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="log out"
            centered
            className="logoutModal"
        >
            <AiOutlineClose onClick={props.onHide} className="closeBtn" />
            <Modal.Header >
                <Modal.Title >
                    Are you sure you want to log out?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="logoutModal__btnContainer">
                    <button type="button" className="primary__btn" onClick={logout} >Log out</button>
                    <button type="button" className="primary__btn secondary__btn" onClick={props.onHide}>Cancel</button>
                </div>
            </Modal.Body>
        </Modal>
    );
};

ConfirmLogout.propTypes = {
    props: PropTypes.object,
};


