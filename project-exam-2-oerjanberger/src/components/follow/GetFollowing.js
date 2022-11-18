import useAxios from "../hooks/useAxios";

export default async function GetFollowing(props) {
    const http = useAxios();
    const userFollowingUrl = `social/profiles/${props.name}?_following=true`;
    let following = {}
    try {
        const userFollowing = await http.get(userFollowingUrl);
        following = (userFollowing.data.following);
        console.log(following)
        return following
    } catch (error) {
        console.log(error);
    }
    return following
};