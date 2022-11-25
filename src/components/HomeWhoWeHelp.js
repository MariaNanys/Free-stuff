import React from "react";
import { FundationsAndOrganizations } from "./FundationsAndOrganizations";

export function HomeWhoWeHelp() {
    return (
        <div className="home_who_we_help">
            <h2>Who do we helping?</h2>
            <div className="home_who_we_help-content">
                <FundationsAndOrganizations />
            </div>
            
        </div>
    )
}

export default HomeWhoWeHelp;