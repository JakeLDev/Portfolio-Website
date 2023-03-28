import React from 'react';
import {
    FaLinkedin,
    FaFacebook,
} from 'react-icons/fa';

const BlogPost = (children) => {
    return (
        <>
            <div id="BlogPost" className='p-4 inline-block h-auto rounded m-2 w-[95%] bg-neutral-800/80'>
                <div id='BlogPost-content'>
                    <h2 id="BlogPost-header" className='font-semibold text-2xl'>{children.title}</h2>
                    {children.date &&
                        <p id="BlogPost-date" className='text-xs'>{children.date}</p>
                    }
                    {children.image &&
                        <img id="BlogPost-image" className='inline w-full h-auto m-auto object-cover pr-2 pb-2 max-w-lg' src={children.image} alt={children.title} />
                    }
                    {children.desc1 &&
                        <p id="BlogPost-desc" className='mt-2'> {children.desc1}</p>
                    }
                    {children.desc2 &&
                        <p id="BlogPost-desc" className=''> {children.desc2}</p>
                    }
                    {children.desc3 &&
                        <p id="BlogPost-desc" className=''> {children.desc3}</p>
                    }
                    {children.desc4 &&
                        <p id="BlogPost-desc" className=''> {children.desc4}</p>
                    }
                    {children.facebook &&
                        <a href={children.facebook}
                            target="_blank"
                            rel="noopener noreferrer">
                            <FaFacebook className='text-white h-8 w-auto ml-2.5' />
                        </a>
                    }
                    {children.linkedin &&
                        <a href={children.linkedin}
                            target="_blank"
                            rel="noopener noreferrer">
                            <FaLinkedin className='text-white h-8 w-auto ml-2.5' />
                        </a>
                    }
                </div>
            </div>
        </>
    );
};

export default BlogPost;