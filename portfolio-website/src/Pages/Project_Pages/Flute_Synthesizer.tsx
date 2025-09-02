import './Project_Page.css';
import Header from '../../Components/General/Header.js';
import Footer from '../../Components/General/Footer.js';
import List from '../../Components/General/List.js';
import InfoCard from '../../Components/General/InfoCard.js';
import { Link } from 'react-router-dom';

function FluteSynthesizer() {
  return (
    <div className="Project">
        <Header pageName={'Project'}/>
        <div className="PageBody">
            <div className='Contents'>
                <h1>Flute Synthesizer</h1>
                <List>
                    <InfoCard title="Role">
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            Artist
                        </h2>
                    </InfoCard>
                    <InfoCard title="Timeline">
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            
                        </h2>
                    </InfoCard>
                    <InfoCard title="Skills">
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            Max/MSP
                        </h2>
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            UI Design
                        </h2>
                    </InfoCard>
                    <InfoCard title="External Links">
                        <Link to="">Github</Link>
                        <Link to="../../Melissa_Gibney_Flute_Synthesizer_Paper.pdf">Research Paper</Link>
                    </InfoCard>
                </List>
                <div className='Section'>
                    <div>
                        <h3>Summary</h3>
                        <p>
                            This flute synthesizer allows users to play the displayed keyboard and hear a synthesized flute output.
                            The user has full control over many aspects of the sound such as vibrato, breath pressure, and the noise of the air in the flute.
                            The entire project was created in Max, and the code was based off of a block diagram by Perry R. Cook.
                            My original goal when creating the GUI was to make each of the parameters stand out, so I decided to use the brightly-colored boxes and white text to contrast the black background.
                            I have since redesigned the interface to match my current design skills, though the code linked below still uses previous interface.
                            I also wrote a paper explaining the technical aspects of the project.
                        </p>
                    </div>
                </div>
                <div className='Section'>
                    <div>
                        <h3>Design Decisions</h3>
                        <p>
                            
                        </p>
                    </div>
                </div>
                <div className='Section'>
                    <div>
                        <h3>Prototype Implementation</h3>
                        <p>
                            
                        </p>
                    </div>
                </div>
                <div className='Section'>
                    <div>
                        <h3>Future Plans</h3>
                        <p>
                            
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

export default FluteSynthesizer;