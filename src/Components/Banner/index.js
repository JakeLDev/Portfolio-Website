import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';


const Banner = (children) => {
    return (
        <>
            <div className="banner">
                <div className="banner-content">
                    <h1 className="banner-title">
                        {children.title}
                    </h1>
                </div>
            </div>
            <div className="scroll-btn-container">
                    <div>
                    <Link to='/#bannerEnd' id="scroll-btn-header">
                        <span></span>
                        <span></span>
                        <span></span>
                    </Link>
                    </div>  
            </div>
            <div id="bannerEnd"></div>
        </>
    );
};

export default Banner;
