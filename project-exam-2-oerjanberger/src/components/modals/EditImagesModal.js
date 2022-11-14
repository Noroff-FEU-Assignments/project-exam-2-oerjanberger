import Modal from 'react-bootstrap/Modal';
import EditImages from "../forms/EditImages";

export default function EditImagesModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit images
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <EditImages name={props.name} avatar={props.avatar} banner={props.banner} />
            </Modal.Body>
        </Modal>
    )
}