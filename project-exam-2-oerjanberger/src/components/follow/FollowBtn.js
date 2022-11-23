import { useState, Component } from "react";
import useAxios from "../hooks/useAxios";
import SetFollowBtnToFollow from "./SetFollowBtnToFollow";
import SetFollowBtnToUnfollow from "./SetFollowBtnToUnfollow";
import GetFollowing from "./GetFollowing";
import { FiCheckCircle } from "react-icons/fi";
import { Alert } from "react-bootstrap";



export default class FollowBtn extends Component {
    componentDidMount() {
        const followBtn = document.querySelector("#follow__btn");
        async function SetFollowBtnToFollow(props) {
            const [error, setError] = useState(null);
            const http = useAxios();
            const followUserUrl = `social/profiles/${props.name}/follow`;
            followBtn.innerHtml = "Follow"
            try {
                await http.put(followUserUrl);
                return followBtn.innerHTML = <FiCheckCircle />

            } catch (error) {
                console.log(error);
                setError("There seems to be a problem with following this profile")
            };

            if (error) {
                <Alert variant="danger">{error}</Alert>
            }

            return followBtn
        };
        SetFollowBtnToFollow()
    }
    render() {
        return (
            <button className="primary__btn secondary__btn follow__btn" type="button" id="follow__btn">Follow</button>
        );
    }
};