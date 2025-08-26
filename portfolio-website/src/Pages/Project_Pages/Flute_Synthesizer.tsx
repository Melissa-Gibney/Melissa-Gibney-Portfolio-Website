import './Project_Page.css';
import Header from '../../Components/General/Header.js';
import ExternalLinkButton from '../../Components/General/ExternalLinkButton.js';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import Footer from '../../Components/General/Footer.js';

function FluteSynthesizer() {
  return (
    <div className="Project">
        <Header pageName={'Project'}/>
        <div className="PageBody">
            <div className='Contents'>
                <h1>Flute Synthesizer</h1>
                <p>
                    This flute synthesizer allows users to play the displayed keyboard and hear a synthesized flute output.
                    The user has full control over many aspects of the sound such as vibrato, breath pressure, and the noise of the air in the flute.
                    The entire project was created in Max, and the code was based off of a block diagram by Perry R. Cook.
                    My original goal when creating the GUI was to make each of the parameters stand out, so I decided to use the brightly-colored boxes and white text to contrast the black background.
                    I have since redesigned the interface to match my current design skills, though the code linked below still uses previous interface.
                    I also wrote a paper explaining the technical aspects of the project.
                </p>
                <p>
                    To view a research paper about this project, please check the link below!
                </p>
                <ExternalLinkButton link="../../Melissa_Gibney_Flute_Synthesizer_Paper.pdf" icon={faFilePdf} size={"2x"} inverse={true} /*backgroundColor={"#0072b1"} hoverColor={"#1b9ce3"} activeColor={"#005c8f"} shadowColor={"#003b5c"}*//>
            </div>
        </div>
        <Footer/>
    </div>
  );
}

export default FluteSynthesizer;