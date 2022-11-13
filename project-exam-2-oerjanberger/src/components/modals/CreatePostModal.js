import Modal from 'react-bootstrap/Modal';
import CreatePost from "../forms/CreatePost";

export default function CreatePostModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create Post
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CreatePost />
            </Modal.Body>
        </Modal>
    )
}