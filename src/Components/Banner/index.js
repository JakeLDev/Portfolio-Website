import React from 'react';

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
                    <a href="#bannerEnd" id="scroll-btn-header">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                    </div>  
            </div>
            <div id="bannerEnd"></div>
        </>
    );
};

export default Banner;
