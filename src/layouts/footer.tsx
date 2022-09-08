import React from 'react';

import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-right">
                <h3 className="footer-right--logo"><a href="/">MoMOuth-Tracker</a></h3>
                <p className="footer-right--copyright">&copy; Copyright 2022</p>
            </div>
            <div className="footer-left">
                <h4 className="footer-left--desc">MoMOuth - Tracker is a way that enables a MoMOuth user to track his/her transactions across the different online transaction platforms.</h4>
            </div>

        </div>
    );
};

export default Footer;