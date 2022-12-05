import React from "react";
import { Button} from 'semantic-ui-react';

export function HomeFourSteps() {
    return (
        <div className="home_four_steps">
            <div className="home_four_steps-title">
               <h2>How to donate?</h2>
                <p>Four steps to get rid of Your unwanted stuff.</p> 
            </div>
             <div className="home_steps">
                <ul className="home_steps-list">
                    <li className="home_steps-list-item">
                        <span className="item_title first_step">Select item</span>
                        <p>clothes, toys, equipment and others</p>
                    </li>
                    <li className="home_steps-list-item">
                        <span className="item_title second_step">Pack item</span>
                        <p>use trush bags or boxes</p>
                    </li>
                    <li className="home_steps-list-item">
                        <span className="item_title third_step">Decide to who donate</span>
                        <p>select trusted place</p>
                    </li>
                    <li className="home_steps-list-item">
                        <span className="item_title fourth_step">Select delivery</span>
                        <p>method of transferring items</p>
                    </li>
                </ul>
            </div>
            <Button color='olive' className="home_steps-btn-start">
                Donate stuff
            </Button>
        </div>
    )
}

export default HomeFourSteps;