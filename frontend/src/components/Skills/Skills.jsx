import "./Skills.css";
import { motion } from "framer-motion";
function Skills(){
    return(
        <motion.section className="skills" id="skills" initial={{opacity:0,y:60}} whileInView={{opacity:1,y:0}} transition={{duration:0.8}} viewport={{once:true, amount:0.2}}>
        <div className="skills-header">
            <motion.h2 initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{duration:0.8}} viewport={{once:true}}>My Skills</motion.h2>
            <p>
                Here are the technologies and tools I use to build modern, responsive, and full-stack web applications.
            </p>


        </div>
        <div className="skills-container">
            <motion.div className="skill-card" whileHover={{scale:1.08,rotate:2}} transition={{type:"spring",stiffness:300}}>
                <h3>Frontend</h3>
                <div className="skill-tags">
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>Javascript</span>
                    <span>react</span>
                    <span>Bootstrap</span>
                </div>
            </motion.div>
            <motion.div className="skill-card" whileHover={{scale:1.08,rotate:2}} transition={{type: "spring", stiffness:300}}>
                <h3>Backend</h3>
                <div className="skill-tags">
                    <span>Python</span>
                    <span>Django</span>
                    <span>Django REST Framework</span>

                </div>

            </motion.div>
            <motion.div className="skill-card" whileHover={{scale:1.08,rotate:2}} transition={{type:"spring", stiffness:300}}>
                <h3>Database</h3>
                <div className="skill-tags">
                    <span>SQL</span>
                    <span>MySQL</span>

                </div>

            </motion.div>
            <motion.div className="skill-card" whileHover={{scale:1.08,rotate:2}} transition={{type:"spring",stiffness:300}}>
                <h3>Tools</h3>
                <div className="skill-tags">
                    <span>Git</span>
                    <span>GitHub</span>
                    <span>VS Code</span>
                    <span>Postman</span>
                    <span>Vite</span>

                </div>

            </motion.div>
            <motion.div className="skill-card" whileHover={{scale:1.08,rotate:2}} transition={{type:"spring",stiffness:300}}>
                <h3>Python Tools</h3>
                <div className="skill-tags">
                    <span>Anaconda</span>
                    <span>Jupyter Notebook</span>
                    <span>PyCharm</span>
                </div>
            </motion.div>
        </div>
    </motion.section>

    );
    
}
export default Skills;