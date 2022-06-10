import React from 'react';
import BlogPost from '../../Components/BlogPost';
import Widget from '../../Components/Widget';
import BlogNavbar from '../../Components/BlogNavbar';

import ATLASSIAN from '../../Components/assets/blog/Atlassian.png';
import FinalMeanReversionAlgorithm from '../../Components/assets/blog/FinalMeanReversionAlgorithm.png';

const Blog = () => {
    return (
        <>
            <BlogNavbar />
            <div className="blog-page" id='Blog'>
                <h1 className="title">What I've been up to recently</h1>
                <div className="widget-container">
                    <div className="blog-column">
                        <BlogPost
                            title="Finished my last university exam (hopefully)"
                            date="3rd of June 2022"
                            desc1="After trudging through a difficult project and a long week of hard studying, I've managed to complete my final exam for my degree (as long as I pass). I feel confident in my submission and am hoping to receive a high grade for the unit, following on from my 90% in the Mid-Semester Exam. Given that I pass, I will be attending my Graduation Ceremony at the end of July."
                            />
                        <BlogPost
                            title="Created a Mean Reversion algorithm to trade stocks algorithmically"
                            image={FinalMeanReversionAlgorithm}
                            date="3rd of May 2022"
                            desc1="After 6 weeks of work, my team and I completed the Semester 1 Project for QFin UWA's Trading Team. Our goal was to develop and optimize an algorithmic trading strategy that utilizes the theory of Mean Reversion. Our process involved iterative development in which we repeatedly backtested our algorithm on different stock price data, making improvements along the way. Our parameter sweeping methodology yielded significant improvements over our initial iterations, allowing for fine tuning of parameters." 
                            />
                        <BlogPost
                            title="Accepted my first Software Engineering role"
                            image={ATLASSIAN}
                            date="25th of April 2022"
                            desc1="Today I received a call from my recruiter at Atlassian, offering me a Graduate Software Engineering role to start in 2023. I was extremely happy, as I'd just missed out on Amazon at the final round of the hiring process."
                            desc2="The start time of this role would allow me to complete my degree in June of 2022, and have some time off to work on my own projects and learn new technologies. Hopefully (covid-permitting) I can also spend some time travelling before starting a full-time role."
                            />
                        </div>
                    <div className="widget-column">
                        <Widget
                            title="Currently Learning"
                            desc1=  {<ul>
                                        <li>Back-end Web Development</li>
                                        <li>Java Web Frameworks</li>
                                        <li>Kotlin</li>
                                        <li>AWS Deployment</li>
                                        <li>Common Web APIs (Twitter, Weather, etc)</li>
                                    </ul>}
                            desc2=""
                            desc3="" />
                        <Widget
                            title="Projects In Progress"
                            desc1={<ul>
                                    <li>Markdown Editor</li>
                                    <li>Additions to this Website</li>
                                </ul>}
                            desc2=""
                            desc3="" />
                            <Widget
                                title="Planned Future Projects"
                                desc1={<ul>
                                        <li>Twitter Hygiene Bot</li>
                                        <li>Large scale web application with friends</li>
                                        <li>Flight Price Tracker</li>
                                    </ul>}
                                />
                        <Widget
                            title="My GitHub Activity"
                            embedlink={<a href='https://github.com/JakeLDev' target={"_blank"} rel={"noreferrer"}><img align="center" src="http://github-readme-streak-stats.herokuapp.com?user=JakeLDev&theme=material-palenight&date_format=j%20M%5B%20Y%5D" alt="GitHub Stats" style={{display: "block", width: "100%", margin:"10px auto"}}/></a>}

                            />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;