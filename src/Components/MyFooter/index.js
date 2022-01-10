import React from 'react';
import mediaLinks from './mediaLinks';

import "./FooterImgs.css"

const mailme = () => {
    if (typeof window !== 'undefined') {
        window.location.href="mailto:jakelyell@iinet.net.au";
    }
}


const MyFooter = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <h2 id="footer-header">Contact Me</h2>
                    <p>
                        <button onClick={mailme}>Email Me</button>  <br/>
                        jakelyell@iinet.net.au
                    </p>
                    <div className="footer-icons">
                        {mediaLinks.map((media) => 
                            <a 
                                href={media.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <media.Logo
                                    className="link-photos"
                                    id={media?.id}
                                />
                            </a>
                        )}
                    </div>
                </div>
            </footer>
        </>
    );
};
    
export default MyFooter;