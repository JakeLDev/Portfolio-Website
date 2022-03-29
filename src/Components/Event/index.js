import React from 'react';
import {
    FaLinkedin,
    FaFacebook,
} from 'react-icons/fa';

const Event = (children) => {
    return (
        <>
            {/* <div className="Event">
                <h2 className="Event-header">{children.title}</h2>
                <img className="Event-image" src={children.image} alt={children.title} />
                <p className="Event-desc"> <b>Description</b>: {children.desc}</p>
                <p className="Event-tools"> <b>Technologies</b>: {children.tools}</p>
                <p className='Event-attendees'> <b>Attendees</b>: {children.attendees}</p>
                <p className="Event-repo-link"> <b>Repository</b>: <a href={children.repolink} target="_blank" rel="noreferrer">{children.repolink}</a>{children.repo}</p>
            </div> */}
            <div className="Event">
                <h2 className="Event-header">{children.title}</h2>
                {children.image.length > 0 &&
                    <img className="Event-image" src={children.image} alt={children.title} />
                }
                <p className="Event-date"><b>Date</b>: {children.date}</p>
                <p className="Event-desc"> <b>Description</b>: {children.desc}</p>
                {children.host.length > 0 &&
                    <p className="Event-host"> <b>Host</b>: {children.host}</p>
                }
                {children.attendees.length > 0 &&
                    <p className="Event-attendees"><b>Attendees</b>: {children.attendees}</p>
                }
                {children.facebook.length > 0 &&
                    <a href={children.facebook}
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaFacebook className='contact-icon' />
                    </a>
                }
                {children.linkedin.length > 0 &&
                    <a href={children.linkedin}
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaLinkedin className='contact-icon' />
                    </a>
                }
            </div>
        </>
    );
};

export default Event;