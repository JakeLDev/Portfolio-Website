import React from 'react';
import AboutMe from '../About Me';
import Projects from '../Projects';
import WorkExperience from '../Work';
import Events from '../Events';

import Banner from '../../Components/Banner';

const Master = () => {
    return (
        <>
        <Banner title="Software Engineer" />
        <AboutMe />
        <Projects />
        <WorkExperience />
        <Events />
        
        </>
    );
}

export default Master;