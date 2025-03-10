import React from "react";

function Contact() {
    return(
        <div className="contactContainer">
            <h2><b>Contact Me</b></h2>
            <p id="underline"><span></span></p>

            <div className="formContainer">
                <form>
                    <div>
                        <label for="fullName"></label>
                        <input type="text" placeholder="Full Name"></input>

                        <label for="emailAddress"></label>
                        <input type="text" placeholder="Email Address"></input>
                    </div>
                    <div>
                        <textarea rows="6" cols="82" placeholder="Enter your Message here"/>
                    </div>
                    <div className="button">
                        <button>Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;