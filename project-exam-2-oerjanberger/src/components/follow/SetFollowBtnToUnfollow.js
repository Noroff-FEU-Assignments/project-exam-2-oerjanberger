import PropTypes from "prop-types";
import { FiCheckCircle } from "react-icons/fi";
import { useState } from "react";
import useAxios from "../hooks/useAxios";
import Alert from "react-bootstrap/Alert";

export default async function SetFollowBtnToUnfollow(props) {
    const [error, setError] = useState(null);
    const http = useAxios();
    const unFollowUserUrl = `social/profiles/${props.name}/unfollow`;
    let followStatus = <FiCheckCircle />
    try {
        await http.put(unFollowUserUrl);
        return followStatus = "Follow"
    } catch (error) {
        console.log(error);
        setError("There seems to be a problem with unfollowing this profile")
    };
    if (error) {
        <Alert variant="danger">{error}</Alert>
    };
    return followStatus
};

SetFollowBtnToUnfollow.propTypes = {
    name: PropTypes.string.isRequired,
};