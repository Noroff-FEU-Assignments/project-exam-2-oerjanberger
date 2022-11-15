import PropTypes from "prop-types";
import { FiCheckCircle } from "react-icons/fi";
import { useState } from "react";
import useAxios from "../hooks/useAxios";
import Alert from "react-bootstrap/Alert";
import ToggleButton from "react-bootstrap/ToggleButton"

export default function FollowBtn(name) {
    const [label, setLabel] = useState("Follow");
    const [checked, setChecked] = useState(false);
    const [error, setError] = useState(null);

    const http = useAxios();

    async function followUser(checkbox, id) {
        const followUserUrl = `social/profiles/${id}/follow`;
        const unFollowUserUrl = `social/profiles/${id}/unfollow`;
        console.log(checkbox, id)
        if (checkbox) {
            try {
                await http.put(followUserUrl);
                setLabel(<FiCheckCircle />)

            } catch (error) {
                console.log(error);
                setError("There seems to be a problem with following this profile")
            };

            if (error) {
                <Alert variant="danger">{error}</Alert>
            }
        } else if (checkbox === false) {
            try {
                await http.put(unFollowUserUrl);
                setLabel("Follow")
            } catch (error) {
                console.log(error);
                setError("There seems to be a problem with unfollowing this profile")
            };

            if (error) {
                <Alert variant="danger">{error}</Alert>
            }
        }
    }
    return (
        <ToggleButton
            className="mb-2 primary__btn secondary__btn follow__btn"
            id={name}
            type="checkbox"
            variant="outline-primary"
            checked={checked}
            value={name}
            onChange={(e) => {
                setChecked(e.currentTarget.checked);
                followUser(e.currentTarget.checked, e.currentTarget.id);
            }}>
            {label}
        </ToggleButton>
    )
}

FollowBtn.propTypes = {
    name: PropTypes.string.isRequired,
};