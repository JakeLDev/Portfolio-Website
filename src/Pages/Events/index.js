
import React from 'react';
import Event from '../../Components/Event';
import TradingTeamProjectStart from "../../Components/assets//events//TradingTeamProjectStart.jpg"
import IMCPythonWorkshop from "../../Components/assets//events//IMCPythonWorkshop.jpg"
import PICCOMING from "../../Components/assets/projects/image-coming.png"


import { Fade } from "react-awesome-reveal";

const Events = () => {
    return (
        <>
            <div className="page" id='Events'>
                <h1 className="title">Events</h1>
                <div className="paragraph">
                    <p className="content" style={{ textAlign: "center" }}>Here's some events that I've ran or been heavily involved in running.</p>
                </div>
                <hr className="Sub-separator"></hr>
                <div className='Event-container'>
                <Fade duration={2000} triggerOnce="true">
                        <Event title="QFin x IMC - Trading Team Project Review"
                            image={PICCOMING}
                            date="10th of May 2022"
                            desc="IMC Trading sent out one of their Quant Traders, Leo Li, to review the Trading Teams' algorithms from the semester and gave his feedback. I was meant to present the project and the results to Leo, however unfortunately I fell sick to COVID right before the event. Instead our Vice-President, Kane Alexander filled in and presented my presentation."
                            host="Kane Alexander (fill-in for me)"
                            sponsor="IMC"
                            attendees="Trading Team + Committee"
                            linkedin="dummy link" // TODO
                            facebook="dummy link" /> 
                    </Fade>
                    <Fade duration={2000} triggerOnce="true">
                        <Event title="QFin x IMC - Introduction to Python Workshop"
                            image={IMCPythonWorkshop}
                            date="14th of April 2022"
                            desc="QFin had the pleasure of hosting IMC Trading to run their Python Workshop!
                        This event attracted an impressive turnout for both the beginner and intermediate classes and a lot of attendees benefited from talking with the IMC Trading representatives. It was a great chance to talk to industry professionals and learn more about future career opportunities!"
                            host="IMC Trading"
                            sponsor="IMC"
                            attendees="50"
                            linkedin="https://www.linkedin.com/posts/qfin-uwa_last-night-qfin-had-the-pleasure-of-hosting-activity-6920737179627360256-6R6t?utm_source=linkedin_share&utm_medium=member_desktop_web"
                            facebook="https://www.facebook.com/QFinUWA/posts/407181511409477" />
                    </Fade>
                    <Fade duration={2000} triggerOnce="true">
                        <Event title="QFin - Trading Team 2022 Semester 1 Project Initiation"
                            image={TradingTeamProjectStart}
                            date="16th of March 2022"
                            desc="The trading team met up for their introductory meeting to talk about the project for the semester. It was a very interesting meeting organised and run by me, QFin's Director of Trading. It introduced the concept of Mean Reversion to the traders and familiarised them with my custom back-testing framework.

                    They were then split up into their respective teams and assigned team leaders. Each team will compete to produce the best quantitative trading algorithm and accompanying report for the semester."
                            host="Jake Lyell"
                            sponsor="IMC"
                            attendees="10"
                            linkedin="https://www.linkedin.com/posts/qfin-uwa_trading-team-project-activity-6911923365452656640-rQ0E?utm_source=linkedin_share&utm_medium=member_desktop_web"
                            facebook="https://www.facebook.com/QFinUWA/posts/386535556807406" />
                    </Fade>
                </div>
            </div>
            <hr className="Section-separator"></hr>

        </>)
};

export default Events;