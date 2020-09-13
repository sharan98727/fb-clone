import React from "react";
import Story from "./Story";
import "./storyreel.css";

function StoryReel(){
    return(
        <div className="StoryReel">
            <Story  
            image="https://www.insidesport.co/wp-content/uploads/2020/08/up-open-3.jpg"
            profilesrc="https://scontent.fhyd6-1.fna.fbcdn.net/v/l/t1.0-9/32087058_1103437736460944_5234750219614158848_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=rFl3wQVtpL4AX9QYvkw&_nc_ht=scontent.fhyd6-1.fna&oh=539d2c280f04fea42a3557f3bc1554d1&oe=5F813B3C"
            title="us open "
            /> 
            <Story  
            image="data:image/jpeg;base64,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"
            profilesrc="https://scontent.fhyd6-1.fna.fbcdn.net/v/t1.0-9/20046654_141590809755274_6026569626297498547_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=-40J1rEjuX4AX9SviJl&_nc_ht=scontent.fhyd6-1.fna&oh=8d61e963eccb2a27171657a71268b4b9&oe=5F828FBB"
            title= "AO 2020"
            /> 
            <Story  
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDqN59ANZbldn1Yc4iNlU8SUnOfuW_0kdRIw&usqp=CAU"
            profilesrc="https://scontent.fhyd6-1.fna.fbcdn.net/v/t1.0-9/35196991_2181337525423374_6330899789940523008_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=9uVzLiY83xgAX8YoclC&_nc_ht=scontent.fhyd6-1.fna&oh=6689e792241ec69ebd8a4891cf938d1e&oe=5F82D043"
            title= "FO 2020"
            /> 
            <Story  
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDqN59ANZbldn1Yc4iNlU8SUnOfuW_0kdRIw&usqp=CAU"
            profilesrc="https://scontent.fhyd6-1.fna.fbcdn.net/v/t1.0-9/35196991_2181337525423374_6330899789940523008_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=9uVzLiY83xgAX8YoclC&_nc_ht=scontent.fhyd6-1.fna&oh=6689e792241ec69ebd8a4891cf938d1e&oe=5F82D043"
            title= "FO 2020"
            /> 
             <Story  
            image="https://www.insidesport.co/wp-content/uploads/2020/08/up-open-3.jpg"
            profilesrc="https://scontent.fhyd6-1.fna.fbcdn.net/v/l/t1.0-9/32087058_1103437736460944_5234750219614158848_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=rFl3wQVtpL4AX9QYvkw&_nc_ht=scontent.fhyd6-1.fna&oh=539d2c280f04fea42a3557f3bc1554d1&oe=5F813B3C"
            title="us open "
            />

        </div>
    )
}

export default StoryReel;