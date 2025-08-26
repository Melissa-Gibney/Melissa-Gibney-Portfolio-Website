import './Project_Page.css';
import Header from '../../Components/General/Header.js';
import ExternalLinkButton from '../../Components/General/ExternalLinkButton.js';
import { faDrum } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../Components/General/Footer.js';

function CharacterCreator() {
  return (
    <div className="Project">
        <Header pageName={'Project'}/>
        <div className="PageBody">
            <div className='Contents'>
                <h1>Character Creator</h1>
                <p>
                    The idea for this project was to recreate some aspects of Pixiv, a popular character creator platform.
                    The platform allows artists to upload their artwork in layers, and users can choose different art for each layer and then export the composite image.
                    I began this project as any artist would-by creating art that could be separated into layers.
                </p>
                <p>
                    During my undergraduate degree, I dabbled in video game development, so I chose to create pixel art as I was very familiar with that style.
                    
                    Designed a web application that allows users to customize their own character using premade pixel art assets.
                    Each design can then be exported as an SVG or PNG.
                </p>
                <p>
                    To try out the project, please check the link below!
                </p>
                <ExternalLinkButton link="https://www.hajim.rochester.edu/senior-design-day/beat-buddy-3000-a-robotic-drum-machine/" icon={faDrum} size={"2x"} inverse={true} /*backgroundColor={"#0072b1"} hoverColor={"#1b9ce3"} activeColor={"#005c8f"} shadowColor={"#003b5c"}*//>
            </div>
        </div>
        <Footer/>
    </div>
  );
}

export default CharacterCreator;