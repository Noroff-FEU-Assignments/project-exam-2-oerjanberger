import Modal from 'react-bootstrap/Modal';
import EditPost from "../forms/EditPost";

export default function EditPostModal(props) {
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
                <EditPost id={props.id} title={props.title} body={props.body} image={props.image} />
            </Modal.Body>
        </Modal>
    )
}