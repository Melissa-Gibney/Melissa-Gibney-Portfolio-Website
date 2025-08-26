import './Project_Page.css';
import Header from '../../Components/General/Header.js';
import ExternalLinkButton from '../../Components/General/ExternalLinkButton.js';
import { faMedium } from '@fortawesome/free-brands-svg-icons';
import Footer from '../../Components/General/Footer.js';

function PicoCTFCapstoneProject() {
  return (
    <div className="Project">
        <Header pageName={'Project'}/>
        <div className="PageBody">
            <div className='Contents'>
                <h1>picoCTF Capstone Project</h1>
                <p>
                    Researched ways to improve user engagement and retention on the picoCTF cybersecurity platform as a part of a five-person team.
                    This project is ongoing and will move into the design and prototyping phases during the summer of 2025.
                </p>
                <p>
                    For updates on this project, you can check out our Medium blog posts!
                </p>
                <ExternalLinkButton link="https://medium.com/cmu-mhci-capstone-picoctf" icon={faMedium} size={"2x"} inverse={true} /*backgroundColor={"#0072b1"} hoverColor={"#1b9ce3"} activeColor={"#005c8f"} shadowColor={"#003b5c"}*//>
            </div>
        </div>
        <Footer/>
    </div>
  );
}

export default PicoCTFCapstoneProject;