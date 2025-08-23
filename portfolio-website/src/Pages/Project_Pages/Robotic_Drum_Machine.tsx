import './Project_Page.css';
import Header from '../../Components/General/Header.js';
import ExternalLinkButton from '../../Components/General/ExternalLinkButton.js';
import { faDrum } from '@fortawesome/free-solid-svg-icons';

function RoboticDrumMachine() {
  return (
    <div className="Project">
        <Header/>
        <div className="PageBody">
            <div className='Contents'>
              <h1>Robotic Drum Machine: Beat Buddy 3000</h1>
              <p>
                I collaborated with a team to create the Beat Buddy 3000 over the course of the fall and spring semesters of my senior year during my undergraduate degrees.
                During the course of the project, we discussed our ideas and designs both with our mentors and with our client, an alumni of the Audio and Music Engineering major.
                We engineered our prototype to remain under a budget of $500 USD, and we carefully chose parts that best fit our use case.
              </p>
              <p>
                The first half of the project was spent researching what products were already on the market and learning exactly what was needed to create a successful robotic drum machine.
                We examined the price points of each product, the materials that were used, and the software involved.
              </p>
              <p>
                In the second half of the school year, my job was focused on 3D modeling the enclosure and drum attachments, along with programming some parts of the Arduino Mega controller.
                We settled on a 3D modeled enclosure due to the budget constraints, and I went through multiple iterations of each part while determining how to fit all of our electronics together.
                This whole process made me very familiar with Fusion360, the CAD software we were using, and it also helped me understand how measurement tolerances factor into designing enclosures for electronics.
                Programming the Arduino Mega was a new experience for me as well, as I had not programmed in that language previously.
                The project helped me understand how software interacts with hardware clocks and also brought home the importance of understanding the exact input and output each piece of hardware can take.
                Our OLED display required that we rewire it in order to work with the specific input that we needed.
                The hardware needed for the input and output was there, and it was listed on the spec sheet of the OLED screen, but it was not easy to access.
              </p>
              <p>
                For more information about this project, please check the link below!
              </p>
              <ExternalLinkButton link="https://www.hajim.rochester.edu/senior-design-day/beat-buddy-3000-a-robotic-drum-machine/" icon={faDrum} size={"2x"} inverse={true} /*backgroundColor={"#0072b1"} hoverColor={"#1b9ce3"} activeColor={"#005c8f"} shadowColor={"#003b5c"}*//>
            </div>
        </div>
    </div>
  );
}

export default RoboticDrumMachine;