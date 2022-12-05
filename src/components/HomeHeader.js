import React from "react";
import { Button} from 'semantic-ui-react';
import pic from "../assets/Myproject.png"
import LogIn from "./LogIn";

export function HomeHeader() {
    return (
        <div className="home_header">
            <div className="home_header-title-btn">
                <img src={pic} className="home_header-image"/>
                
                <h1>Let's start helping!</h1>
                <h2>From quality clothing and accessories to collectables, tech or jewellery you can post your donations for free.</h2>
                <Button color='olive' className="home_header-btn-start" href='/login'>
                    Let's do it!
                </Button>
                
            </div>
        </div>
    )
}

export default HomeHeader;