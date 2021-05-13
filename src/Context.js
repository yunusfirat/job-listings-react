import React, { useContext, useState } from "react";
import Data from "./data.json";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [jobData, setJobData ] = useState(Data);
    const [searchArray, setSearchArray] = useState([]);
    console.log(searchArray);
    return (
        <AppContext.Provider value={{
            jobData,
            setJobData,
            searchArray,
            setSearchArray,

        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () =>{
    return useContext(AppContext);
};

export { AppContext, AppProvider };