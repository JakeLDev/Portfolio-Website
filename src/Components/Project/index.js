import React from 'react';

const Project = (children) => {
    return (
        <>
            <div id="Project" className="p-1 inline-block h-auto max-lg:block max-lg:content-center">
                {children.title &&
                    <h2 id="Project-header" className="mt-0 pb-1 font-semibold text-xl max-lg:text-center">{children.title}</h2>
                }
                {children.image &&
                    <img id="Project-image" className="lg:float-left lg:inline-block w-auto h-auto p-2 max-w-md max-lg:w-full max-lg:m-auto" src={children.image} alt={children.title} />
                }
                {children.desc &&
                    <p id="Project-desc" className="pl-8 pb-1"> <b>Description</b>: {children.desc}</p>
                }
                {children.tools &&
                    <p id="Project-tools" className="pl-8 pb-1"> <b>Technologies</b>: {children.tools}</p>
                }
                {(children.repolink || children.repo) && 
                    <p id="Project-repo-link" className="pl-8 pb-1"> <b>Repository</b>: <a href={children.repolink} target="_blank" rel="noreferrer">{children.repolink}</a>{children.repo}</p>
                }
                {children.demolink &&
                    <p id="Project-demo-link" className="pl-8 pb-1"> <b>Link</b>: <a href={children.demolink} target="_blank" rel="noreferrer">{children.demolink}</a></p>
                }
            </div>
        </>
    );
};

export default Project;