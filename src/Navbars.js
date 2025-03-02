import React from "react";

function NavBars({ selectedSection, handleClick }) {
    return (
        <div className="top">
            <button className={`${selectedSection === 'about' ? 'active' : ''} `} onClick={() => handleClick("about")}><b>ABOUT</b></button>
            <button className={`${selectedSection === 'resume' ? 'active' : ''}`}  onClick={() => handleClick("resume")}><b>RESUME</b></button>
            <button className={`${selectedSection === 'portfolio' ? 'active' : ''}`}  onClick={() => handleClick("portfolio")}><b>PORTFOLIO</b></button>
            <button className={`${selectedSection === 'contact' ? 'active' : ''}`}  onClick={() => handleClick("contact")}><b>CONTACT</b></button>
        </div>
    )
}
export default NavBars;