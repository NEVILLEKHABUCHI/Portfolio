import react from "react";

function About() {
    return (
        <div className="aboutContainer">
            <h2><b>About Me</b></h2>
            <p id="underline"><span></span></p>

            <p id="bio">
                I am a Software Engineer with expertise in Website and Android development, combined with a strong creative flair for graphic design. Passionate about 
                crafting seamless digital experiences, I focus on building solutions that are not only efficient and functional but also visually engaging and intuitive. 
                <br/><br/>
                My journey in technology has been fueled by the drive to turn ideas into intuitive, user-friendly solutions. Whether it's crafting dynamic websites, developing 
                high performance Android applications or designing captivating visuals, I strive to blend creativity with technical precision.
                <br/><br/>
                As an AI and ML enthusiast, I actively integrate artificial intelligence and machine learning capabilities into the applications and websites I build. From implementing 
                predictive analytics to developing intelligent chatbots and computer vision features, I leverage AI/ML technologies to create more adaptive, personalized and intelligent 
                user experiences that evolve and improve over time.
                <br/><br/>
                I possess extensive experience working with APIs, designing and integrating RESTful services to enable seamless data exchange and functionality across 
                different platforms. My expertise includes developing robust backend APIs, integrating third-party services, and ensuring secure, efficient communication 
                between frontend and backend systems while maintaining optimal performance and scalability.
                <br/><br/>
                Over the years, I have honed my skills across multiple disciplines, mastering the tools and technologies needed to bring concepts to life. I believe that great 
                design and efficient code go hand in hand, and I am committed to pushing the boundaries of innovation in every project I take on. My goal is not just meet 
                expectations but to exceed them - creating solutions that leave a lasting impact.
            </p>

            <h2><b>What I am Doing</b></h2>
            <p id="underline"><span></span></p>

            <div className="expertise">
                <div className="specialty">
                    <i class="fa-solid fa-globe"></i>
                    <div>
                        <h4>Website Development</h4>
                        <p>
                            I develop websites with HTML, CSS, JavaScript and React for Frontend and php, 
                            node-js and django for Backend.
                        </p>
                    </div>
                </div>
                <div className="specialty">
                    <i class="fa-solid fa-mobile-screen-button"></i>
                    <div>
                        <h4>Android Development</h4>
                        <p>
                            I develop Android applications using Java and React Native.
                        </p>
                    </div>
                </div>
                <div className="specialty">
                    <i class="fa-solid fa-palette"></i>
                    <div>
                        <h4>Graphics Designing</h4>
                        <p>
                            I design posters, flyers and banners using Adobe Photoshop and Canva. 
                        </p>
                    </div>
                </div>
            </div>

            <p id="divider"><span></span></p>
            <div className="icons">
                <i class="fa-brands fa-html5"></i>
                <i class="fa-brands fa-css3"></i>
                <i class="fa-brands fa-js"></i>
                <i class="fa-brands fa-react"></i>
                <i class="fa-brands fa-php"></i>
                <i class="fa-brands fa-node-js"></i>
                <i class="fa-brands fa-python"></i>
                <i class="fa-brands fa-java"></i>
                <i class="fa-solid fa-database"></i>
                <i class="fab fa-github"></i>
            </div>
        </div>
    )
}

export default About;