import React from "react";
import "./feed.css";
import Messagesender from "./Messagesender";
import StoryReel from "./storyreel";

function Feed(){

    return(
        <div className="feed">
         <StoryReel/>
         <Messagesender/>
        </div>
    )

}

export default Feed;