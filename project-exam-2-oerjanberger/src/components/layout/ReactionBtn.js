import PropTypes from "prop-types";
import { useState } from "react";
import useAxios from "../hooks/useAxios";
import { BsHandThumbsUpFill } from "react-icons/bs";
import Emoji from "./Emoji";

export default function ReactionBtn(props) {
    const [showEmojis, setShowEmojis] = useState(false);
    const [checked, setChecked] = useState(false);
    const [error, setError] = useState(null);
    const http = useAxios();
    console.log(props)

    // async function reactWithEmoji(checkbox) {
    //     const followUserUrl = `social/profiles/${props.id}/react/`;
    //     if (checkbox) {
    //         try {
    //             await http.put(followUserUrl);
    //             setLabel(<FiCheckCircle />)

    //         } catch (error) {
    //             console.log(error);
    //             setError("There seems to be a problem with following this profile")
    //         };

    //         if (error) {
    //             <Alert variant="danger">{error}</Alert>
    //         }
    //     }
    // };
    return (
        <>
            <div className="specificPost__interactBtn" onClick={() => setShowEmojis(true)}>
                <img src="/images/logo//logo_main.png" alt="react logo, react to the post" className="logo__btn" /><BsHandThumbsUpFill className="icon__thumbsUp" />
                {showEmojis && (
                    <div className="emoji__container">
                        <label for="😀">😀</label>
                        <input
                            className="mb-2 emoji__btn"
                            id="😀"
                            type="checkbox"
                            checked={checked}
                            value="😀"
                            onChange={(e) => {
                                setChecked(e.currentTarget.checked);
                            }}>
                        </input>
                    </div>
                )}
            </div>

        </>
    );
};

ReactionBtn.propTypes = {
    props: PropTypes.array,
};