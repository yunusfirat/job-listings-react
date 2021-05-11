import React from "react";
import "./Joblist.css";
const SingleJob = ({ job }) => {
    const {  company, id, featured, position,postedAt, contract, location  } = job;
    return (
        <div className="job-container">
            <div className="left-side" key={id}>
                <div>
                <img src={job.Logo} alt={company}style={{ maxwidth:"100%" }}></img>
                </div>
                <div className="left-left">
                <div className="split">
                    <h2>{company}</h2>
                    <p className="highlight">{job.new ? "NEW!" : null}</p>
                    <p className="promoted">{featured ? "FEATURED" : "FEATURED"}</p>
                </div>
                <div><h3 className="position">{position}</h3></div>
                <div className="split">
                    <p className="age">{postedAt}</p>
                    <p className="time">{contract}</p>
                    <p className="location">{location}</p>
                </div>
                </div>
            </div>
            <div className="right-side">
        <h1>sadsad</h1>
            </div>

        </div>
    );
};


export default SingleJob;