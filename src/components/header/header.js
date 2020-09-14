import React from "react";
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import MovieIcon from '@material-ui/icons/Movie';
import StorefrontIcon from '@material-ui/icons/Storefront';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from "../../StateProvider";
function Header(){

    const [{user},dispatch] = useStateValue();
  
    return(
        <div className="header">
            <div className="header__left">
                
                <img 
                src="https://i.redd.it/vij7d3bfz5a51.png" 
                alt = ""
                />
                <div className="header__input">
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook"></input>
                </div>
            </div>

            <div className="header__center">
                <div className="header__options
                header__option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header__options">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header__options">
                    <MovieIcon fontSize="large" />
                </div>
                <div className="header__options">
                    <StorefrontIcon fontSize="large" />
                </div>
                <div className="header__options">
                    <PeopleAltIcon fontSize="large" />
                </div>
              

            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL}/>
                    <h3>{user.displayName}</h3>
                </div>
              
                    <IconButton>
                      <AddIcon/>
                    </IconButton>
               
               
                    <IconButton>
                      <ForumIcon/>
                    </IconButton>
                
                    <IconButton>
                      <NotificationsActiveIcon/>
                    </IconButton>
                
                    <IconButton>
                      <ExpandMoreIcon/>
                    </IconButton>
                

            </div>
         
            
        </div>
                
        
       
    )

}

export default Header;