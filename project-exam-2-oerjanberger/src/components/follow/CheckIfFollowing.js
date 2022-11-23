import PropTypes from "prop-types";
import { useState, useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import useAxios from "../hooks/useAxios";
import FollowBtn from "./FollowBtn";
import UnFollowBtn from "./UnFollowBtn";

export default function CheckIfFollowing({ props }) {

    const [following, setFollowing] = useState([]);




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