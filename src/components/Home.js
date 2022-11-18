import React from "react"; 
import HomeAboutUs from "./HomeAboutUs";
import HomeContact from "./HomeContact";
import { HomeFooter } from "./HomeFooter";
import HomeFourSteps from "./HomeFourSteps";
import HomeHeader from "./HomeHeader";
import HomeWhoWeHelp from "./HomeWhoWeHelp";

export function Home() {
    return (
       <>
            <HomeHeader />
            <HomeFourSteps />
            <HomeAboutUs />
            <HomeWhoWeHelp />
            <HomeContact />
            <HomeFooter />
        </>
    )
}

export default Home;