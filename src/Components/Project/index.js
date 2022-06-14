import React from 'react';

const Project = (children) => {
    return (
        <>
            <div className="Project">
                {children.title &&
                    <h2 className="Project-header">{children.title}</h2>
                }
                {children.image &&
                    <img className="Project-image" src={children.image} alt={children.title} />
                }
                {children.desc &&
                    <p className="Project-desc"> <b>Description</b>: {children.desc}</p>
                }
                {children.tools &&
                    <p className="Project-tools"> <b>Technologies</b>: {children.tools}</p>
                }
                {(children.repolink || children.repo) && 
                    <p className="Project-repo-link"> <b>Repository</b>: <a href={children.repolink} target="_blank" rel="noreferrer">{children.repolink}</a>{children.repo}</p>
                }
                {children.demolink &&
                    <p className="Project-demo-link"> <b>Link</b>: <a href={children.demolink} target="_blank" rel="noreferrer">{children.demolink}</a></p>
                }
            </div>
        </>
    );
};

export default Project;