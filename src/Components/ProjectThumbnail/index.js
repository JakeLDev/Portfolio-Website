import React from 'react';

const ProjectThumbnail = (children) => {
    return (
        <>
            <div className="ProjectThumbnail">
                {children.title &&
                    <h2 className="ProjectThumbnail-header">{children.title}</h2>
                }
                {children.image &&
                    <img className="ProjectThumbnail-image" src={children.image} alt={children.title} />
                }
            </div>
        </>
    );
};

export default ProjectThumbnail;