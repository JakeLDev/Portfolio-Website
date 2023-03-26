import React from 'react';
import JobProject from './JobProject';

const Job = (children) => {
    return (
        <>
            <div id="Job" className='p-3 inline-block h-auto max-w-95/100'>
                {children.logo &&
                    <img id="Job-logo" className="float-left inline-block object-cover pr-2" src={children.logo} alt={children.title} width="100px" height="100px"/>
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
                <div id='Job-projects' className="block pl-8">
                    {children.projecttitle1 &&
                        <JobProject title={children.projecttitle1} desc={children.projectdesc1} image={children.projectimage1} repo={children.projectrepo1} repolink={children.projectrepolink1} tech={children.projecttech1}/>
                    }
                    {children.projecttitle2 &&
                        <JobProject title={children.projecttitle2} desc={children.projectdesc2} image={children.projectimage2} repo={children.projectrepo2} repolink={children.projectrepolink2} tech={children.projecttech2}/>
                    }
                    {children.projecttitle3 &&
                        <JobProject title={children.projecttitle3} desc={children.projectdesc3} image={children.projectimage3} repo={children.projectrepo3} repolink={children.projectrepolink3} tech={children.projecttech3}/>
                    }
                </div>
            </div>
        </>
    );
};

export default Job;