import React from "react";
import "./sidebar.css";
import Sidebarrow from "./sidebarrow";
// import PersonIcon from '@material-ui/icons/Person';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import FlagIcon from '@material-ui/icons/Flag';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ForumIcon from '@material-ui/icons/Forum';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { ExpandMoreOutlined } from "@material-ui/icons";
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from "../../StateProvider";

function Sidebar(){

    const [{user},dispatch] = useStateValue();

    return(
        <div className="sidebar">
            <Sidebarrow  
             src={user.photoURL}
             title={user.displayName}
            />
            <Sidebarrow title="Covid 19info"     Icon={LocalHospitalIcon}/>
            <Sidebarrow title="pages"            Icon={FlagIcon}/>
            <Sidebarrow title="friends"          Icon={PeopleAltIcon}/>
            <Sidebarrow title="Messanger"        Icon={ForumIcon}/>
            <Sidebarrow title="Marketplace"      Icon={StorefrontIcon}/>
            <Sidebarrow title="Videos"           Icon={VideoLibraryIcon}/>
            <Sidebarrow title="FundRaisers"      Icon={ExpandMoreOutlined}/>
            <Sidebarrow title="Events"           Icon={EventAvailableIcon}/>
            <Sidebarrow title="See more"         Icon={ExpandMoreIcon}/>
        </div>
    )

}

export default Sidebar;