import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import useAxios from "../hooks/useAxios";
import FollowersProfileCard from "../layout/FollowersProfileCard";

export default function GetUsersFollowers() {
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [following, setFollowing] = useState([]);
    const [error, setError] = useState(null);

    const http = useAxios();
    let { name } = useParams();
    const profileUrl = `social/profiles/${name}?_following=true&_followers=true`
    const followingUrl = `social/profiles/${name}?_following=true`

    useEffect(() => {
        async function getProfileData() {
            try {
                const response = await http.get(profileUrl);
                const userFollowing = await http.get(followingUrl);
                const followingData = userFollowing.data.following;
                let followingNames = [];

                followingData.forEach(function (obj) {
                    followingNames.push(obj["name"]);
                });

                setFollowing(followingNames)
                setProfiles(response.data.followers)
            } catch (error) {
                console.log(error);
                setError(`There seems to be a problem with showing ${name} followers`)
            } finally {
                setLoading(false)
            }
        }
        getProfileData()
    }, [])

    if (loading) {
        return <Spinner animation="border" variant="secondary" />
    }

    if (error) {
        <Alert variant="danger">Unfortunately an error has occurred: {error}</Alert>
    }
    return (
        <Container className="followingProfiles__container">
            {profiles.map(function (profile) {
                const { name, avatar } = profile;
                return <FollowersProfileCard key={name} name={name} avatar={avatar} following={following} />
            })}
        </Container>
    );
};