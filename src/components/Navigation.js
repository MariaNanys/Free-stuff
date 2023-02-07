import React, { useState , useEffect } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import picLogOut from '../assets/logout.png';

export function Navigation() {
    let scroller = Scroll.scroller;
    const navigate = useNavigate();
    let savedLoginAndPassword = JSON.parse(localStorage.getItem("arrayUserLoged"));
    let savedName = '';
    if(savedLoginAndPassword) {
      savedName = savedLoginAndPassword;
    }
    let [userLogedIn, setUserLogedIn] = useState(false);

  const scrollTo = async (name) => {
    await navigate('/');
    await scroller.scrollTo(name, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 0
    });
  };

 useEffect (() => {
    if (savedLoginAndPassword) {
      setUserLogedIn(true);
    }
 }, savedLoginAndPassword)

 const removeData = (() => {
  localStorage.removeItem("arrayUserLoged");
  setUserLogedIn(false);
 });
  

    return (
        <div className="Navigation">
            <div className="Navigation-login">
                <NavLink to="/login"  className={userLogedIn ? "hide login" : "login"}>Log In</NavLink>
                <NavLink to='/registration' className={userLogedIn ? "hide registration" : "registration"}>Registration</NavLink>
                <div className={userLogedIn ? "welcome_user" : "hide"}>
                  <span>Hi, {savedName}</span>
                  <a href="/" onClick={removeData}><img src={picLogOut} className="picLogOut"/></a>
                </div>
            </div>
            <div className="Navigation-home-page">
                <a onClick={() => scrollTo('home')}>Start</a>
                <a onClick={() => scrollTo('home_four_steps')}>Add stuffs</a>
                <a onClick={() => scrollTo('home_about_us')}>About Us</a>
                <a onClick={() => scrollTo('home_who_we_help')}>Foundations & Organizations</a>
                <a onClick={() => scrollTo('home_contact')}>Contact Us</a>
            </div>
        </div>
    )
}

export default Navigation;