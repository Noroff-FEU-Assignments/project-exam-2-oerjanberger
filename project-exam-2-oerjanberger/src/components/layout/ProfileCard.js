import PropTypes from "prop-types";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { BASE_URL } from "../../constants/Api";
import { FiCheckCircle } from "react-icons/fi";
import useAxios from "../hooks/useAxios";
import Alert from "react-bootstrap/Alert";

export default function ProfileCard({ name, avatar, banner, posts, followers }) {
    const avatarAltText = "this is the avatar image of " + name
    const bannerAltText = "this is the banner image of " + name

    const [error, setError] = useState(null);
    const http = useAxios();


    async function followUser() {
        const followUserUrl = BASE_URL + `social/profiles/${name}/follow`;
        const followBtn = document.querySelector("#followBtn")


        try {
            await http.put(followUserUrl);
            followBtn.innerHTML = <FiCheckCircle />

        } catch (error) {
            console.log(error);
            setError("There seems to be a problem with following this profile")
        };

        if (error) {
            <Alert variant="danger">Unfortunately an error has occurred: {error}</Alert>
        }
    }


    return (
        <Card className="profileCard">
            <Link to={`/profiles/${name}`} className="profileCard__container">
                <div className="profileCard__imgContainer">
                    <Card.Img variant="left" src={banner === null ? "/images/defaultImages/default_banner_img.jpg" : banner} className="profileCard__banner" alt={bannerAltText} />
                    <div className="avatar__img__border profileCard__avatar__border">
                        <img src={avatar === null ? "/images/defaultImages/default_avatar_img.jpg" : avatar} className="nav__icon avatar__img__small" alt={avatarAltText} />
                    </div>
                </div>
                <Card.Body>
                    <div className="profileCard__profile__container">
                        <div className="profileCard__heading__container">
                            <Card.Title>{name}</Card.Title>
                            <button type="button" className="primary__btn secondary__btn" id="followBtn" onClick={followUser} >Follow</button>
                        </div>
                        <div className="profileCard__profileInfo__Container">
                            <div className="profileCard__followersContainer">
                                <p className="number">{followers}</p>
                                <p>Followers</p>
                            </div>
                            <div className="profileCard__postsContainer">
                                <p className="number">{posts}</p>
                                <p>Posts</p>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Link>
        </Card>
    );
};

ProfileCard.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    banner: PropTypes.string,
    posts: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
};