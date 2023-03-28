import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';


const Banner = (children) => {
    return (
        <>
            <div id="Banner" className="w-full" style={{"minHeight":"calc(91vh)"}}>
                <div id="banner-content" style={{"position":"absolute","top":"50%","left":"50%","transform": "translate(-50%, -50%)"}}>
                    <h1 id="banner-title" className='select-none text-center font-bold text-white m-0 inline-block text-8xl max-sm:text-5xl' style={{"font-family": "IBM Plex Mono"}}>
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
