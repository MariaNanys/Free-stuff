import React from "react";
import { useState } from "react";
import organizationsList from "../data/organizations-list";
import { Pagination } from 'semantic-ui-react'

export function Organizations(active) {
    const organizationPerPage = 3;
    const [pageNumberOrg, setPageNumberOrg] = useState(1);
    function changePage(page) {
        setPageNumberOrg(page.activePage);
    }

    const displayOrg = organizationsList.slice((pageNumberOrg - 1) * organizationPerPage, pageNumberOrg * organizationPerPage).map((organization) => {
            return (
            <li key={organization.id} className="organizations_section">
                <div className="organizations_title_mission">
                    <h3>{organization.name}</h3>
                    <span>{organization.mission}</span> 
                </div>
                <div className="organizations_items">
                    <span>{organization.items}</span>
                </div>
            </li>)
    });
    
    return (
        <div className={active.active===2 ? 'organizations_content' : 'organizations_none'}>
            <ul className="organizations-list">
                {displayOrg}
            </ul>
            <Pagination
                defaultActivePage={1}
                pointing
                secondary
                totalPages={Math.ceil(organizationsList.length/organizationPerPage)}
                onPageChange={(e, page) => changePage(page)}
            />
        </div>
    )
}