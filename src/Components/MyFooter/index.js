import React from 'react';
import mediaLinks from './mediaLinks';
import resume from '../../Components/assets/Jake Lyell Computer Science CV v5.pdf';

import "./FooterImgs.css"

const mailme = () => {
    if (typeof window !== 'undefined') {
        window.location.href="mailto:me@jakelyell.dev";
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
                        me@jakelyell.dev
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
                    <a href={resume} download="Jake Lyell Computer Science Resume">Download my resume here!</a>
                </div>
            </footer>
        </>
    );
};
    
export default MyFooter;