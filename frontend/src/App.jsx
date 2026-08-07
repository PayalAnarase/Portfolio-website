import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/Footer";

import { useState, useEffect } from "react";
import API from "./services/api";
function App(){
  const[profile,setprofile]=useState(null);
  useEffect(() => {
    API.get("profile/")
    .then((res) =>{
      setprofile(res.data[0]);
    }

    )
    .catch((err) =>{
      console.log(err);
    }

    );
  },

  []);

  return(
    
    <>
      <Navbar profile={profile}/>
      <Hero profile={profile}/>
      <About />
      <Skills/>
      <Projects/>
      <Education/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;