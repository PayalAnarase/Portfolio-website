import "./Hero.css";
import { motion } from "framer-motion"
function Hero({profile}){
    return(
        <motion.section className="hero" id="home" id="home" initial={{ opacity: 0, y:80 }} animate={{ opacity:1, y:0}} transition={{ duration: 0.8 }}>
            <motion.div className="hero-content" initial = {{ opacity:0,x:-80}} animate={{opacity:1,x:0 }} transition={{ delay:0.3, duration:0.8}}>
                <p className="greeting">Hi, I'm</p>
                <h1>Payal Anarase</h1>
                <h2>Computer Engineering Student</h2>
                <p className="description">
                    Passionate Full Stack Developer with knowledge of React, Django, Javascript and SQL.
                    I enjoy building modern web applications and continuously learning new technologies.

                </p>
                <div className="hero-buttons">
                    <button className="secondary-btn"><a href={profile?.resume} target="_blank" rel="noopener noreferrer">Download Resume</a></button>

                </div>

            </motion.div>

            < motion.div className="hero-image"  initial={{ opacity:0,x:80}} animate={{ opacity:1,x:0}} transition={{ delay:0.5, duration:0.8 }}>
                <img src="/src/assets/images/photo.jpeg" alt="Payal" />


            </motion.div>
        </motion.section>
    );
}
export default Hero;