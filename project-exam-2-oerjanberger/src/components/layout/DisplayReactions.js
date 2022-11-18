export default function DisplayReactions(props) {
    let allReactions = <div className="postCard__reactionsContainer">
        <p className="number">0</p>
        <p>Reactions</p>
    </div>;

    if (props.length >= 1) {
        let symbols = ""
        props.forEach(setSymbols);
        function setSymbols(props) {
            symbols += props.count + props.symbol + "|";
        }

        allReactions = <div className="postCard__reactionsContainer__with__symbols">
            <p>Reactions</p>
            <div className="postCard__symbolContainer">
                <p className="number reactionSymbols">{symbols}</p>
            </div>
        </div>
        return allReactions
    }
    return allReactions
};