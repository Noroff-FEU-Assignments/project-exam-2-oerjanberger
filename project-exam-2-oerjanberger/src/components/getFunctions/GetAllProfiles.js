import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import useAxios from "../hooks/useAxios";
import ProfileCard from "../layout/ProfileCard";

export default function GetAllProfiles() {
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const http = useAxios();

    useEffect(() => {
        async function getProfileData() {
            try {
                const response = await http.get("social/profiles");
                setProfiles(response.data)
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
        <Container className="profiles__container">
            {profiles.map(function (profile) {
                const { name, banner, avatar, _count } = profile;
                return <ProfileCard key={name} name={name} banner={banner} avatar={avatar} posts={_count.posts} followers={_count.followers} />
            })}
        </Container>
    );
};