import PropTypes from "prop-types";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { BASE_URL } from "../../constants/Api";
import { FiCheckCircle } from "react-icons/fi";
import useAxios from "../hooks/useAxios";
import Alert from "react-bootstrap/Alert";

export default function FollowingProfileCard({ name, avatar }) {
    const avatarAltText = "this is the avatar image of " + name

    const [error, setError] = useState(null);
    const http = useAxios();


    async function unFollowUser() {
        const followUserUrl = BASE_URL + `social/profiles/${name}/unfollow`;
        const followBtn = document.querySelector("#followBtn")


        try {
            await http.put(followUserUrl);


        } catch (error) {
            console.log(error);
            setError("There seems to be a problem with unfollowing this profile")
        };

        if (error) {
            <Alert variant="danger">Unfortunately an error has occurred: {error}</Alert>
        }
    }


    return (
        <Card className="profileCard profileCard__following">
            <div className="profileCard__container">
                <Link to={`/profiles/${name}`} >
                    <div className="profileCard__imgContainer">
                        <div className="avatar__img__border profileCard__avatar__border">
                            <img src={avatar === null ? "/images/defaultImages/default_avatar_img.jpg" : avatar} className="nav__icon avatar__img__small" alt={avatarAltText} />
                        </div>
                    </div>
                </Link>
                <Card.Body>
                    <div className="profileCard__profile__container">
                        <div className="profileCard__heading__container">
                            <Link to={`/profiles/${name}`} ><Card.Title>{name}</Card.Title></Link>
                            <button type="button" className="primary__btn secondary__btn" id="followBtn" onClick={unFollowUser} ><FiCheckCircle /> </button>
                        </div>
                    </div>
                </Card.Body>
            </div>


        </Card>
    );
};

FollowingProfileCard.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
};