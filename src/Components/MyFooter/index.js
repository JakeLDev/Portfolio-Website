import React from 'react';
import mediaLinks from './mediaLinks';
import resume from '../../Components/assets/Jake Lyell Computer Science Resume v4.pdf';

import "./FooterImgs.css"

const MyFooter = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <h2 id="footer-header">Contact Me</h2>
                    <p>
                        {/* <button onClick={mailme}>Email Me</button>  <br/> */}
                        <a href="mailto:me@jakelyell.dev" target="_blank" rel="noreferrer">me@jakelyell.dev</a>
                    </p>
                    <div className="footer-icons">
                        {mediaLinks.map((media) => 
                            <a 
                                href={media.href}
                                key={media.id}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <media.Logo
                                    className="link-photos"
                                    id={media?.id}
                                />
                            </a>
                        )}
                    </div>
                    <a href={resume} download="Jake Lyell Computer Science Resume.pdf">Download my resume here!</a>
                </div>
                <div>
                <p className="content" style={{textAlign: "center", margin: "2px 0", }}>Website created with ♥ (and React.js)</p>
                </div>
            </footer>
        </>
    );
};
    
export default MyFooter;