import React from 'react';
import BlogPost from '../../Components/BlogPost';
import Widget from '../../Components/Widget';

import RESISTANCE from '../../Components/assets/projects/Resistance.png';

const Blog = () => {
    return (
        <>
            <div className="blog-page" id='Blog'>
                <h1 className="title">What I've been up to recently</h1>
                <div className="widget-container">
                    <div className="blog-column">
                        <BlogPost
                            title="Accepted my first Software Engineering role"
                            image={RESISTANCE}
                            date="2020-01-01"
                            desc1="testhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"
                            desc2=""
                            desc3="" />
                        </div>
                    <div className="widget-column">
                        <Widget
                            title="Currently Learning"
                            desc1=  <ul>
                                        <li>Back-end Web Development</li>
                                        <li>Java Web Frameworks</li>
                                        <li>Kotlin</li>
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