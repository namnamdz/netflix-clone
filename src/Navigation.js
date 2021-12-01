import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import './css/navigation.css';
function Navigation() {
    const [show, handleShow] = useState(false);

    const trasitionNavBar = () =>{
        if(window.scrollY > 100){
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    }
    useEffect(() =>{
        window.addEventListener("scroll",trasitionNavBar)
        return ()=>{
            window.removeEventListener("scroll",trasitionNavBar);
        }
    }, [])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__content">
                <img
                    className="logo" 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" 
                    alt="logo"
                />
                <img
                    className="nav__avatar"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="avatar" 
                    onClick={() => firebase.auth().signOut}
                    />
            </div>
        </div>
    )
}

export default Navigation
