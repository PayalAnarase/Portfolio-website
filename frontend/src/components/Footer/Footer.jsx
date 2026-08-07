import "./Footer.css";

const Footer =() =>{
    return(
        <footer className="footer">
            <div className="footer-content">
                <h2>Payal Anarase</h2>
                <p>Computer Engineering Student | Full Stack Developer</p>

            </div>
            <div className="footer-links">
                <a  href="mailto:your-payal.anarase11@gmail.com">📧 Email</a>
                <a  href="https://github.com/PayalAnarase"
                        target="_blank"
                        rel="noopener noreferrer"
                >💻 GitHub</a>
                 <a
                        href="https://www.linkedin.com/in/payal-anarase-b7372b262/?skipRedirect=true"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        🔗 LinkedIn
                </a>
                    <p className="copyright"> © 2026 Payal Anarase. All rights reserved.</p>

            </div>

        </footer>
    );
};
export default Footer;