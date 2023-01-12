import React, { useEffect, useState } from "react"; 
import HomeAboutUs from "./HomeAboutUs";
import HomeContact from "./HomeContact";
import { HomeFooter } from "./HomeFooter";
import HomeFourSteps from "./HomeFourSteps";
import HomeHeader from "./HomeHeader";
import HomeWhoWeHelp from "./HomeWhoWeHelp";
import arrow from "../assets/Antu_arrow-up.svg";
import * as Scroll from 'react-scroll';

    
export function Home() {
    let [show, setShow] = useState(false);
    let [height, setHeight] = useState(window.scrollY);
    let scroller = Scroll.scroller;


    const updateArrow = () => {
        setHeight(window.scrollY);
    }

    const showHideArrow = () => {
        if(height > 108) {
            setShow(true);
        } else {
            setShow(false);
        }
    }
    
    useEffect(() => {
        window.addEventListener("scroll", updateArrow);
        showHideArrow();
    }, [height]);


const moveUp = () => {
    scroller.scrollTo('root', {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 0
    });
  };



    return (
       <div className="content">
            <HomeHeader />
            <HomeFourSteps />
            <HomeAboutUs />
            <HomeWhoWeHelp />
            <HomeContact />
            <HomeFooter />
            <img
            src={arrow}
            onClick={moveUp}
            className={show ? "arrow-icon" : "hide"} />
            
        </div>
    )
}

export default Home;