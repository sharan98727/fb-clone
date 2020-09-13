import React from "react";
import "./feed.css";
import Messagesender from "./Messagesender";
import Post from "./Post";
import StoryReel from "./storyreel";

function Feed(){

    return(
        <div className="feed">
         <StoryReel/>
         <Messagesender/>
         <Post 
         profilePic="https://scontent.fhyd6-1.fna.fbcdn.net/v/l/t1.0-9/32087058_1103437736460944_5234750219614158848_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=rFl3wQVtpL4AX9QYvkw&_nc_ht=scontent.fhyd6-1.fna&oh=539d2c280f04fea42a3557f3bc1554d1&oe=5F813B3C"
         message="wow this works"
         timestamp="time"
         username="sharan"
         image="https://www.insidesport.co/wp-content/uploads/2020/08/up-open-3.jpg"
         />
         <Post/>
         <Post/>
        </div>
    )

}

export default Feed;