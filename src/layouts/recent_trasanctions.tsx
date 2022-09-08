import React from 'react';

import './recent_trasanctions.css'
import RecentBar from "../components/recent_bar";

const RecentTransactions = () => {
    return (
        <>
            <div className="recent">
                <p className="recent-title">Recent transactions</p>
                <ul className="recent-header">
                    <li className="recent-header--heads">Site name</li>
                    <li className="recent-header--heads">Time</li>
                    <li className="recent-header--heads">Date</li>
                    <li className="recent-header--heads">Total Amount</li>
                </ul>
                <div>
                    <RecentBar />
                    <RecentBar />
                    <RecentBar />
                    <RecentBar />
                </div>

            </div>
        </>

    );
};

export default RecentTransactions;