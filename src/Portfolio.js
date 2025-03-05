import React, { useState } from "react";

function Portfolio() {
    const [selectedProject, setSelectedProject] = useState('websites');

    const renderContent = () => {
        switch (selectedProject) {
            case "websites":
                return <p>Here are some websites I've built</p>;
            case "android":
                return <p>Check out my android applications</p>
            case "graphics":
                return <p>Here are some of my graphic designs</p>
            default:
                return <p>Select a category to view my work</p>
        }
    }
    return (
        <div className="portfolioContainer">
            <h2><b>Portfolio</b></h2>
            <p id="underline"><span></span></p>

            <div className="portfolioTop">
                <button className = {selectedProject === 'websites' ? 'active' : ''}  onClick={() => setSelectedProject("websites")}><b>Websites</b></button>
                <button className = {selectedProject === 'android' ? 'active' : ''}  onClick={() => setSelectedProject("android")}><b>Android Apps</b></button>
                <button className ={selectedProject === 'graphics' ? 'active' : ''} onClick={() => setSelectedProject("graphics")}><b>Graphics Designs</b></button>
            </div>
            
            <div className="portfolioBody">
                {renderContent()}
            </div>
        </div>
    )
}

export default Portfolio;