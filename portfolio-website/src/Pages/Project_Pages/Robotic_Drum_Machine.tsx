import './Project_Page.css';
import Header from '../../Components/General/Header.js';
import Footer from '../../Components/General/Footer.js';
import List from '../../Components/General/List.js';
import InfoCard from '../../Components/General/InfoCard.js';
import { Link } from 'react-router-dom';

function RoboticDrumMachine() {
    return (
        <div className="Project">
            <Header pageName={'Project'}/>
            <div className="PageBody">
                <div className='Contents'>
                    <h1>Robotic Drum Machine: Beat Buddy 3000</h1>
                    <List>
                        <InfoCard title="Role">
                            <h2 style={{width: "100%", textAlign: "center"}}>
                                Designer
                            </h2>
                            <h2 style={{width: "100%", textAlign: "center"}}>
                                Developer
                            </h2>
                        </InfoCard>
                        <InfoCard title="Timeline">
                            <h2 style={{width: "100%", textAlign: "center"}}>
                                October 2023 - May 2024
                            </h2>
                        </InfoCard>
                        <InfoCard title="Skills">
                            <h2 style={{width: "100%", textAlign: "center"}}>
                                i2C
                            </h2>
                            <h2 style={{width: "100%", textAlign: "center"}}>
                                Arduino Mega
                            </h2>
                            <h2 style={{width: "100%", textAlign: "center"}}>
                                CAD
                            </h2>
                        </InfoCard>
                        <InfoCard title="External Links">
                            <Link style={{width: "100%", textAlign: "center", fontSize: "24px"}} to="https://github.com/Melissa-Gibney/Robotic-Drummer"><b>Github</b></Link>
                            <Link style={{width: "100%", textAlign: "center", fontSize: "24px"}} to="https://www.hajim.rochester.edu/senior-design-day/beat-buddy-3000-a-robotic-drum-machine/"><b>Website</b></Link>
                        </InfoCard>
                    </List>
                    <div className='Section'>
                        <div>
                            <h3>Summary</h3>
                            <p>
                                I collaborated with a three-person team to create the Beat Buddy 3000 over the course of the fall and spring semesters of my senior year during my undergraduate degrees.
                                During the course of the project, we discussed our ideas and designs both with our mentors and with our client, an alumni of the Audio and Music Engineering major.
                                We engineered our prototype to remain under a budget of $500 USD, and we carefully chose parts that best fit our use case.
                                The project helped me understand how software interacts with hardware clocks and also brought home the importance of understanding the exact input and output each piece of hardware can take.
                            </p>
                        </div>
                    </div>
                    <div className='Section'>
                        <div>
                            <h3>Design Decisions</h3>
                            <p>
                                The first half of the project was spent researching what products were already on the market and learning exactly what was needed to create a successful robotic drum machine.
                                We examined the price points of each product, the materials that were used, and the software involved.
                                I focused on the interface design and made a protoype using C++ and JUCE which we tested with others within the audio and music engineering major.
                                The layout of the interface was similar to that of a physical drum machine in order to match users' expectations with how those machines operate.
                                The biggest struggle with designing the layout of the interface was determining how we wanted users to control each of our parameters.
                                How do they control what is shown on the OLED screen?
                                Would having too many knobs confuse users?
                                Should there be a separate knob to control subdivisions?
                                The feedback from others caused us to use one knob to scroll through what was on the screen and use buttons to change which parameter that knob affected. 
                            </p>
                        </div>
                    </div>
                    <div className='Section'>
                        <div>
                            <h3>Prototype Implementation</h3>
                            <p>
                                After recieving feedback on the enclosure and determining our materials, we split into different roles.
                                In the second half of the project, my job was focused on 3D modeling the enclosure and drum attachments, along with programming some parts of the Arduino Mega controller.
                                We settled on a 3D modeled enclosure due to the budget constraints, and I went through multiple iterations of each part while determining how to fit all of our electronics together.
                                This whole process made me very familiar with Fusion360, the CAD software we were using, and it also helped me understand how measurement tolerances factor into designing enclosures for electronics.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='BubbleContainer'>
                <div style={{"--i":21} as React.CSSProperties}/>
                <div style={{"--i":10} as React.CSSProperties}/>
                <div style={{"--i":49} as React.CSSProperties}/>
                <div style={{"--i":35} as React.CSSProperties}/>
                <div style={{"--i":80} as React.CSSProperties}/>
                <div style={{"--i":63} as React.CSSProperties}/>
                <div style={{"--i":28} as React.CSSProperties}/>
                <div style={{"--i":55} as React.CSSProperties}/>
                <div style={{"--i":41} as React.CSSProperties}/>
                <div style={{"--i":35} as React.CSSProperties}/>
                <div style={{"--i":25} as React.CSSProperties}/>
            </div>
            <Footer pageName={'Project'}/>
        </div>
	);
}

export default RoboticDrumMachine;