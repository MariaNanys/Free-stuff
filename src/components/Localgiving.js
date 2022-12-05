import React from "react";
import { useState } from "react";
import localgivingList from "../data/localgiving-list";
import { Pagination } from 'semantic-ui-react'

export function Localgiving(active) {
    const localgivingPerPage = 3;
    const [pageNumberLocal, setPageNumberLocal] = useState(1);

    function changePage(page) {
        setPageNumberLocal(page.activePage);
    }

    const displayLocal = localgivingList.slice((pageNumberLocal - 1) * localgivingPerPage, pageNumberLocal * localgivingPerPage).map((localgiving) => {
            return (
            <li key={localgiving.id} className="localgiving_section">
                <div className="localgiving_title_mission">
                    <h3>{localgiving.name}</h3>
                    <span>{localgiving.mission}</span> 
                </div>
                <div className="localgiving_items">
                    <span>{localgiving.items}</span>
                </div>
            </li>)
    });
    
    return (
        <div className={active.active===3 ? 'localgiving_content' : 'localgiving_none'}>
            <ul className="localgiving-list">
                {displayLocal}
            </ul>
            {localgivingList.length > 3
            ?
            <Pagination
                defaultActivePage={1}
                pointing
                secondary
                totalPages={Math.ceil(localgivingList.length/localgivingPerPage)}
                onPageChange={(e, page) => changePage(page)}
            />
            :
            <div></div>}
            
        </div>
    )
}