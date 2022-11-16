import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import useAxios from "../hooks/useAxios";
import moment from "moment";
import Heading from "../layout/Heading";
import { MdEdit } from "react-icons/md"
import UsersPostCard from "../layout/UsersPostCard";
import EditImagesModal from "../modals/EditImagesModal";
import CreatePostBtn from "../layout/CreatePostBtn";
import { Link } from "react-router-dom";
import LargeImage from "../modals/LargeImage";

export default function GetUsersProfile() {
    const [profile, setProfile] = useState([]);
    const [posts, setPosts] = useState([]);
    const [profileName, setProfileName] = useState(null);
    const [avatar, setAvatar] = useState(null);
    const [banner, setBanner] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modalShow, setModalShow] = useState(false);
    const [imageModalShow, setImageModalShow] = useState(false);

    let { name } = useParams();
    const profileUrl = `social/profiles/${name}?_following=true&_followers=true`
    const postsUrl = `social/profiles/${name}/posts`

    const http = useAxios();

    useEffect(() => {
        async function getUsersProfileData() {
            try {
                const Profile = await http.get(profileUrl);
                const Posts = await http.get(postsUrl);

                setProfile(Profile.data);
                setPosts(Posts.data);
            } catch (error) {
                console.log(error);
                setError("There seems to be a problem with showing your profile")
            } finally {
                setLoading(false)
            };
        };
        getUsersProfileData();
    }, []);

    if (loading) {
        return <Spinner animation="border" variant="secondary" />
    };

    if (error) {
        <Alert variant="danger">{error}</Alert>
    };

    const bannerAltText = `This is the banner image for ${profile.banner}`;
    const avatarAltText = `This is the avatar image for ${profile.avatar}`;
    return (
        <>
            <div className="specificPost__bannerContainer">
                <img src={profile.banner === null ? "/images/defaultImages/default_banner_img.jpg" : profile.banner} className="specificProfile__bannerImg" alt={bannerAltText} />
            </div>
            <Container className="main__container specificProfile__page">
                <div className="specificProfile__profileContainer">
                    <div className="avatar__img__border profileCard__avatar__border specificProfile__avatar__border" onClick={() => setImageModalShow(true)} >
                        <img src={profile.avatar === null ? "/images/defaultImages/default_avatar_img.jpg" : profile.avatar} className="nav__icon avatar__img__small specificProfile__avatar__img" alt={avatarAltText} />
                    </div>
                    <div className="specificPost__headingContainer">
                        <Heading size="1" content={profile.name} />
                        <button type="button" className="primary__btn edit__Btn" name={profile.name} avatar={profile.avatar} banner={profile.banner}
                            onClick={() => {
                                setModalShow(true)
                                setProfileName(name)
                                setAvatar(avatar)
                                setBanner(banner)
                            }}>
                            <MdEdit /> Edit images</button>
                    </div>
                </div>
                <EditImagesModal
                    name={profileName}
                    avatar={avatar}
                    banner={banner}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                <div className="specificPost__profileInfo__Container">
                    <Link to={`/profiles/${name}/followers`} className="profileCard__followersContainer">
                        <p className="number">{!profile._count.followers ? 0 : profile._count.followers}</p>
                        <p>Followers</p>
                    </Link>
                    <Link to={`/profiles/${name}/following`} className="profileCard__postsContainer">
                        <p className="number">{!profile._count.following ? 0 : profile._count.following}</p>
                        <p>Following</p>
                    </Link>
                </div>
                <div className="profileCard__postsContainer">
                    <Heading size="2" content="Posts" />
                    <p className="number posts__number">{!profile._count.posts ? 0 : profile._count.posts}</p>
                </div>
                <Container className="posts__container">
                    {posts.map(function (post) {
                        const { id, title, created, updated, media, body, _count } = post;
                        return <UsersPostCard key={id} id={id} avatar={profile.avatar === null ? "/images/defaultImages/default_avatar_img.jpg" : profile.avatar} name={profile.name} title={title} created={moment(created).format('lll')} updated={moment(updated).calendar()} image={media} body={body} reactions={_count.reactions} comments={_count.comments} />
                    })}
                </Container>
                <CreatePostBtn />
            </Container>
            <LargeImage
                show={imageModalShow}
                onHide={() => setImageModalShow(false)}
                image={profile.avatar === null ? "/images/defaultImages/default_avatar_img.jpg" : profile.avatar}
            />
        </>
    );
};