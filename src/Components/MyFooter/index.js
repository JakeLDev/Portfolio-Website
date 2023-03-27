import React from 'react';
import mediaLinks from './mediaLinks';
import resume from '../../Components/assets/Jake Lyell Computer Science Resume v4.pdf';

import "./FooterImgs.css"

const MyFooter = () => {
    return (
        <>
            <footer id="footer" className='mt-auto bottom-0 p-2'>
                <div id="footer-content" className='relative m-auto max-w-7xl w-[70%]'>
                    <h2 id="footer-header" className='font-semibold text-2xl py-2'>Contact Me</h2>
                    <p>
                        {/* <button onClick={mailme}>Email Me</button>  <br/> */}
                        <a href="mailto:me@jakelyell.dev" target="_blank" rel="noreferrer" className='underline'>me@jakelyell.dev</a>
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
                    <a href={resume} className='underline' download="Jake Lyell Computer Science Resume.pdf">Download my resume here!</a>
                </div>
                <div>
                <p className="text-center mx-1">Website created with ♥ (and React.js)</p>
                </div>
            </footer>
        </>
    );
};
    
export default MyFooter;