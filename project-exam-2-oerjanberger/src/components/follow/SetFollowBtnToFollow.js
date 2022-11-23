import PropTypes from "prop-types";
import { FiCheckCircle } from "react-icons/fi";
import { useState } from "react";
import useAxios from "../hooks/useAxios";
import Alert from "react-bootstrap/Alert";

export default async function SetFollowBtnToFollow(props) {
    const [error, setError] = useState(null);
    const http = useAxios();
    const followUserUrl = `social/profiles/${props.name}/follow`;
    let followStatus = "Follow"
    try {
        await http.put(followUserUrl);
        return followStatus = <FiCheckCircle />

    } catch (error) {
        console.log(error);
        setError("There seems to be a problem with following this profile")
    };

    if (error) {
        <Alert variant="danger">{error}</Alert>
    }
    return followStatus
};

SetFollowBtnToFollow.propTypes = {
    name: PropTypes.string.isRequired,
};