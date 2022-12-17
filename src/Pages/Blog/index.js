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
                        {/* <BlogPost
                            title="Created a Casual Pay Calculator"
                            desc1="I Developed a website to help estimate the paycheck received by a Casual employee during a pay period. A user can input their hours worked, or allow the site to read their Google Calendar, and the site will estimate what your expected pay will be."
                            date="10th of October 2022" /> */}
                        <BlogPost
                            title="Firebase Authentication"
                            desc1="I've started learning and implementing Firebase Authentication for the Coders For Causes Project. Working on allowing users to log into the application using Google and Facebook accounts. Learning how to protect routes with authentication in the Next.js router is turning out to be a bit harder than when using react-router."
                            date="5th of July 2022" />
                        <BlogPost
                            title="Coders For Causes Winter Project"
                            desc1="This week I began working on the UWA Coders for Causes Club's Winter Project. The team I'm on is creating a mobile-first web application called POOPs (Pets Of Older Persons), an application similar to Uber for elderly people to find volunteers nearby to walk and/or feed their pets! The tech stack includes React, Next.js, Firebase and Tailwind CSS."
                            date="2nd of July 2022" />
                        <BlogPost
                            title="Researching shifting this site from GitHub Pages to AWS"
                            date="17th of June 2022"
                            desc1="Started looking into moving the hosting of this site to improve performance of the animated background. Sometimes I experience lag and low framerate with the animation, and I think this may be due to GitHub Pages' free hosting, I'm hoping an upgrade to AWS hosting would allow for better performance."
                            />
                        <BlogPost
                            title="Began work on my Hygiene Twitter Bot"
                            date="14th of June 2022"
                            desc1="Started to learn how to use Twitter's API and some AWS serverless functions to create a bot that tweets reminders about common hygiene processes at set intervals, for example, changing your bedsheets every two weeks, or changing your toothbrush every 3 months. It's target audience is people who are living alone for the first time and can be forgetful. The hope is that people will turn on tweet notifications for the bot and will be kept up to date on when to perform hygienic practices."
                            />
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
                                        <li>Java for Back-end development</li>
                                        <li>AWS Deployment</li>
                                        <li>Industry Standard Database Techniques</li>
                                    </ul>}
                            desc2=""
                            desc3="" />
                        <Widget
                            title="Projects In Progress"
                            desc1={<ul>
                                    <li>Advent of Code 2022</li>
                                    <li>Additions to this website</li>
                                    <li>Twitter Hygiene Bot (AWS Serverless Functions)</li>
                                </ul>}
                            desc2=""
                            desc3="" />
                            <Widget
                                title="Planned Future Projects"
                                desc1={<ul>
                                        <li>Back-end Web Development Project</li>
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