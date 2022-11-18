import PropTypes from "prop-types";
import { useState } from "react";
import useAxios from "../hooks/useAxios";
import Alert from "react-bootstrap/Alert";

export default function FollowBtn(props) {
    const [error, setError] = useState(null);
    const http = useAxios();

    async function followUser() {
        const followUserUrl = `social/profiles/${props.name}/follow`;

        try {
            await http.put(followUserUrl);

        } catch (error) {
            console.log(error);
            setError("There seems to be a problem with following this profile")
        };
        if (error) {
            <Alert variant="danger">{error}</Alert>
        }
    };
    return (
        <button
            className="primary__btn secondary__btn follow__btn"
            id={props.name}
            type="button"
            value={props.name}
            onClick={followUser}>
            Follow
        </button>
    );
};

FollowBtn.propTypes = {
    name: PropTypes.string.isRequired,
};