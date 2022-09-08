import React from 'react';
import './recent_bar.css';

const RecentBar = () => {
    return (
        <ul className="recent-bar">
            <li className="recent-bar--item"><a>Site name</a></li>
            <li className="recent-bar--item">12/june/2022</li>
            <li className="recent-bar--item">12:01 pm</li>
            <li className="recent-bar--item"><span>Ugx:</span> 200,000</li>
            {/*<li className="recent-bar--item"></li>*/}
        </ul>
    );
};

export default RecentBar;