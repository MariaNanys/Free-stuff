import React from "react";
import { useState } from "react";
import fundationsList from "../data/fundations-list";
import { Pagination } from 'semantic-ui-react'

export function Fundations(active) {
    const fundationPerPage = 3;
    const [pageNumberFund, setPageNumberFund] = useState(1);
    function changePage(page) {
        setPageNumberFund(page.activePage);
    }

    const displayFund = fundationsList.slice((pageNumberFund - 1) * fundationPerPage,pageNumberFund * fundationPerPage).map((fundation) => {
            return (
            <li key={fundation.id} className="fundations_section">
                <div className="fundations_title_mission">
                    <h3>{fundation.name}</h3>
                    <span>{fundation.mission}</span> 
                </div>
                <div className="fundations_items">
                    <span>{fundation.items}</span>
                </div>
            </li>)
    });
    
    return (
        <div className={active.active===1 ? 'fundations_content' : 'fundations_none'}>
            <ul className="fundations-list">
                {displayFund}
            </ul>
            <Pagination
                defaultActivePage={1}
                pointing
                secondary
                totalPages={Math.ceil(fundationsList.length/fundationPerPage)}
                onPageChange={(e, page) => changePage(page)}
            />
        </div>
    )
}