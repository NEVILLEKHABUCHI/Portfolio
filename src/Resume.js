import React from "react";

function Resume() {
    return (
        <div className="resumeContainer">
            <h2><b>Resume</b></h2>
            <p id="underline"><span></span></p>

            <div className="education">
                <div className="educationTop">
                    <i class="fa-solid fa-book-open"></i>
                    <h3>Education</h3>
                    <br/>
                </div>
                <ul>
                    <br/>
                    <li>
                        <h4>Kisii University</h4>
                        <p>2022 - 2026</p>
                        <p>Bachelor of Science in Software Engineering.</p>
                    </li>
                    <br/>
                    <li>
                        <h4>Chavakali Boys High School</h4>
                        <p>2018 - 2021</p>
                        <p>I attained a mean grade of a B+.</p>
                    </li>
                    <br/>
                    <li>
                        <h4>Imani Primary School</h4>
                        <p>2007 - 2017</p>
                        <p>I attained 392/500 marks.</p>
                    </li>
                </ul>
            </div>
            <br/><br/>

            <div className="experience">
                <div className="experienceTop">
                    <i class="fa-solid fa-book-open"></i>
                    <h3>Experience</h3>
                </div>
            </div>
        </div>
    )
}

export default Resume;