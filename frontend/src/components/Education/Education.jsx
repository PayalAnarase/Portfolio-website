import { useEffect, useState } from "react";
import { getEducation } from "../../services/educationservices";
import "./Education.css";


const Education = () => {


    const [education, setEducation] = useState([]);



    useEffect(() => {


        const fetchEducation = async () => {

            try {

                const data = await getEducation();

                setEducation(data);

            } 
            catch(error) {

                console.log("Error fetching education:", error);

            }

        };


        fetchEducation();


    }, []);



    return (

        <section className="education" id="education">

            <h2>Education</h2>


            <div className="education-container">


                {
                    education.map((edu) => (

                        <div className="education-card" key={edu.id}>


                            <h3>
                                {edu.degree}
                            </h3>


                            <h4>
                                {edu.institute}
                            </h4>


                            <p className="duration">
                                {edu.start_year} - {edu.end_year}
                            </p>


                            
                    
                            {edu.Pointer && (
                          <p>
                          <strong>CGPA:</strong> {edu.Pointer}
                          </p>
                          )}

                          {edu.percentage && (
                           <p>
                         <strong>Percentage:</strong> {edu.percentage}
                         </p>
                          )}
                            


                        </div>

                    ))
                }


            </div>


        </section>

    );

};


export default Education;