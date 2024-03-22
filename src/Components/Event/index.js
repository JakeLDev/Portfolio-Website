import React from 'react';
import {
    FaLinkedin,
    FaFacebook,
} from 'react-icons/fa';

const Event = (children) => {
    return (
        <>
            <div id="Event" className="p-1 inline-block h-auto max-w-[95%]">
                <h2 id="Event-header" className='font-semibold text-xl py-2'>{children.title}</h2>
                {children.image.length > 0 &&
                    <img id="Event-image" className="float-left inline-block w-full h-auto object-cover pr-2 pb-2 max-w-lg" src={children.image} alt={children.title} />
                }
                <p id="Event-date"><b>Date</b>: {children.date}</p>
                <p id="Event-desc"> <b>Description</b>: {children.desc}</p>
                {children.host.length > 0 &&
                    <p id="Event-host"> <b>Host/s</b>: {children.host}</p>
                }
                {children.attendees.length > 0 &&
                    <p id="Event-attendees" className='pb-2'><b>Attendees</b>: {children.attendees}</p>
                }
                {children.facebook.length > 0 &&
                    <a href={children.facebook}
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaFacebook className='text-white h-8 w-auto mr-2.5 inline-block' />
                    </a>
                }
                {children.linkedin.length > 0 &&
                    <a href={children.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='inline-block'>
                        <FaLinkedin className='text-white h-8 w-auto mr-2.5 inline-block' />
                    </a>
                }
            </div>
        </>
    );
};

export default Event;