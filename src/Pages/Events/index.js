
import React from 'react';
import Event from '../../Components/Event';
import TradingTeamProjectStart from "../../Components/assets//events//TradingTeamProjectStart.jpg"

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
                    <Event title="Trading Team 2022 - Project Initiation Semester 1"
                        image={TradingTeamProjectStart}
                        date="16th of March 2022"
                        desc="The trading team met up for their introductory meeting to talk about the project for the semester. It was a very interesting meeting organised and run by QFin's Director of Trading, Jake Lyell. It introduced the concept of Mean Reversion to the traders and familiarised them with Jake's custom back-testing framework.

                    They were then split up into their respective teams and assigned team leaders. Each team will compete to produce the best quantitative trading algorithm and accompanying report for the semester."
                        host="Jake Lyell"
                        sponsor="Optiver"
                        attendees="10"
                        linkedin="https://www.linkedin.com/posts/qfin-uwa_trading-team-project-activity-6911923365452656640-rQ0E?utm_source=linkedin_share&utm_medium=member_desktop_web"
                        facebook="https://www.facebook.com/QFinUWA/posts/386535556807406" />
                </div>
            </div>
            <hr className="Section-separator"></hr>

        </>)
};

export default Events;