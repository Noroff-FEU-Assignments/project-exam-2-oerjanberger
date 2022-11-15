import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export default function FollowersProfileCard({ name, avatar }) {
    const avatarAltText = "this is the avatar image of " + name

    return (
        <Card className="profileCard profileCard__following">
            <Link to={`/profiles/${name}`} className="profileCard__container">
                <div className="profileCard__imgContainer">
                    <div className="avatar__img__border profileCard__avatar__border">
                        <img src={avatar === null ? "/images/defaultImages/default_avatar_img.jpg" : avatar} className="nav__icon avatar__img__small" alt={avatarAltText} />
                    </div>
                </div>
                <Card.Body>
                    <div className="profileCard__profile__container">
                        <Card.Title>{name}</Card.Title>
                    </div>
                </Card.Body>
            </Link>
        </Card>
    );
};

FollowersProfileCard.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
};