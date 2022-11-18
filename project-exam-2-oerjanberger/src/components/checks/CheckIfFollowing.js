import { useState, useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import useAxios from "../hooks/useAxios";


export default function CheckIfFollowing() {
    const [auth] = useContext(AuthContext);
    const http = useAxios();

    useEffect(() => {
        async function checkUserFollowing() {
            const userFollowingUrl = `social/profiles/${auth.name}?_following=true`;
            const profilesUrl = `social/profiles`;
            try {
                const userFollowing = await http.get(userFollowingUrl);
                const profiles = await http.get(profilesUrl);
                const profileData = profiles.data;
                const followingData = userFollowing.data.following;
                console.log(followingData)
                let profileNames = [];
                let followingNames = [];

                followingData.forEach(function (obj) {
                    followingNames.push(obj["name"]);

                });
                console.log(followingNames)

                profileData.forEach(function (obj) {
                    profileNames.push(obj["name"]);
                });
            } catch (error) {
                console.log(error);
            };
        }
        checkUserFollowing();
    }, []);
};
