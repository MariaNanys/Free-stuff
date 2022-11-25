import React from "react";
import picture from "../assets/group.jpg"

export function HomeAboutUs() {
    return (
        <div className="home_about_us">
            <div className="home_about_us-content">
                <div className="home_about_us-content-text">
                    <h2>About Us</h2>
                    <p>We collect used items to help people reclaim valuable time and space. We celebrate ecology and change habits.
                    Adopting the code: produce less and use what you have, we take actions that have a real impact on the environment. We keep in mind that behavior and consumer awareness need to change, and we want to offer it in the most accessible way possible.
                    We actually support the values we hold. We help foundations that work for values related to us - openness and ecology.</p>
                </div>
                <div>
                    <img src={picture} />
                </div>  
            </div>  
        </div>
    )
}

export default HomeAboutUs;