import React from "react";
import { useGlobalContext } from "./Context";
import { VscClose } from "react-icons/vsc";

const Search = () => {
    const { searchArray, setSearchArray } = useGlobalContext();

    const remove = (e) => {
        setSearchArray(searchArray.filter((element) => element !== e.target.value));
    };
    const clear = () => {
        while(searchArray.length>0){
            searchArray.pop();
        }
    setSearchArray(searchArray);
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
            <button onClick={clear}>Clear</button>

            </div>
        </div>
    );
};

export default Search;