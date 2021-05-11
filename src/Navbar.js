import React from "react";
import header from "./images/bg-header-desktop.svg";
const Navbar = () => {
    const objstyle = {
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        boxSizing: "border-box",
        backgroundColor: "hsla(180, 29%, 50%, 1)",
        height: "130px",
        width: "1440px",
    };
    return (
        <div className="navbar">
            <img src={header}
                alt="navbar"
                style={objstyle} ></img>
        </div>
    );
};


export default Navbar;