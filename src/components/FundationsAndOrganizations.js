import React from "react";
import { Button } from 'semantic-ui-react';
import { Fundations } from "./Fundations";
import { Organizations } from "./Organizations";
import { useState } from "react";
import { Localgiving } from "./Localgiving";

export function FundationsAndOrganizations() {
    const [active, setActive] = useState(1);

    function activation(val) {
        setActive(val);
    }

    return (
        <div className="fundationsAndOrganizations_content">
            <Button.Group>
                <Button
                className={active ===1 ? "focus_btn" : ''}
                onClick={() => {activation(1)}}
                >
                Fundations
                </Button>
                <Button
                className={active ===2 ? "focus_btn" : ''}
                onClick={() => {activation(2)}}
                >
                Organizations
                </Button>
                <Button
                className={active ===3 ? "focus_btn" : ''}
                onClick={() => {activation(3)}}
                >
                Localgiving
                </Button>
            </Button.Group>
            <div className="fundationsAndOrganizations-description">
                <span>In our database you will find a list of verified foundations, organizations and localgivings with which we cooperate. You can check what they do, who they help and what they need.</span>
            </div>
            <Fundations active={active} />
            <Organizations active={active} />
            <Localgiving active={active} />
        </div>
    )
}