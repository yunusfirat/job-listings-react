import React, { useContext, useState } from "react";
import Data from "./data.json";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [jobData, setJobData ] = useState(Data);
    console.log(Data);
    return (
        <AppContext.Provider value={{
            jobData,
            setJobData,
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () =>{
    return useContext(AppContext);
};

export { AppContext, AppProvider };