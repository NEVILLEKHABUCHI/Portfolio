import React from "react";

function NavBars({ handleClick }) {
    return (
        <div className="top">
            <button onClick={() => handleClick("about")}><b>ABOUT</b></button>
            <button onClick={() => handleClick("resume")}><b>RESUME</b></button>
            <button onClick={() => handleClick("portfolio")}><b>PORTFOLIO</b></button>
            <button onClick={() => handleClick("contact")}><b>CONTACT</b></button>
        </div>
    )
}
export default NavBars;