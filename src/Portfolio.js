import React, { useState } from "react";


function Portfolio() {
    const [selectedProject, setSelectedProject] = useState('websites');
    const [currentImageIndex, setCurrentImageIndex] = useState({
        Western_Conglomerate: 0,
        Nevoline_Company: 0,
        Nevoline_Agrovet: 0,
        Gogetters_Constitution: 0,
        Carokens: 0
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

    const Gogetters_Constitution_Images = [
        '/websites/Gogetters_Constitution/Gogetters_Constitution_1.png',
        '/websites/Gogetters_Constitution/Gogetters_Constitution_2.png',
        '/websites/Gogetters_Constitution/Gogetters_Constitution_3.png'
    ]

    const Carokens_Images = [
        '/android/carokens/Design_1.png',
        '/android/carokens/Design_2.png'
    ]

    // Add state for graphics images and modal
    const [graphicsImages] = useState([
        "/graphics/Design_1.png",
        "/graphics/Design_2.png",
        "/graphics/Design_3.png",
        "/graphics/Design_4.png",
        "/graphics/Design_5.png",
        "/graphics/Design_6.png",
        "/graphics/Design_7.png"
    ]);
    
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const websiteDetails = {
        "NL_Welfare": {
            title: "Nevoline Welfare System",
            description: `
            This is a web application that serves as a comprehensive platform with dual interfaces catering to both administrators and members. For 
            administrators, it provides complete oversight of welfare group operations through an advanced dashboard featuring real-time member management 
            with compliance tracking, automated M-Pesa integration for seamless contribution processing and sophisticated analytical reporting tools. Members access a 
            dedicated portal where they can manage their personal contributions, track compliance status, view payment history and receive group communications - all through 
            the same web platform but with role appropriate permissions. This unified web approach ensures complete transparency and accountability while providing convenient 
            access for all stakeholders through a single, responsive application that adapts to each user's needs and responsibilities.`,
            technologies: "React.js, Django"
        },
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
            technologies: "EJS, Node.js, MySQL, MongoDB",
            link: "https://nevoline-agrovet.onrender.com/"
        },
        "Gogetters_Constitution": {
            title: "Go-Getters Constitution",
            description: `
            This is a constitution website for a group (chama). It provides for a table of contents which directs a user to various articles and sub-articles of 
            that particular constitution thereby making work easier for a member who wants to go through the constitution making it better than reading several pdf pages. `,
            technologies: "React.js",
            link: "https://gogetters-constitution.netlify.app/"
        }
    }

    const androidDetails = {
        "Nevoline Welfare System": {
            title: "Nevoline Welfare System",
            description: `
            This android application delivers a personalized welfare management experience directly to members' smartphones, putting community support in their pockets. Members 
            can effortlessly make contributions through integrated M-Pesa payments, track their personal compliance status in real-time, receive instant notifications about group activities 
            and access their complete contribution history on-the-go. The mobile-first design focuses on simplicity and convenience, allowing members to stay connected with their welfare 
            group without the complexity of administrative functions. With secure authentication and offline capability for basic features, the app ensures members remain engaged and compliant 
            while maintaining easy access to their welfare community whenever and wherever they need it.`
        },
        "Carokens": {
            title: "Carokens",
            description: `
            This is an app for a chama. It allows users to monitor their savings by showing their total savings and their graphs for the same.`,
            technologies: "Java, Node.js, MySQL"
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

    // Handle Image Click (When a user clicks an image, open a modal with navigation buttons)
    const openImageViewer = (index) => {
        setSelectedImageIndex(index);
    }

    // Handle Next and Previous Image
    const handleNextGraphic = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % graphicsImages.length);
    };
    const handlePrevGraphic = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex - 1 + graphicsImages.length) % graphicsImages.length);
    }

    // Close Modal on Click
    const closeImageViewer = () => {
        setSelectedImageIndex(null);
    }

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

    const renderAndroidSection = (category, images) => (
        <div className="android">
            <div className="androidLeft">
                <i className="fa-solid fa-circle-chevron-left" onClick={() => handlePrevImage(category, images)}></i>
                <img src={images[currentImageIndex[category]]} alt={`${category} Preview`} loading="lazy" />
                <i className="fa-solid fa-circle-chevron-right" onClick={() => handleNextImage(category, images)}></i>
            </div>
            <div className="androidRight">
                <h3>{androidDetails[category]?.title}</h3>
                <br/>
                <p>{androidDetails[category]?.description}</p>
                <br/>
                <p>Technologies: <span>{androidDetails[category]?.technologies}</span></p>
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
                        {renderWebsiteSection("Gogetters_Constitution", Gogetters_Constitution_Images)}
                    </div>
                )
            case "android":
                return (
                    <div className="androidContainer">
                        {renderAndroidSection("Carokens", Carokens_Images)}
                    </div>
                )
            case "graphics":
                return(
                    <div className="graphicsContainer">
                        {graphicsImages.map((img, index) => (
                            <img key={index} src={img} alt={`Graphic ${index}`} className="graphicsImage" loading="lazy" onClick={() => openImageViewer(index)}/>
                        ))}

                        {/* Image Viewer Modal */}
                        {selectedImageIndex !== null && (
                            <div className="imageViewer">
                                <button className="prevBtn" onClick={handlePrevGraphic}><i class="fa-solid fa-chevron-left"></i></button>
                                <img src={graphicsImages[selectedImageIndex]} alt="Selected Graphic" loading="lazy"/>
                                <button className="nextBtn" onClick={handleNextGraphic}><i class="fa-solid fa-chevron-right"></i></button>
                                <span className="closeBtn" onClick={closeImageViewer}>&times;</span>
                            </div>
                        )}
                    </div>
                )
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