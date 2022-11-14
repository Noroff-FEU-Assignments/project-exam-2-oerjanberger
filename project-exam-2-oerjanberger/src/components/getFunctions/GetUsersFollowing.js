import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import useAxios from "../hooks/useAxios";
import FollowingProfileCard from "../layout/FollowingProfileCard";

export default function GetUsersFollowing() {
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const http = useAxios();
    let { name } = useParams();
    const profileUrl = `social/profiles/${name}?_following=true`


    useEffect(() => {
        async function getProfileData() {
            try {
                const response = await http.get(profileUrl);
                console.log(response.data.following)
                setProfiles(response.data.following)
            } catch (error) {
                console.log(error);
                setError(error.toString)
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
                return <FollowingProfileCard key={name} name={name} avatar={avatar} />
            })}
        </Container>
    );
};