import { useState } from "react";
import { BsHandThumbsUpFill } from "react-icons/bs";
import EmojiModal from "../modals/EmojiModal";


export default function ReactionBtn() {
    const [showEmojis, setShowEmojis] = useState(false);

    return (
        <>
            <div className="specificPost__interactBtn" onClick={() => setShowEmojis(true)} >
                <img src="/images/logo//logo_main.png" alt="react logo, react to the post" className="logo__btn" /><BsHandThumbsUpFill className="icon__thumbsUp" />
            </div>
            <EmojiModal
                show={showEmojis}
                onHide={() => setShowEmojis(false)}
            />
        </>
    );
};
