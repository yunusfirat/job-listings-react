import React from "react";
import { useGlobalContext } from "./Context";
import { VscClose } from "react-icons/vsc";

const Search = () => {
    const { searchArray, setSearchArray, Data, setJobData } = useGlobalContext();


    const remove = (e) => {
        let name = e.target.value;
        setSearchArray(searchArray.filter((element) => element !== e.target.value));
        const newArray = Data.filter((element) => name !=="" ? !element.role.includes(name)
        || !element.level.includes(name)
        || !element.languages.includes(name) === true : element);
        setJobData(newArray);
    };
    const clear = () => {
        setSearchArray(searchArray.filter((element) => element.length === 0));
        setJobData(Data);
    };
    return (
        <div className="search">
            <div style={{ display:"flex" }}>
            {searchArray.map((element) => {
                return (
                    <button
                    onClick={remove}
                    value={element}>{element}<VscClose /></button>
                );
            })}
            </div>
            <div>
            <button onClick={clear}
            className="clear">Clear <VscClose /></button>

            </div>
        </div>
    );
};

export default Search;