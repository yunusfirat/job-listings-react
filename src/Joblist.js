import React from "react";
import SingleJob from "./SingleJob";
import { useGlobalContext } from "./Context";
const Joblist = () => {
    const { jobData } = useGlobalContext();
    return (
        <div className="joblist">
            {jobData.map((job) => {
                return (
                    <SingleJob job={job}/>
                );
            })}
        </div>
    );
};


export default Joblist;