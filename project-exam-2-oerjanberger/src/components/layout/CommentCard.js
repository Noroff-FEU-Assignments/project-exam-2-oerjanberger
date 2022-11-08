import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';

export default function CommentCard({ id, body, created, owner }) {
    return (
        <Card className="commentCard">
            <Card.Body>
                <div className="commentCard__infoContainer">
                    <Card.Title>{owner}</Card.Title>
                    <p>{created}</p>
                </div>
                <Card.Text>{body}</Card.Text>
            </Card.Body>
        </Card>
    );
};

CommentCard.propTypes = {
    id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
};

