import React from 'react';
import BlogPost from '../../Components/BlogPost';
import Widget from '../../Components/Widget';

import RESISTANCE from '../../Components/assets/projects/Resistance.png';
import ATLASSIAN from '../../Components/assets/blog/Atlassian.png';

const Blog = () => {
    return (
        <>
            <div className="blog-page" id='Blog'>
                <h1 className="title">What I've been up to recently</h1>
                <div className="widget-container">
                    <div className="blog-column">
                        <BlogPost
                            title="Accepted my first Software Engineering role"
                            image={ATLASSIAN}
                            date="25th of April 2022"
                            desc1="Today I received a call from my recruiter at Atlassian, offering me a Graduate Software Engineering role to start in 2023. I was extremely happy, as I'd just missed out on Amazon at the final round of the hiring process."
                            desc2="The start time of this role would allow me to complete my degree in June of 2022, and have some time off to work on my own projects and learn new technologies. Hopefully (covid-permitting) I can also spend some time travelling before starting a full-time role."
                            desc3="" />
                        </div>
                    <div className="widget-column">
                        <Widget
                            title="Currently Learning"
                            desc1=  <ul>
                                        <li>Back-end Web Development</li>
                                        <li>Java Web Frameworks</li>
                                        <li>Kotlin</li>
                                        <li>AWS Deployment</li>
                                    </ul>
                            desc2=""
                            desc3="" />
                        <Widget
                            title="Projects In Progress"
                            desc1=<ul>
                                    <li>Markdown Editor</li>
                                    <li>Additions to this Website</li>
                                    <li>Kotlin</li>
                                </ul>
                            desc2=""
                            desc3="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;