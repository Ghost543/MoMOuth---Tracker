import React from 'react';
import ListBar from "../components/list_bar";
import "./sites_connected_to.css"

const SitesConnectedTo:React.FC = () => {
    return (
        <div className="sites">
            <p className="sites-title">Sites connected</p>
            <div className="wrapper">
                <ListBar />
                <ListBar />
                <ListBar />
            </div>
        </div>
    );
};

export default SitesConnectedTo;