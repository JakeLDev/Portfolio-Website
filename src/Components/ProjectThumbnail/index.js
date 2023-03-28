import React from 'react';

const ProjectThumbnail = (children) => {
    return (
        <>
            <div id="project-thumbnail" className="flex justify-center flex-col p-2 text-xl font-semibold">
                {children.title &&
                    <h2 id="project-thumbnail-header" className="text-center pb-2">{children.title}</h2>
                }
                {children.image &&
                    <img id="project-thumbnail-image" className="float-left inline-block w-auto mx-auto h-auto object-cover pr-2 max-w-lg max-md:max-w-full" src={children.image} alt={children.title} />
                }
            </div>
        </>
    );
};

export default ProjectThumbnail;