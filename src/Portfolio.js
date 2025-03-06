import React, { useEffect, useState } from "react";


function Portfolio() {
    const [selectedProject, setSelectedProject] = useState('websites');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const Images = [
        '/websites/nevoline/Nevoline_1.png',
        '/websites/nevoline/Nevoline_2.png',
        '/websites/nevoline/Nevoline_3.png'
    ]

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % websiteImages.length);
    }
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + websiteImages.length) % websiteImages.length);
    }

    const renderContent = () => {
        switch (selectedProject) {
            case "websites":
                return(
                    <div className="websiteContainer">
                        <div className="website">
                            <div className="websiteLeft">
                                <i class="fa-solid fa-circle-chevron-left" onClick={prevImage}></i>
                                <img src={websiteImages[currentImageIndex]} alt="Website Preview"/>
                                <i class="fa-solid fa-circle-chevron-right" onClick={nextImage}></i>
                            </div>
                            <div className="websiteRight"></div>
                        </div>
                    </div>
                )
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