import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Messagesender.css";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function Messagesender() {

    const handlesubmit = (e) =>{
         e.preventDefault();
    }
    return (
        <div className="messagesender">
           <div className="messagesender__top">
               <Avatar/>
               <form>
                   <input placeholder="What's on your mind" className="messagesender__input"/>
                   <input placeholder="image url (optional)"/>
                   <button onClick={handlesubmit} type="submit">
                   </button>
               </form>

           </div>
           <div className="messagesender__bottom">
               <div className="messagesender__option">
                  <VideocamIcon style={{color:"red"}}/>
                  <h3>Live Video</h3>
               </div>

               <div className="messagesender__option">
                  <PhotoLibraryIcon style={{color:"green"}}/>
                  <h3>Photo/Video</h3>
               </div>

               <div className="messagesender__option">
                  <InsertEmoticonIcon style={{color:"yellow"}}/>
                  <h3>Feeling/Activity</h3>
               </div>

           </div>
        </div>
    )
}

export default Messagesender
