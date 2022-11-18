import React from "react";
import { Button} from 'semantic-ui-react'


export function HomeHeader() {
    return (
        <div className="home_header">
            <div className="home_header-title-btn">
                <div className="home_header-image"></div>
                <h1>Let's start helping!</h1>
                <h2>From quality clothing and accessories to collectables, tech or jewellery you can post your donations for free.</h2>
                <Button color='olive' className="home_header-btn-start">
                    Let's do it!
                </Button>
                
            </div>
        </div>
    )
}

export default HomeHeader;