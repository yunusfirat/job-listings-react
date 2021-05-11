import React from "react";
import { useGlobalContext } from "./Context";
const Joblist = () => {
    const { jobData } = useGlobalContext();
    console.log(jobData);
    return (
        <div>

        </div>
    );
};


export default Joblist;