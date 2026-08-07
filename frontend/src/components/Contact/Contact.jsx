import { useState } from "react";
import axios from "axios";
import "./Contact.css";



const Contact = () => {


    const [formData, setFormData] = useState({

        name:"",
        email:"",
        subject:"",
        message:""

    });



    const handleChange = (e)=>{

        setFormData({

            ...formData,

            [e.target.name]:e.target.value

        });

    };



    const handleSubmit = async(e)=>{

        e.preventDefault();


        try{

            await axios.post(

                "http://127.0.0.1:8000/api/contact/",

                formData

            );


            alert("Message sent successfully");


            setFormData({

                name:"",
                email:"",
                subject:"",
                message:""

            });


        }
        catch(error){

            console.log(error);

            alert("Something went wrong");

        }


    };



    return (

        <section className="contact" id="contact">


            <h2>Contact Me</h2>


            <div className="contact-container">


                <div className="contact-info">


    <h3>Let's Connect</h3>


    <p>
        📧 
        <a 
        href="https://mail.google.com/mail/?view=cm&fs=1&to=your-payal.anarase11@gmail.com"
         target="_blank">
          Email
        </a>
    </p>


    <p>
        💻 
        <a 
          href="https://github.com/PayalAnarase"
          target="_blank"
        >
            GitHub Profile
        </a>
    </p>


    <p>
        🔗 
        <a 
          href="https://www.linkedin.com/in/payal-anarase-b7372b262/?skipRedirect=true"
          target="_blank"
        >
            LinkedIn Profile
        </a>
    </p>


</div>


                <form 
                className="contact-form"
                onSubmit={handleSubmit}
                >


                    <input

                    type="text"

                    name="name"

                    placeholder="Your Name"

                    value={formData.name}

                    onChange={handleChange}

                    />



                    <input

                    type="email"

                    name="email"

                    placeholder="Your Email"

                    value={formData.email}

                    onChange={handleChange}

                    />



                    <input

                    type="text"

                    name="subject"

                    placeholder="Subject"

                    value={formData.subject}

                    onChange={handleChange}

                    />



                    <textarea

                    name="message"

                    placeholder="Message"

                    value={formData.message}

                    onChange={handleChange}

                    />


                    <button type="submit">
                        Send Message
                    </button>


                </form>


            </div>


        </section>

    );

};


export default Contact;