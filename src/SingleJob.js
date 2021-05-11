import React from "react";
import as from "./images/account.svg";
import "./Joblist.css";


const SingleJob = ({ job }) => {
    const {  company, id, featured, position,postedAt, contract, location, level, role, languages, logo  } = job;
    console.log(logo);
    return (
        <div className="job-container">
            <div className="left-side" key={id}>
                <div>
                <img src={as} className="img-logo"  alt={company}></img>
                </div>
                <div className="left-right">
                <div className="split split-up">
                    <h2>{company}</h2>
                    <p className="highlight">{job.new ? "NEW!" : "NEW!"}</p>
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
                <div className="form-split">
                    <div className="up-right">
                    <button>{level}</button>
                    <button>{role}</button>
                    </div>
                    <div className="up-bottom">
                        {languages.map((language) => {
                            return(
                                <button>{language}</button>
                            );
                        })}
                    </div>
                </div>
            </div>

        </div>
    );
};


export default SingleJob;