import React from "react";
import { useGlobalContext } from "./Context";
const Search = () => {
    const { searchArray } = useGlobalContext();
    return (
        <div>
            {searchArray.map((element) => {
                return (
                    <button>{element}</button>
                );
            })}
        </div>
    );
};

export default Search;