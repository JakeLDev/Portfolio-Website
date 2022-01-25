import React from 'react';

const Event = (children) => {
    return (
        <>
            <div className="Event">
                <h2 className="Event-header">{children.title}</h2>
                <img className="Event-image" src={children.image} alt={children.title} />
                <p className="Event-desc"> <b>Description</b>: {children.desc}</p>
                <p className="Event-tools"> <b>Technologies</b>: {children.tools}</p>
                <p className="Event-repo-link"> <b>Repository</b>: <a href={children.repolink} target="_blank">{children.repolink}</a>{children.repo}</p>
            </div>
        </>
    );
};

export default Event;