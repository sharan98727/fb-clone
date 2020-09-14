import { Avatar } from "@material-ui/core";
import React from "react";
import "./sidebarrow.css";

function Sidebarrow({src,Icon,title}){
    return(
      <div className="sidebarRow">
          {/* the below 2 lines can be used based on what you are passing if src then2nd line otherwise 1st icon */}
          {Icon && <Icon/>}
          {src && <Avatar src={src}/>}
          
         <h4>{title}</h4>
      </div>
    )
}

export default Sidebarrow;