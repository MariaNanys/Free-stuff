import React from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import * as Scroll from 'react-scroll';

export function Navigation() {
    let scroller = Scroll.scroller;
    const navigate = useNavigate();

  const scrollTo = async (name) => {
    await navigate('/');
    await scroller.scrollTo(name, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 0
    });
  };
  

    return (
        <div className="Navigation">
            <div className="Navigation-login">
                <NavLink to="/login" className="login">Log In</NavLink>
                <NavLink to='/registration' className="registration">Registration</NavLink>
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