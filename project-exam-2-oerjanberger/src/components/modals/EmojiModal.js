import PropTypes from "prop-types";
import Modal from 'react-bootstrap/Modal';
import EmojiTwo from "../emojis/EmojiTwo";


export default function EmojiModal(props) {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="log out"
            centered
            className="emoji__modal"
        >
            <Modal.Body>
                <div className="Emoji__container" >
                    <EmojiTwo />
                </div>

            </Modal.Body>

        </Modal >
    );
};

EmojiModal.propTypes = {
    props: PropTypes.object,
};

