import PropTypes from "prop-types";
import { useState, useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import useAxios from "../hooks/useAxios";
import FollowBtn from "./FollowBtn";
import UnFollowBtn from "./UnFollowBtn";


export default function CheckIfFollowing({ props }) {
    const [auth] = useContext(AuthContext);
    const [following, setFollowing] = useState([]);
    const http = useAxios();

    useEffect(() => {
        async function checkUserFollowing() {
            const userFollowingUrl = `social/profiles/${auth.name}?_following=true`;

            try {
                const userFollowing = await http.get(userFollowingUrl);


                const followingData = userFollowing.data.following;


                followingData.forEach(function (obj) {

                });


                return following
            } catch (error) {
                console.log(error);
            };
        }
        checkUserFollowing();
    }, []);

    // if (following) {
    //     return <FollowBtn name={props.name} />
    // }
    // if (!following) {
    //     return <UnFollowBtn name={props.name} />
    // }
};

CheckIfFollowing.propTypes = {
    name: PropTypes.string.isRequired,
};