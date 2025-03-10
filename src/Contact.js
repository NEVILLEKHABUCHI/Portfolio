import React, { useState } from "react";

function Contact() {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://portfolio-backend-yfkj.onrender.com/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus("Message sent successfully!");
                setFormData({ fullName: "", email: "", message: "" }); // Reset form
            } else {
                setStatus("Error sending message.");
            }
        }  catch (error) {
            setStatus("Error sending message.");
            console.error(error);
        }
    }

    return(
        <div className="contactContainer">
            <h2><b>Contact Me</b></h2>
            <p id="underline"><span></span></p>

            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    {status && <p className={status.includes("Error") ? "error" : "success"}>{ status }</p>}
                    <div>
                        <label htmlFor="fullName"></label>
                        <input type="text" placeholder="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} required ></input>

                        <label htmlFor="emailAddress"></label>
                        <input type="text" placeholder="Email Address" name="email" value={formData.email} onChange={handleChange} required ></input>
                    </div>
                    <div>
                        <textarea rows="6" cols="82" placeholder="Enter your Message here" name="message" value={formData.message} onChange={handleChange} required/>
                    </div>
                    <div className="button">
                        <button type="submit">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;