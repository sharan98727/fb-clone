import { Button } from '@material-ui/core';
import React from 'react'
import { actionTypes } from '../../reducer';
import { useStateValue } from '../../StateProvider';
import "./login.css";
import {auth,provider} from "/home/sharan/Desktop/fbclone/src/firebase.js"


function Login() {
   const [state,dispatch] = useStateValue();
    const signIn = () =>{

        auth.signInWithPopup(provider)
        .then(result =>{
            console.log(result);
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })
        })
        .catch(error => alert(error.message));

    }
    return (
        <div className="login">
           <div className="login__logo">
              <img src="https://en.facebookbrand.com/wp-content/uploads/2019/06/f_logo_RGB-Blue_512.png"
               alt=""
               />
              <img src="https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png"
                alt=""
               />
           </div>
           <Button type="submit" onClick={signIn} >
               Sign In
           </Button>
        </div>
    )
}

export default Login

