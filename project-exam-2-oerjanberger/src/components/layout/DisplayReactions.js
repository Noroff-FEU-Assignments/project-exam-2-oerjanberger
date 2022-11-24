import { useState, useEffect } from "react"
import Reactions from "./Reactions"

export default function DisplayReactions(props) {
    const [showReactions, setShowReactions] = useState([])

    useEffect(() => {
        setShowReactions(props.props)
    }, [])

    if (props.props.length === 0) {
        return (
            <>
                <div className="postCard__reactionsContainer" >
                    <p className="number">0</p>
                    <p>Reactions</p>
                </div>
            </>
        )
    } else {

        return (
            <>
                <div className="postCard__reactionsContainer__with__symbols">
                    <p>Reactions</p>
                    <div className="specificPost_symbolContainer">
                        {showReactions.map(function (reaction) {
                            const { symbol, count, postId } = reaction;
                            return <Reactions key={symbol} id={postId} symbol={symbol} count={count} />
                        })}
                    </div>
                </div>
            </>
        )
    }
}