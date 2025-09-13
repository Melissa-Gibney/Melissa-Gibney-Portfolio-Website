import './Project_Page.css';
import Header from '../../Components/General/Header.js';
import Footer from '../../Components/General/Footer.js';
import List from '../../Components/General/List.js';
import InfoCard from '../../Components/General/InfoCard.js';
// import { Link } from 'react-router-dom';

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
                            Developer
                        </h2>
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            UI/UX Designer
                        </h2>
                    </InfoCard>
                    <InfoCard title="Timeline">
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            March 2022-May 2022
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
                        <a style={{width: "100%", textAlign: "center", fontSize: "24px"}} href="https://github.com/Melissa-Gibney/Flute-Synthesizer" target='_blank'><b>Github</b></a>
                        <a style={{width: "100%", textAlign: "center", fontSize: "24px"}} href="/Melissa_Gibney_Flute_Synthesizer_Paper.pdf" target='_blank'><b>Research Paper</b></a>
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
                            My initial thoughts when designing the interface were that I wanted the parameters to stand out.
                            As a result, I chose to make each parameter a different bright color.
                            Knowing what I do now about design, I would do things a bit differently—leaving the dark background and making the parameter boxes each outlined in the same color rather than a different one.
                            I would also change the font to a different one, as the cursive text does not match the futuristic atmosphere of the rest of the application.
                            You can see my planned changes from the original design to a more cohesive one below.
                        </p>
                        {/* Insert Images HERE */}
                    </div>
                </div>
                <div className='Section'>
                    <div>
                        <h3>Technical Implementation</h3>
                        <p>
                            The implementation of this synthesizer is based upon research by Perry R. Cook which you may read <a href='http://hdl.handle.net/2027/spo.bbp2372.1992.072' target='_blank'>here</a>.
                            The first step to creating the synthesizer was setting up the inputs.
                            MIDI input is taken from the user, and the pitch and velocity are then used in calculations throughout the synthesizer code.
                            The pitch of the output is created by a sine wave that uses a frequency received from the MIDI input.
                            The breath pressure comes from the MIDI input as well, and it uses the MIDI velocity to calculate the appropriate pressure.
                            The attack-sustain-decay-release envelope and the pressure received from MIDI input create the initial signal, and then the vibrato and noise gain change the signal in order to create a flute-like sound.
                            The vibrato is generated using a sine wave, and its amplitude and frequency can be controlled by the user.
                            The next steps after generating the initial signal and is to model the feedback that occurs within a flute due to the way it is played.
                        </p>
                        <p>
                            Flute has a unique tone in part due to the way that air moves within the instrument.
                            A flute acts as a tube that is closed on one end, known as a bore—air is reflected off of the closed end and also interacts with the air that the player is blowing into the instrument.
                            Jet delay is used to simulate the interaction between the player's airstream and the air that is already moving inside of the flute, while bore delay deals with the interaction between the air jet and the air that is already in the bore of the flute.
                        </p>
                        <p>
                            The final stage of this synthesizer consists of a simple lowpass filter, a switch to turn the synthesizer on and off, and a gain slider to adjust the volume of the output.
                            The onepole function creates the lowpass filter with the pole at a frequency provided by the user.
                            The output from the onepole function is sent both to the gain slider and to the bore delay to create a feedback loop.
                        </p>
                        {/* Insert MIDI Code Image HERE */}
                    </div>
                </div>
                {/* <div className='Section'>
                    <div>
                        <h3>Takeaways???</h3>
                        <p>
                            
                        </p>
                    </div>
                </div> */}
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