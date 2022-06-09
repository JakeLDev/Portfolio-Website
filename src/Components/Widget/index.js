import React from 'react';
import {
    FaLinkedin,
    FaFacebook,
} from 'react-icons/fa';

const Widget = (children) => {
    return (
        <>
            <div className="BlogPost">
                <h2 className="BlogPost-header">{children.title}</h2>
                {children.date &&
                    <p className="BlogPost-date">{children.date}</p>
                }
                {children.image &&
                    <img className="BlogPost-image" src={children.image} alt={children.title} />
                }
                {children.desc1 &&
                    <p className="BlogPost-desc"> {children.desc1}</p>
                }
                {children.desc2 &&
                    <p className="BlogPost-desc"> {children.desc2}</p>
                }
                {children.desc3 &&
                    <p className="BlogPost-desc"> {children.desc3}</p>
                }
                {children.desc4 &&
                    <p className="BlogPost-desc"> {children.desc4}</p>
                }
                {children.facebook &&
                    <a href={children.facebook}
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaFacebook className='contact-icon' />
                    </a>
                }
                {children.linkedin &&
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

export default Widget;