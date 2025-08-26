import './Project_Page.css';
import Header from '../../Components/General/Header.js';
import ExternalLinkButton from '../../Components/General/ExternalLinkButton.js';
import { faDrum } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../Components/General/Footer.js';

function BumbleMeet() {
  return (
    <div className="Project">
        <Header pageName={'Project'}/>
        <div className="PageBody">
            <div className='Contents'>
                <h1>Bumble Meet</h1>
                <p>
                    Devised a new feature for the Bumble app that allows users to find public places to meet.
                </p>
                <p>
                    For more information about this project, please check the link below!
                </p>
                <ExternalLinkButton link="https://www.hajim.rochester.edu/senior-design-day/beat-buddy-3000-a-robotic-drum-machine/" icon={faDrum} size={"2x"} inverse={true} /*backgroundColor={"#0072b1"} hoverColor={"#1b9ce3"} activeColor={"#005c8f"} shadowColor={"#003b5c"}*//>
            </div>
        </div>
        <Footer pageName={'Project'}/>
    </div>
  );
}

export default BumbleMeet;