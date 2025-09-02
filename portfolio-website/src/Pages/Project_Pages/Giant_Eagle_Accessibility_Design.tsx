import './Project_Page.css';
import Header from '../../Components/General/Header.js';
import Footer from '../../Components/General/Footer.js';
import List from '../../Components/General/List.js';
import InfoCard from '../../Components/General/InfoCard.js';
import { Link } from 'react-router-dom';

function GiantEagleAccessibilityDesign() {
  return (
    <div className="Project">
        <Header pageName={'Project'}/>
        <div className="PageBody">
            <div className='Contents'>
                <h1>Giant Eagle Accessibility Design</h1>
                <List>
                    <InfoCard title="Role">
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            Researcher
                        </h2>
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            UI/UX Designer
                        </h2>
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            3D Modeler
                        </h2>
                    </InfoCard>
                    <InfoCard title="Timeline">
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            March 2025 - May 2025
                        </h2>
                    </InfoCard>
                    <InfoCard title="Skills">
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            Figma
                        </h2>
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            UX Design
                        </h2>
                    </InfoCard>
                    <InfoCard title="External Link">
                        <Link to="">YouTube Showcase</Link>
                    </InfoCard>
                </List>
                <div className='Section'>
                    <div>
                        <h3>Summary</h3>
                        <p>
                            Researched and designed ways to improve accessibility at grocery storess using AR technology.
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

export default GiantEagleAccessibilityDesign;