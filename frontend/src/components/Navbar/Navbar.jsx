import "./Navbar.css";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar({ profile }) {

    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    return (

        <nav className={scrolled ? "navbar scrolled" : "navbar"}>

            <div className="logo">
                <h2>Payal</h2>
            </div>

            <div
                className="menu-icon"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={menuOpen ? "nav-links active" : "nav-links"}>

                <li>
                    <a href="#home" onClick={() => setMenuOpen(false)}>
                        Home
                    </a>
                </li>

                <li>
                    <a href="#about" onClick={() => setMenuOpen(false)}>
                        About
                    </a>
                </li>

                <li>
                    <a href="#skills" onClick={() => setMenuOpen(false)}>
                        Skills
                    </a>
                </li>

                <li>
                    <a href="#projects" onClick={() => setMenuOpen(false)}>
                        Projects
                    </a>
                </li>

                <li>
                    <a href="#education" onClick={() => setMenuOpen(false)}>
                        Education
                    </a>
                </li>

                <li>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>
                        Contact
                    </a>
                </li>

                <li>
                    <a
                        href={profile?.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-btn"
                        onClick={() => setMenuOpen(false)}
                    >
                        Resume
                    </a>
                </li>

            </ul>

        </nav>

    );
}

export default Navbar;