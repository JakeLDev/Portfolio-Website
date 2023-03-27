import React from 'react';

const JobProject = (children) => {
    return (
        <>
            <div id="JobProject" className='p-3 inline-block h-auto max-w-95/100'>
                {children.title &&
                    <h2 id="JobProject-title" className="mt-0 pb-1 font-semibold text-xl">{children.title}</h2>
                }
                {children.desc &&
                    <p id="JobProject-desc" className="py-2"> <b></b>{children.desc}</p>
                }
                {children.image &&
                    <img id="JobProject-image" className='clear-both block m-auto pt-2 pr-2 w-3/4' src={children.image} alt={children.title} width="100px" height="100px"/>
                }
                {children.repo && 
                    <p id="JobProject-repo"> <b>Repository</b>: <a href={children.repo} className='underline' target="_blank" rel="noreferrer">{children.repo}</a></p>
                }
                {children.tech &&
                    <p id="JobProject-tech"> <b>Technologies</b>: {children.tech}</p>
                }
            </div>
        </>
    );
};

export default JobProject;