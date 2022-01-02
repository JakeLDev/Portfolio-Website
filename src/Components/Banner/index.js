import React from 'react';

const Banner = () => {
    return (
        <>
            <div className="banner">
                <div className="banner-content">
                    <h1 className="banner-title">
                        yooooo its jayke
                    </h1>
                </div>
            </div>
            <div class="scroll-btn-container">
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
