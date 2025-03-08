import React, { useState } from "react";


function Portfolio() {
    const [selectedProject, setSelectedProject] = useState('websites');
    const [currentImageIndex, setCurrentImageIndex] = useState({
        Western_Conglomerate: 0,
        Nevoline_Company: 0,
        Nevoline_Agrovet: 0
    });

    const Western_Conglomerate_Images = [
        '/websites/Western_Conglomerate/Western_Conglomerate_1.png',
        '/websites/Western_Conglomerate/Western_Conglomerate_2.png',
        '/websites/Western_Conglomerate/Western_Conglomerate_3.png'
    ]

    const Nevoline_Company_Images = [
        '/websites/Nevoline_Company/Nevoline_Company_1.png',
        '/websites/Nevoline_Company/Nevoline_Company_2.png',
        '/websites/Nevoline_Company/Nevoline_Company_3.png'
    ]

    const Nevoline_Agrovet_Images = [
        '/websites/Nevoline_Agrovet/Nevoline_Agrovet_1.png',
        '/websites/Nevoline_Agrovet/Nevoline_Agrovet_2.png',
        '/websites/Nevoline_Agrovet/Nevoline_Agrovet_3.png'
    ]

    // const Gogetters_Constitution_Images = [
    //     '/websites/'
    // ]

    const websiteDetails = {
        "Western_Conglomerate": {
            title: "Western Conglomerate State",
            description: `
            This is a web platform designed to link clients with engineers from diverse disciplines. It offers 
            an intuitive interface for users to explore engineering services, ensuring accessibility and efficiency in 
            professional connections.`,
            technologies: "React.js, Node.js",
            link: "https://western-conglomerate-state.vercel.app/"
        },
        "Nevoline_Company": {
            title: "Nevoline Company",
            description: `
            This is a website for a software company designed to showcase the services offered by the company, the 
            company's projects and the company's missions and visions.`,
            technologies: "React.js",
            link: "https://nevoline-company.vercel.app/"
        },
        "Nevoline_Agrovet": {
            title: "Nevoline Agrovet",
            description: `This is an e-commerce and advertising website providing functionalities for both admin and clients. It allows 
            admins to edit or update product details accordingly. Clients on the other hand are able to make their purchases and on completion, notificatiosn and receipts 
            are sent to their emails.`,
            technologies: "EJS, Node-js, MySQL, MongoDB",
            link: "https://nevoline-agrovet.onrender.com/"
        }
    }

    const handleNextImage = (category, images) => {
        setCurrentImageIndex((prevIndex) => ({
            ...prevIndex,
            [category]: (prevIndex[category] + 1) % images.length
        }));
    };

    const handlePrevImage = (category, images) => {
        setCurrentImageIndex((prevIndex) => ({
            ...prevIndex,
            [category]: (prevIndex[category] - 1 + images.length) % images.length
        }));
    };

    const renderWebsiteSection = (category, images) => (
        <div className="website">
            <div className="websiteLeft">
                <i className="fa-solid fa-circle-chevron-left" onClick={() => handlePrevImage(category, images)}></i>
                <img src={images[currentImageIndex[category]]} alt={`${category} Preview`} loading="lazy" />
                <i className="fa-solid fa-circle-chevron-right" onClick={() => handleNextImage(category, images)}></i>
            </div>
            <div className="websiteRight">
                <h3>{websiteDetails[category]?.title}</h3>
                <br/>
                <p>{websiteDetails[category]?.description}</p>
                <br/>
                <p>Technologies: <span>{websiteDetails[category]?.technologies}</span></p>
                <br/>
                <div>
                    <a href={websiteDetails[category]?.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            </div>
        </div>
    )

    const renderContent = () => {
        switch (selectedProject) {
            case "websites":
                return(
                    <div className="websiteContainer">
                        {renderWebsiteSection("Western_Conglomerate", Western_Conglomerate_Images)}
                        {renderWebsiteSection("Nevoline_Company", Nevoline_Company_Images)}
                        {renderWebsiteSection("Nevoline_Agrovet", Nevoline_Agrovet_Images)}
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