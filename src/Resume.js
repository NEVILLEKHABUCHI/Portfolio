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
                    <br/>
                </div>
            </div>
            <br/><br/>

            <div className="expertise">
                <br/>
                <div className="expertiseTop">
                    <i class="fa-solid fa-book-open"></i>
                    <h3>Expertise</h3>
                </div>
                <ul>
                    <br/>
                    <li>
                        <p>Website Development.</p>
                    </li>
                    <li>
                        <p>Database Management - <span>MySQL, MongoDB.</span></p>
                    </li>
                    <li>
                        <p>Android Development.</p>
                    </li>
                    <li>
                        <p>Graphics Designing.</p>
                    </li>
                    <li>
                        <p>Programming - <span>JavaScript, Java, Python.</span></p>
                    </li>
                    <li>
                        <p>Team collaboration / co-ordination.</p>
                    </li>
                </ul>
            </div>
            <br/><br/>

            <div className="skillsSummary">
                <div className="skillsSummaryTop">
                    <i class="fa-solid fa-book-open"></i>
                    <h3>Skills Summary</h3>
                </div>
                <ul>
                    <br/>
                    <li>
                        <div>
                            <p>Website Development</p>
                            <p><span></span></p>
                            <p>85%</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Database Management</p>
                            <p><span></span></p>
                            <p>75%</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Android Development</p>
                            <p><span></span></p>
                            <p>45%</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Graphics Designing</p>
                            <p><span></span></p>
                            <p>30%</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Resume;