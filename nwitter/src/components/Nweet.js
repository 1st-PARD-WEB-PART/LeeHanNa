import React from "react";

const Nweet = ({nweetObj, isOwner}) => (
    <div>
        <h4>{nweetObj.text}</h4>
        {isOwner && ( //넘겨받은 isOwner이 true이면 삭제, 수정 가능
            <>
            <button>Delete Nweet</button>
            <button>Edit Nweet</button>
            </>
        )}
    </div>
)

export default Nweet;