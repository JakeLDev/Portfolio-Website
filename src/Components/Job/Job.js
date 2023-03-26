import React from 'react';

const Job = (children) => {
    return (
        <>
            <div id="Job" className='p-3 inline-block h-auto max-w-95/100'>
                {children.logo &&
                    <img id="Job-logo" className="float-left inline-block object-cover pr-2" src={children.image} alt={children.title} width="100px" height="100px"/>
                }
                {children.title &&
                    <h2 id="Job-title" className="mt-0 pb-1 font-semibold text-xl">{children.title}</h2>
                }
                {children.daterange &&
                    <p id="Job-daterange" className="py-2"> <b>Description</b>: {children.daterange}</p>
                }
                {children.desc &&
                    <p id="Job-desc" className="py-2"> <b>Technologies</b>: {children.desc}</p>
                }
                {children.projects && 
                    <p id="Job-repo-link" className="pl-8 pb-1"> <b>Repository</b>: <a href={children.repolink} target="_blank" rel="noreferrer">{children.repolink}</a>{children.repo}</p>
                }
                {children.demolink &&
                    <p id="Job-demo-link" className="pl-8 pb-1"> <b>Link</b>: <a href={children.demolink} target="_blank" rel="noreferrer">{children.demolink}</a></p>
                }
            </div>
        </>
    );
};

export default Job;