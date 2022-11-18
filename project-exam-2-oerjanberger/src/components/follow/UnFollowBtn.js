import PropTypes from "prop-types";
import { useState } from "react";
import useAxios from "../hooks/useAxios";
import Alert from "react-bootstrap/Alert";
import { FiCheckCircle } from "react-icons/fi";

export default function UnFollowBtn(props) {
    const [error, setError] = useState(null);
    const http = useAxios();

    async function unFollowUser() {
        const unFollowUserUrl = `social/profiles/${props.name}/unfollow`;

        try {
            await http.put(unFollowUserUrl);
        } catch (error) {
            console.log(error);
            setError("There seems to be a problem with unfollowing this profile")
        };
        if (error) {
            <Alert variant="danger">{error}</Alert>
        };
    };
    return (
        <button
            className="primary__btn secondary__btn follow__btn"
            id={props.name}
            type="button"
            value={props.name}
            onClick={unFollowUser}>
            <FiCheckCircle />
        </button>
    );
};

UnFollowBtn.propTypes = {
    name: PropTypes.string.isRequired,
};